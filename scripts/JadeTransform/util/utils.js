var MongoClient = require('mongodb').MongoClient;
var config = require('../../JadeTransform/config-mongo.js');
var Q = require('q');

module.exports = {
    /**
     * Returns a more informational error.
     * @param {Object} err Error object
     */
    handleError: function(err) {
        if (typeof err === 'object') {
            if (err.message) {
                console.log('\nMessage: ' + err.message)
            }
            if (err.stack) {
                console.log('\nStacktrace:');
                console.log('====================');
                console.log(err.stack);
            }
        } else {
            console.log('dumpError :: argument is not an object');
        }
    },

    /**
     * Returns true if customer exist
     * else false.
     * @param {String} code Database name
     */
    customerExist : function(code){
        var deferred = Q.defer();
        var url = 'mongodb://'+config.mongoHost+':'+config.mongoPort+'/'+ code;

        MongoClient.connect(url, function(err, db) {
            if (err) {
                deferred.reject(err);
            }
            else {
                var company = db.collection('company');
                company.find( {
                    code : code
                }).toArray(function(err, result){
                    if (err) {
                        deferred.reject(err);
                        db.close();
                    }
                    else {
                        if (result.length) {
                            deferred.resolve(true);
                        }
                        else {
                            deferred.resolve(false);
                        }
                        db.close();
                    }
                });
            }
        });

        return deferred.promise;
    },

    dropDatabase : function(code) {
        var url = 'mongodb://'+config.mongoHost+':'+config.mongoPort+'/'+code;
        MongoClient.connect(url, function(err, db) {
            if (err) {
                this.handleError(err);
            }
            else {
                db.dropDatabase(function(err, result){
                    if (err) {
                        this.handleError(err);
                    }
                });
            }
        });
    }
};