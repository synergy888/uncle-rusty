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

if(argv.get){

} else

if(argv.rollback){

} else {

    prompt.override = argv;

    console.log('\n\nThe purpose of this app is to setup a new company by modifying Mongo JSON seed data files and creating new Mongo JSON seed data files for the new company.  ');
    console.log('Please edit the config-mongo.js file and assign the appropriate values to the config variables.\n\n');

    prompt.start();

    var promptVerify = {
        name: 'yesno',
        message: 'Do you wish to continue?',
        validator: /y[es]*|n[o]?/,
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
                        required: false
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

                    util.customerExist(configMongo.company_code, function(exist) {
                        if (exist) {

                            var promptExist = {
                                properties : {
                                    exist : {
                                        message : configPrompts.customer_already_exist,
                                        default : 'y',
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
                                    util.dropDatabase(configMongo.company_code);

                                    nonProductInfo.getNonProductInfo(function() {
                                        product1.product1Install(function() {
                                            product2.product2Install(function() {
                                                product3.product3Install(function() {
                                                    product4.product4Install(function(){
                                                        processData.processData();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }
                            })
                        }
                        else {

                            nonProductInfo.getNonProductInfo(function() {
                                product1.product1Install(function() {
                                    product2.product2Install(function() {
                                        product3.product3Install(function() {
                                            product4.product4Install(function(){
                                                processData.processData();
                                            });
                                        });
                                    });
                                });
                            });
                        }
                    });
                }
                else {

                    util.customerExist(configMongo.company_code, function(exist) {
                        if (exist) {
                            nonProductInfo.getNonProductInfoFromDb(function() {
                                product1.product1InstallFromDB(function(){
                                    product2.product2InstallFromDB(function(){
                                        product3.product3InstallFromDB(function(){
                                            product4.product4InstallFromDB(function(){
                                                util.dropDatabase(configMongo.company_code);
                                                processData.processData();
                                            });
                                        })
                                    })
                                });
                            });
                        }
                        else {
                            console.log('Sorry the customer does not exist!!!');
                            process.exit();
                        }
                    });
                }

            });
        });
    });
}