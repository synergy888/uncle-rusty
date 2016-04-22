var Promise = require('bluebird');
var shell = require('shelljs');
var fs = require('fs');
var colors = require('colors');

// Make mongo thenable.
var MongoClient = require('mongodb-promisified')(Promise).MongoClient;

var url = 'mongodb://' + 'localhost' + ':' + '27017';
var company = 'newco';

var resolver = Promise.defer();
  var count = 0;
    return MongoClient.connect(url + '/' + company)
      .then(function(db) {
        var contextQuery = { 'type': { '$exists': false }, 'hash': { '$exists': true } };
        var contextOperator = { '$set': { 'type': 'Context' } };
        return db.collection('users').updateMany(contextQuery, contextOperator, { 'multi': true })
          .then(function() {'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort;
            var noncontextQuery = { 'type': { '$exists': false }, 'hash': { '$exists': false } };
            var noncontextOperator = { '$set': { 'type': 'Noncontext' } };
            return db.collection('users').updateMany(noncontextQuery, noncontextOperator, { 'multi': true })
            .then(function() {
              return db.close()
                .then(function() {
                  console.log('Updated users type for company ' + company);
                  count++;
                  if (count == config.collections.companies.length) {
                    return resolver.resolve();
                  }
                });              
            });
          });
      })
      .catch(function(err) {
        console.error(err);
        return resolver.reject(err);
      });

  return resolver.promise;