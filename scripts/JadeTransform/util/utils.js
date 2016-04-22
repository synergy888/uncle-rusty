var MongoClient = require('mongodb').MongoClient;
var config = require('../../JadeTransform/config-mongo.js');

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
     */
    customerExist : function(code, cb){
        var url = 'mongodb://'+config.mongoHost+':'+config.mongoPort+'/'+ code;

        MongoClient.connect(url, function(err, db) {
            if (err) {
                throw err;
                cb(false);
            }
            else {
                var company = db.collection('company');
                company.find( {
                    code : code
                }).toArray(function(err, result){
                    if (err) {
                        this.handleError(err);
                        db.close();
                    }
                    else {
                        if (result.length) {
                            cb(true);
                        }
                        else {
                            cb(false);
                        }
                        db.close();
                    }
                });
            }
        });
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
    },

    getTimezoneData : function(timezone) {
        return {
            operator : timezone.substr(0, 1),
            hours : timezone.substr(1, 2),
            minutes : timezone.substr(3)
        }
    }
};