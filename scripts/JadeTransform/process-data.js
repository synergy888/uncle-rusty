var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var transform = require('./util/mongo-transform.js');
var configPrompt = require('./config-prompt.js');
var ImportToMongo = require('./import_mongo_data.js');
var fs = require('fs');
var Q = require('q');
var companyTransform = require('./util/company-transform.js');
var notificationTransform = require('./util/notification-transform.js');
var productTransform = require('./util/product-transform.js');
var templateTransform = require('./util/template-transform.js');
var userTransform = require('./util/user-transform.js');

module.exports = {

    processData : function (dropDB) {
        var self = this;
        var inputFolder = process.env.MONGO_INPUT_FOLDER;
        if (inputFolder === undefined) {
            inputFolder =  configMongo.input_folder;
        }
        var promptInputFolder = {
            properties: {
                inputFolder: {
                    message: configPrompt.input_folder,
                    default: inputFolder,
                    required: false
                },
            }
        };

        prompt.get(promptInputFolder, function (err, result) {
            if (err) {
                util.handleError(err);
            }

            result.inputFolder = __dirname + '/' + result.inputFolder;

            checkInputDir(result.inputFolder).then(function(exist){
                if(exist) {
                    console.log('input folder: ' + result.inputFolder);
                    configMongo.input_folder = result.inputFolder;

                    var outputFolder = process.env.MONGO_OUTPUT_FOLDER;
                    if (outputFolder === undefined) {
                        outputFolder = configMongo.output_folder;
                    }
                    var promptOutputFolder = {
                        properties: {
                            outputFolder: {
                                message: configPrompt.output_folder,
                                default: outputFolder,
                                required: false
                            },
                        }
                    };

                    prompt.get(promptOutputFolder, function (err, result) {
                        if (err) {
                            util.handleError(err);
                        }

                        configMongo.output_folder =  __dirname + '/' + result.outputFolder;

                        var output_to_folder_only = {
                            properties: {
                                outputFolderOnly: {
                                    message: configPrompt.import_to_mongo,
                                    default: configMongo.output_to_folder_only,
                                    required: false
                                },
                            }
                        };

                        prompt.get(output_to_folder_only, function (err, result) {
                            if (err) {
                                util.handleError(err);
                            }
                            if (result.outputFolderOnly.substring(0, 1) === 'n') {
                                configMongo.output_to_folder_only = 'n';
                                if(dropDB){
                                    util.dropDatabase(configMongo.company_code);
                                }
                            }
                            else {
                                configMongo.output_to_folder_only = 'y';
                            }


                            setTimeout(function () {
                                global.transformMongoProperties = transform.populateTransformObjects(configMongo);
                                if (global.transformMongoProperties === undefined) {
                                    process.exit();
                                }
                                if (global.transformMongoProperties.output_to_folder_only === 'n') {
                                    self.transformMongoJSONFile(global.transformMongoProperties);
                                    checkProductsInstall().then(function(){
                                        bReturn = ImportToMongo.runImport(configMongo, 'company', 'companies.json');
                                        if (bReturn === true) {
                                            bReturn = ImportToMongo.runImport(configMongo, 'notificationDefinitions', 'notificationDefinitions.json');
                                        }
                                        else {
                                            try {
                                                if (fs.statSync(global.transformMongoProperties.output_folder + '/' + 'companies.json').isFile() === false) {
                                                    console.log('File does not exist in the output directory. Error importing companies.json file to Mongo DB.');
                                                    process.exit();
                                                }
                                            }
                                            catch (err) {
                                                console.log('File does not exist in the output directory. Error importing companies.json file to Mongo DB.');
                                                process.exit();
                                            }

                                            console.log('Error importing companies.json file to Mongo DB.');
                                            process.exit();
                                        }
                                        if (bReturn === true) {
                                            bReturn = ImportToMongo.runImport(configMongo, 'productDefinitions', 'productDefinitions.json');
                                        }
                                        else {
                                            try {
                                                if (fs.statSync(global.transformMongoProperties.output_folder + '/' + 'notificationDefinitions.json').isFile() === false) {
                                                    console.log('File does not exist in the output directory. Error importing notificationDefinitions.json file to Mongo DB.');
                                                    process.exit();
                                                }
                                            }
                                            catch (err) {
                                                console.log('File does not exist in the output directory. Error importing notificationDefinitions.json file to Mongo DB.');
                                                process.exit();
                                            }

                                            console.log('Error importing notificationDefinitions.json file to Mongo DB.');
                                            process.exit();
                                        }
                                        if (bReturn === true) {
                                            bReturn = ImportToMongo.runImport(configMongo, 'templateDefinitions', 'templateDefinitions.json');
                                        }
                                        else {
                                            try {
                                                if (fs.statSync(global.transformMongoProperties.output_folder + '/' + 'productDefinitions.json').isFile() === false) {
                                                    console.log('File does not exist in the output directory. Error importing productDefinitions.json file to Mongo DB.');
                                                    process.exit();
                                                }
                                            }
                                            catch (err) {
                                                console.log('File does not exist in the output directory. Error importing productDefinitions.json file to Mongo DB.');
                                                process.exit();
                                            }

                                            console.log('Error importing productDefinitions.json file to Mongo DB.');
                                            process.exit();
                                        }
                                        if (bReturn === true) {
                                            bReturn = ImportToMongo.runImport(configMongo, 'users', 'users.json');
                                        }
                                        else {
                                            try {
                                                if (fs.statSync(global.transformMongoProperties.output_folder + '/' + 'templateDefinitions.json').isFile() === false) {
                                                    console.log('File does not exist in the output directory. Error importing templateDefinitions.json file to Mongo DB.');
                                                    process.exit();
                                                }
                                            }
                                            catch (err) {
                                                console.log('File does not exist in the output directory. Error importing templateDefinitions.json file to Mongo DB.');
                                                process.exit();
                                            }

                                            console.log('Error importing templateDefinitions.json file to Mongo DB.');
                                            process.exit();
                                        }
                                        if (bReturn === false) {
                                            try {
                                                if (fs.statSync(global.transformMongoProperties.output_folder + '/' + 'users.json').isFile() === false) {
                                                    console.log('File does not exist in the output directory. Error importing users.json file to Mongo DB.');
                                                    process.exit();
                                                }
                                            }
                                            catch (err) {
                                                console.log('File does not exist in the output directory. Error importing users.json file to Mongo DB.');
                                                process.exit();
                                            }

                                            console.log('Error importing users.json file to Mongo DB.');
                                            process.exit();
                                        }
                                        if (global.transformMongoProperties.import_already_rendered_to_mongo === 'n') {
                                            console.log('Successfully imported newly transformed .json seed data to Mongo DB.');
                                            process.exit();
                                        }
                                        else {
                                            console.log('Successfully imported previously rendered .json seed data to Mongo DB.');
                                            process.exit();
                                        }
                                    }).catch(function(err){
                                        util.handleError(err);
                                    });
                                }
                                else {
                                    self.transformMongoJSONFile(global.transformMongoProperties);
                                    process.exit();
                                }

                            }, 500);

                        });
                    });
                } else {
                    console.log('The directory does not exists');
                    process.exit();
                }
            });
        });
    },

    /**
     * Transforms mongo .json seed data files by applying configuration settings
     */
    transformMongoJSONFile : function (transformProperties) {
        var bReturn = companyTransform.transformMongoJSONFile(transformProperties, transformProperties.input_folder + '/companies.json', transformProperties.output_folder + '/companies.json');

        if (bReturn === true) {
            bReturn = notificationTransform.transformMongoJSONFile(transformProperties, transformProperties.input_folder + '/notificationDefinitions.json', transformProperties.output_folder + '/notificationDefinitions.json');
        }
        else {
            console.log('Error transforming .json file companies.json');
            process.exit();
        }
        if (bReturn === true) {
            bReturn = productTransform.transformMongoJSONFile(transformProperties, transformProperties.input_folder + '/productDefinitions.json', transformProperties.output_folder + '/productDefinitions.json');
        }
        else {
            console.log('Error transforming .json file notificationDefinitions.json');
            process.exit();
        }
        if (bReturn === true) {
            bReturn = templateTransform.transformMongoJSONFile(transformProperties, transformProperties.input_folder + '/templateDefinitions.json', transformProperties.output_folder + '/templateDefinitions.json');
        }
        else {
            console.log('Error transforming .json file productDefinitions.json');
            process.exit();
        }
        if (bReturn === true) {
            bReturn = userTransform.transformMongoJSONFile(transformProperties, transformProperties.input_folder + '/users.json', transformProperties.output_folder + '/users.json');
        }
        else {
            console.log('Error transforming .json file templateDefinitions.json');
            process.exit();
        }
        if (bReturn === false) {
            console.log('Error transforming .json file users.json');
            process.exit();
        }

        console.log('Successfully transformed .json Mongo seed data to the following folder: ' + transformProperties.output_folder);
    }
};

var checkInputDir = function(directory){
    var deferred = Q.defer();
    if(fs.statSync(directory).isDirectory()) {
        if(fs.statSync(directory+'/users.json').isFile()) {
            if(fs.statSync(directory+'/templateDefinitions.json').isFile()) {
                if(fs.statSync(directory+'/productDefinitions.json').isFile()) {
                    if(fs.statSync(directory+'/notificationDefinitions.json').isFile()) {
                        if(fs.statSync(directory+'/companies.json').isFile()) {
                            deferred.resolve(true);
                        } else {
                            deferred.resolve(false);
                        }
                    } else {
                        deferred.resolve(false);
                    }
                } else {
                    deferred.resolve(false);
                }
            } else {
                deferred.resolve(false);
            }
        } else {
            deferred.resolve(false);
        }

    } else {
        deferred.resolve(false);
    }
    return deferred.promise;
}

function checkProductsInstall(){
    var deferred = Q.defer();

    checkProductInstalled(configMongo.product1_install, configMongo.Companies_products_commerce_code).then(function(){
        checkProductInstalled(configMongo.product2_install, configMongo.Companies_products_ticket_code).then(function(){
            checkProductInstalled(configMongo.product3_install, configMongo.Companies_products_bulkticket_code).then(function(){
                checkProductInstalled(configMongo.product4_install, configMongo.Companies_products_jobsite_code).then(function(){
                    deferred.resolve();
                }).catch(function(err){
                    util.handleError(err);
                });
            }).catch(function(err){
                util.handleError(err);
            });
        }).catch(function(err){
            util.handleError(err);
        });
    }).catch(function(err){
        util.handleError(err);
    });

    return deferred.promise;
}

function checkProductInstalled(productFlag, productCode){
    var deferred = Q.defer();

    if (productFlag === 'y') {
        deferred.resolve();
    }
    else {
        var company = require('./mongo_english_out/companies.json');

        for (var key in company[0].products) {
            if (company[0].products[key].code === productCode) {
                company[0].products.splice(key,1);
                fs.writeFile(__dirname + '/mongo_english_out/companies.json', JSON.stringify(company), function (err) {
                    if (err) {
                        util.handleError(err);
                        deferred.resolve();
                    }
                    else {
                        deferred.resolve();
                    }
                });
            }
        }
    }
    return deferred.promise;
}