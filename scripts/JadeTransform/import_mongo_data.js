#! /usr/bin/env node

var _ = require('lodash');
var shell = require("shelljs");
var config = require('./../JadeTransform/config-mongo.js');
var checkPort = require('tcp-port-used');
var colors = require('colors');

/**
 * Checks to see if anything is running on the specified mongo port (defaults to 27017)
 * @returns {Boolean} Is Mongo running?
 */
function checkMongo(){
    return checkPort.check(config.mongoPort, config.mongoHost)
}

var ImportToMongo = {
    runImport: function (configMongo, collectionName, jsonFile) {
        try {
            if (checkMongo() === false) {
                return false;
            }

            var filespec = configMongo.output_folder + '/' + jsonFile;
            shell.exec('mongoimport -h ' + config.mongoHost + ' --port ' + config.mongoPort + ' -d ' + config.company_code + ' -c ' + collectionName + ' --jsonArray --stopOnError --file ' + filespec);

            return true;
        }
        catch (err)
        {
            return false;
        }
        return true;
    }
};

module.exports = ImportToMongo