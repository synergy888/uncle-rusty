#! /usr/bin/env node

var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var configPrompts = require('./config-prompt.js');
var nonProductInfo = require('./non-product-info');
var product1 = require('./mobile-commerce.js');
var product2 = require('./mobile-ticket.js');
var product3 = require('./mobile-ticket-bulk.js');
var product4 = require('./jobsite.js');
var processData = require('./process-data');
var auth = require('./util/auth');
var util = require('./util/utils');
var argv = require('yargs').argv;
var MongoClient = require('mongodb').MongoClient;
var Q = require('q');
var async = require('async');

if(argv.get){

} else

if(argv.rollback){

}
else {

    var url = 'mongodb://'+configMongo.mongoHost+':'+configMongo.mongoPort+'/'+ configMongo.company_code;

    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Error in connecting MongoDB...');
            process.exit();
        }
        else {
            prompt.override = argv;

            console.log('\n\nThe purpose of this app is to setup a new company by modifying Mongo JSON seed data files and creating new Mongo JSON seed data files for the new company.  ');
            console.log('Please edit the config-mongo.js file and assign the appropriate values to the config variables.\n\n');

            prompt.start();

            var promptVerify = {
                name: 'yesno',
                message: 'Do you wish to continue?',
                validator: /^(y[es]*|n[o]*)$/,
                warning: 'You must enter yes or no',
                default: 'yes'
            };

            prompt.get(promptVerify, function (err, result) {
                if (err) {
                    util.handleError(err);
                }

                if (result.yesno.substring(0, 1) == 'n') {
                    process.exit();
                }


                var companyCode = process.env.COMPANY_CODE;
                if (companyCode === undefined) {
                    companyCode = configMongo.company_code;
                }
                var promptCompanyCode = {
                    properties: {
                        company_code: {
                            message: configPrompts.company_code,
                            default: companyCode,
                            required: false
                        }
                    }
                };

                prompt.get(promptCompanyCode, function (err, result) {
                    if (err) {
                        util.handleError(err);
                    }
                    configMongo.company_code = result.company_code;
                    configMongo.customer_code = result.company_code;
                    configMongo.Users_products_commerce_settings_customer_code = result.company_code;
                    configMongo.Users_products_jobsite_settings_customer_code = result.company_code;
                    configMongo.Companies_products_commerce_settings_user_customer_code = result.company_code;
                    configMongo.Companies_products_jobsite_settings_user_customer_code = result.company_code;
                    configMongo.Companies_code = result.company_code;
                    console.log('company code is: ' + configMongo.company_code);
                    //Username
                    configMongo.Users_userName = result.company_code+'admin';

                    auth.genHash(auth.genPass()).then(function(result){
                        configMongo.Users_hash = result.hash;
                    });

                    var new_or_existing = process.env.NEW_OR_EXISTING;
                    if (new_or_existing === undefined) {
                        new_or_existing = configMongo.new_or_existing_customer;
                    }

                    var promptNewOrExisting = {
                        properties: {
                            neworexisting: {
                                message: configPrompts.new_customer_prompt,
                                default: new_or_existing,
                                validator: /^(y[es]*|n[o]*)$/,
                                warning: 'You must enter yes or no',
                                required: true
                            }
                        }
                    };


                    prompt.get(promptNewOrExisting, function (err, result) {
                        if (err) {
                            util.handleError(err);
                        }
                        configMongo.new_or_existing_customer = result.neworexisting;
                        console.log('New or existing customer: ' + configMongo.new_or_existing_customer);

                        if (result.neworexisting.substring(0, 1) == 'y') {

                            util.customerExist(configMongo.company_code).then(function(exist){
                                if (exist) {

                                    var promptExist = {
                                        properties : {
                                            exist : {
                                                message : configPrompts.customer_already_exist,
                                                default : 'y',
                                                validator: /^(y[es]*|n[o]*)$/,
                                                warning: 'You must enter yes or no',
                                                required : true
                                            }
                                        }
                                    }

                                    prompt.get(promptExist, function (err, result) {
                                        if (err) {
                                            util.handleError(err);
                                        }

                                        if (result.exist.substring(0, 1) == 'n') {
                                            process.exit();
                                        }
                                        else {
                                            nonProductInfo.getNonProductInfo(configMongo).then(function(){
                                                installMobileCommerce(false).then(function(){
                                                    installMobileTicket(false).then(function(){
                                                        installMobileTicketBulk(false).then(function(){
                                                            installJobsite(false).then(function(){
                                                                processData.processData(true);
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
                                            }).catch(function(err){
                                                util.handleError(err);
                                            });
                                        }
                                    })
                                }
                                else {

                                    nonProductInfo.getNonProductInfo(configMongo).then(function(){
                                        installMobileCommerce(false).then(function(){
                                            installMobileTicket(false).then(function(){
                                                installMobileTicketBulk(false).then(function(){
                                                    installJobsite(false).then(function(){
                                                        processData.processData(false);
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
                                    }).catch(function(err){
                                        util.handleError(err);
                                    });
                                }
                            }).catch(function(err){
                                util.handleError(err);
                                process.exit();
                            });
                        }
                        else {

                            util.customerExist(configMongo.company_code).then(function(exist){
                                if (exist) {
                                    getNonProductInfo().then(function(){
                                        installMobileCommerce(true).then(function(){
                                            installMobileTicket(true).then(function(){
                                                installMobileTicketBulk(true).then(function(){
                                                    installJobsite(true).then(function(){
                                                        processData.processData(true);
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
                                    }).catch(function(err){
                                        util.handleError(err);
                                    });
                                }
                                else {
                                    console.log('Sorry the customer does not exist!!!');
                                    process.exit();
                                }
                            }).catch(function(err){
                                util.handleError(err);
                                process.exit();
                            });
                        }

                    });
                });
            });
        }
    });
}

var getNonProductInfo = function(){
    var deferred = Q.defer();

    var promptFlag = {
        properties: {
            flag: {
                message: 'Do you want to modify non-product related company information?',
                default: 'y',
                validator: /^(y[es]*|n[o]*)$/,
                warning: 'You must enter yes or no',
                required: false
            }
        }
    };

    prompt.get(promptFlag, function(err, result){
        if (err){
            util.handleError(err);
        }

        if(result.flag.substring(0, 1) === 'y'){
            var data = {};
            var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    util.handleError(err);
                }
                else {
                    var collection = db.collection('company');
                    collection.find({}).toArray( function (err, result) {
                        if (err) {
                            util.handleError(err);
                        }
                        else {
                            data.company_code = result[0].code;
                            data.Companies_description = result[0].description;
                            data.Companies_status = result[0].status;
                            data.Companies_settings_communications_email_from_name = result[0].settings.communications.email.from.name;
                            data.Companies_settings_communications_email_from_value = result[0].settings.communications.email.from.value;
                            data.Companies_settings_cloudStore = result[0].settings.cloudStore;
                            data.Companies_products_commerce_settings_env = result[0].products[0].settings.environment;

                            db.close();

                            nonProductInfo.getNonProductInfo(data).then(function(){
                                deferred.resolve();
                            }).catch(function(err){
                                util.handleError(err);
                            });
                        }
                    });
                }
            });
        }
        else {
            var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;

            MongoClient.connect(url, function(err, db) {
                if (err) {
                    util.handleError(err);
                }
                else {
                    var collection = db.collection('company');
                    collection.find({}).toArray( function (err, result) {
                        if (err) {
                            util.handleError(err);
                        }
                        else {
                            configMongo.Companies_code = result[0].code;
                            configMongo.Companies_products_commerce_settings_env = result[0].environment;
                            configMongo.Companies_description = result[0].description;
                            configMongo.Companies_status = result[0].status;
                            configMongo.Companies_settings_communications_email_from_name = result[0].settings.communications.email.from.name;
                            configMongo.Companies_settings_communications_email_from_value = result[0].settings.communications.email.from.value;
                            configMongo.Companies_settings_cloudStore = result[0].settings.cloudStore;
                            configMongo.Companies_products_commerce_settings_env = result[0].products[0].settings.environment;

                            db.close();

                            deferred.resolve();
                        }
                    });
                }
            });
        }
    });

    return deferred.promise;
}

var installMobileCommerce = function(fromDB){
    var deferred = Q.defer();

    if(!fromDB){
        var product_installation = process.env.PRODUCT_INSTALLATION;
        if (product_installation === undefined) {
            product_installation = configMongo.product_default_option;
        }

        var promptProductInstallation = {
            properties: {
                product_installation: {
                    message: configPrompts.installProduct(configMongo.product_installation),
                    default: product_installation,
                    validator: /^(y[es]*|n[o]*)$/,
                    warning: 'You must enter yes or no',
                    required: false
                }
            }
        };


        prompt.get(promptProductInstallation, function (err, result) {
            if (err) {
                util.handleError(err);
            }

            if (result.product_installation.substring(0,1) === 'y') {

                configMongo.product1_install = 'y';
                result.product_installation = configMongo.product_installation;
                configMongo.product_installation = result.product_installation;
                configMongo.productDefinitions_commerce_code = result.product_installation;
                configMongo.Users_products_commerce_code = result.product_installation;
                configMongo.Companies_products_commerce_code = result.product_installation;

                console.log('product installing: ' + configMongo.product_installation);

                product1.mobileCommerceInstall(configMongo).then(function(){
                    deferred.resolve();
                }).catch(function(err){
                    util.handleError(err);
                })
            }
            else {
                configMongo.product1_install = 'n';
                deferred.resolve();
            }
        });
    }else{
        configMongo.productDefinitions_commerce_code = configMongo.product_installation;
        configMongo.Users_products_commerce_code = configMongo.product_installation;
        configMongo.Companies_products_commerce_code = configMongo.product_installation;

        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
        MongoClient.connect(url, function(err, db) {
            if (err) {
                util.handleError(err);
            }
            else {
                var collection = db.collection('company');
                collection.find({}).toArray(function (err, result) {
                    if (err) {
                        util.handleError(err);
                    }
                    else {
                        checkIfProductInstalled(result, configMongo.product_installation, function(flag){
                            if(flag){
                                var promptFlag = {
                                    properties: {
                                        flag: {
                                            message: configPrompts.productAlreadyInstalled(configMongo.product_installation),
                                            default: 'y',
                                            validator: /^(y[es]*|n[o]*)$/,
                                            warning: 'You must enter yes or no',
                                            required: false
                                        }
                                    }
                                };

                                prompt.get(promptFlag, function(err, result) {
                                    if (err) {
                                        util.handleError(err);
                                    }
                                    if (result.flag.substring(0, 1) === 'y') {
                                        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
                                        MongoClient.connect(url, function(err, db) {
                                            if (err) {
                                                util.handleError(err);
                                            }
                                            else {
                                                var collection = db.collection('company');
                                                collection.find({}).toArray(function (err, results) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }
                                                    else {
                                                        var data = {};
                                                        data.Companies_products_commerce_settings_systemType = 'integra';
                                                        data.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress = results[0].products[0].settings.dataEndPoints.LegacyDataService.EndPointAddress;
                                                        data.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Port = results[0].products[0].settings.dataEndPoints.LegacyDataService.Port;
                                                        data.Companies_products_commerce_settings_futureOrdersEmail_generateTime = results[0].products[0].settings.futureOrdersEmail.generateTime;
                                                        data.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod = results[0].products[0].settings.futureOrdersEmail.durationTimePeriod;
                                                        data.reorder_request_mail = '';
                                                        data.on_base = 'y';
                                                        data.provider_url = '';

                                                        product1.mobileCommerceInstall(data).then(function(){
                                                            deferred.resolve();
                                                        }).catch(function(err){
                                                            util.handleError(err);
                                                        })
                                                    }
                                                });
                                            }
                                        });
                                    }
                                    else {
                                        deferred.resolve();
                                    }
                                });

                            }
                            else {
                                installMobileCommerce(false).then(function(){
                                    deferred.resolve();
                                }).catch(function(err){
                                    util.handleError(err);
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    return deferred.promise;
}

var installMobileTicket = function(fromDB){
    var deferred = Q.defer();

    if(!fromDB){
        var product2_installation = process.env.PRODUCT2_INSTALLATION;
        if (product2_installation === undefined) {
            product2_installation = configMongo.product2_installation;
        }

        var promptProduct2Installation = {
            properties: {
                product2_installation: {
                    message: configPrompts.installProduct(product2_installation),
                    default: 'y',
                    validator: /^(y[es]*|n[o]*)$/,
                    warning: 'You must enter yes or no',
                    required: false
                }
            }
        };


        prompt.get(promptProduct2Installation, function (err, result) {
            if (err) {
                util.handleError(err);
            }

            if (result.product2_installation.substring(0,1) === 'y') {

                configMongo.product2_install = 'y';
                result.product2_installation = configMongo.product2_installation;
                configMongo.productDefinitions_ticket_code = result.product2_installation;
                configMongo.Users_products_ticket_code = result.product2_installation;
                configMongo.Companies_products_ticket_code = result.product2_installation;
                console.log('product installing: ' + configMongo.product2_installation);

                product2.mobileTicketInstall(configMongo).then(function(){
                    deferred.resolve();
                }).catch(function(err){
                    util.handleError(err);
                });
            }
            else {
                configMongo.product2_install = 'n';
                deferred.resolve();
            }
        });
    }else{
        configMongo.productDefinitions_ticket_code = configMongo.product2_installation;
        configMongo.Users_products_ticket_code = configMongo.product2_installation;
        configMongo.Companies_products_ticket_code = configMongo.product2_installation;

        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
        MongoClient.connect(url, function(err, db) {
            if (err) {
                util.handleError(err);
            }
            else {
                var collection = db.collection('company');
                collection.find({}).toArray(function (err, result) {
                    if (err) {
                        util.handleError(err);
                    }
                    else {

                        checkIfProductInstalled(result, configMongo.product2_installation, function(flag){
                            if(flag) {
                                var promptFlag = {
                                    properties: {
                                        flag: {
                                            message: configPrompts.productAlreadyInstalled(configMongo.product2_installation),
                                            default: 'y',
                                            validator: /^(y[es]*|n[o]*)$/,
                                            warning: 'You must enter yes or no',
                                            required: false
                                        }
                                    }
                                };

                                prompt.get(promptFlag, function(err, result) {
                                    if (err) {
                                        util.handleError(err);
                                    }

                                    if (result.flag.substring(0, 1) === 'y') {
                                        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
                                        MongoClient.connect(url, function(err, db) {
                                            if (err) {
                                                util.handleError(err);
                                            }
                                            else {
                                                var collection = db.collection('company');
                                                collection.find({}).toArray(function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }
                                                    else {

                                                        var data = {};

                                                        for (var i=0; i < result[0].products.length;i++) {
                                                            if (result[0].products[i].code === configMongo.product2_installation) {
                                                                data.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress = result[0].products[i].settings.dataEndPoints.EDXTicketService.EndPointAddress;
                                                                data.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Port = result[0].products[i].settings.dataEndPoints.EDXTicketService.Port;
                                                            }
                                                        }

                                                        product2.mobileTicketInstall(data).then(function(){
                                                            deferred.resolve();
                                                        }).catch(function(err){
                                                            util.handleError(err);
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                    else {
                                        deferred.resolve();
                                    }
                                });

                            }
                            else {
                                installMobileTicket(false).then(function(){
                                    deferred.resolve();
                                }).catch(function(err){
                                    util.handleError(err);
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    return deferred.promise;
}

var installMobileTicketBulk = function(fromDB){
    var deferred = Q.defer();

    if(!fromDB){
        var product3_installation = process.env.PRODUCT3_INSTALLATION;
        if (product3_installation === undefined) {
            product3_installation = configMongo.product3_installation;
        }

        var promptProduct3Installation = {
            properties: {
                product3_installation: {
                    message: configPrompts.installProduct(product3_installation),
                    default: 'y',
                    validator: /^(y[es]*|n[o]*)$/,
                    warning: 'You must enter yes or no',
                    required: false
                }
            }
        };


        prompt.get(promptProduct3Installation, function (err, result) {
            if (err) {
                util.handleError(err);
            }

            if (result.product3_installation.toLowerCase() === 'y') {
                configMongo.product3_install = 'y';
                result.product3_installation = configMongo.product3_installation;
                configMongo.productDefinitions_bulkticket_code = result.product3_installation;
                configMongo.Users_products_bulkticket_code = result.product3_installation;
                configMongo.Companies_products_bulkticket_code = result.product3_installation;

                console.log('product installing: ' + configMongo.product3_installation);

                product3.mobileTicketBulkInstall(configMongo).then(function(){
                    deferred.resolve();
                }).catch(function(err){
                    util.handleError(err);
                });
            }
            else {
                configMongo.product3_install = 'n';
                deferred.resolve();
            }
        });
    }else{
        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
        MongoClient.connect(url, function(err, db) {
            if (err) {
                util.handleError(err);
            }
            else {
                var collection = db.collection('company');
                collection.find({}).toArray(function (err, result) {
                    if (err) {
                        util.handleError(err);
                    }
                    else {
                        checkIfProductInstalled(result, configMongo.product3_installation, function(flag){
                            if(flag){
                                var promptFlag = {
                                    properties: {
                                        flag: {
                                            message: configPrompts.productAlreadyInstalled(configMongo.product3_installation),
                                            default: 'y',
                                            required: false
                                        }
                                    }
                                };

                                prompt.get(promptFlag, function(err, result) {
                                    if (err) {
                                        util.handleError(err);
                                    }

                                    if (result.flag.substring(0, 1) === 'y') {
                                        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
                                        MongoClient.connect(url, function(err, db) {
                                            if (err) {
                                                util.handleError(err);
                                            }
                                            else {
                                                var collection = db.collection('company');
                                                collection.find({}).toArray(function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }
                                                    else {

                                                        var data = {};

                                                        for (var i=0; i < result[0].products.length;i++) {
                                                            if (result[0].products[i].code === configMongo.product3_installation) {
                                                                data.Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_EndPointAddress = result[0].products[i].settings.dataEndPoints.EDXTicketService.EndPointAddress;
                                                                data.Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_Port = result[0].products[i].settings.dataEndPoints.EDXTicketService.Port;
                                                            }
                                                        }

                                                        product3.mobileTicketBulkInstall(data).then(function(){
                                                            deferred.resolve();
                                                        }).catch(function(err){
                                                            util.handleError(err);
                                                        });

                                                    }
                                                });
                                            }
                                        });
                                    }
                                    else {
                                        deferred.resolve();
                                    }
                                });

                            }
                            else {
                                installMobileTicketBulk(false).then(function(){
                                    deferred.resolve();
                                }).catch(function(err){
                                    util.handleError(err);
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    return deferred.promise;
}

var installJobsite = function(fromDB){
    var deferred = Q.defer();

    if(!fromDB){
        var product4_installation = process.env.PRODUCT4_INSTALLATION;
        if (product4_installation === undefined) {
            product4_installation = configMongo.product4_installation;
        }

        var promptProduct4Installation = {
            properties: {
                product4_installation: {
                    message: configPrompts.installProduct(product4_installation),
                    default: 'y',
                    validator: /^(y[es]*|n[o]*)$/,
                    warning: 'You must enter yes or no',
                    required: false
                }
            }
        };


        prompt.get(promptProduct4Installation, function (err, result) {
            if (err) {
                util.handleError(err);
            }

            if (result.product4_installation.toLowerCase() === 'y') {
                configMongo.product4_install = 'y';
                result.product4_installation = configMongo.product4_installation;
                configMongo.productDefinitions_jobsite_code = result.product4_installation;
                configMongo.Users_products_jobsite_code = result.product4_installation;
                configMongo.Companies_products_jobsite_code = result.product4_installation;

                console.log('product installing: ' + configMongo.product4_installation);

                product4.jobsiteInstall(configMongo).then(function(){
                    deferred.resolve();
                }).catch(function(err){
                    util.handleError(err);
                });
            }
            else {
                configMongo.product4_install = 'n';
                deferred.resolve();
            }
        });
    }else{
        configMongo.productDefinitions_jobsite_code = configMongo.product4_installation;
        configMongo.Users_products_jobsite_code = configMongo.product4_installation;
        configMongo.Companies_products_jobsite_code = configMongo.product4_installation;

        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
        MongoClient.connect(url, function(err, db) {
            if (err) {
                util.handleError(err);
            }
            else {
                var collection = db.collection('company');
                collection.find({}).toArray(function (err, result) {
                    if (err) {
                        util.handleError(err);
                    }
                    else {
                        checkIfProductInstalled(result, configMongo.product4_installation, function(flag){
                            if(flag){
                                var promptFlag = {
                                    properties: {
                                        flag: {
                                            message: configPrompts.productAlreadyInstalled(configMongo.product4_installation),
                                            default: 'y',
                                            validator: /^(y[es]*|n[o]*)$/,
                                            warning: 'You must enter yes or no',
                                            required: false
                                        }
                                    }
                                };

                                prompt.get(promptFlag, function(err, result) {
                                    if (err) {
                                        util.handleError(err);
                                    }

                                    if (result.flag.substring(0, 1) === 'y') {
                                        var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
                                        MongoClient.connect(url, function(err, db) {
                                            if (err) {
                                                util.handleError(err);
                                            }
                                            else {
                                                var collection = db.collection('company');
                                                collection.find({}).toArray(function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }
                                                    else {

                                                        var data = {};

                                                        for (var i=0; i < result[0].products.length;i++) {
                                                            if (result[0].products[i].code === configMongo.product4_installation) {
                                                                data.Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_EndPointAddress = result[0].products[i].settings.dataEndPoints.SocketEndPoint.EndPointAddress;
                                                                data.Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_Port = result[0].products[i].settings.dataEndPoints.SocketEndPoint.Port;
                                                            }
                                                        }

                                                        product4.jobsiteInstall(data).then(function(){
                                                            deferred.resolve();
                                                        }).catch(function(err){
                                                            util.handleError(err);
                                                        });

                                                    }
                                                });
                                            }
                                        });
                                    }
                                    else {
                                        deferred.resolve();
                                    }
                                });

                            }
                            else {
                                installJobsite(false).then(function(){
                                    deferred.resolve();
                                }).catch(function(err){
                                    util.handleError(err);
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    return deferred.promise;
}

function checkIfProductInstalled(data, productName, cb){
    async.each(data[0].products, function(product, callback){
        if (product.code === productName) {
            return callback(true);
        }
        callback(false);
    }, function (hasMatched) {
        cb(hasMatched);
    });
}