var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var configPrompt = require('./config-prompt.js');
var Q = require('q');

module.exports = {

    getNonProductInfo : function(config){
        var deferred = Q.defer();

        var Companies_description = process.env.COMPANY_DESCRIPTION;
        if (Companies_description === undefined) {
            Companies_description = config.Companies_description;
        }

        var promptCompanyDescription = {
            properties: {
                company_description : {
                    message: configPrompt.company_description,
                    default: Companies_description,
                    required: false
                }
            }
        };


        prompt.get(promptCompanyDescription, function (err, result) {
            if (err) {
                util.handleError(err);
            }
            configMongo.customer_name = result.company_description;
            configMongo.Users_products_commerce_settings_customer_name = result.company_description;
            configMongo.Users_products_jobsite_settings_customer_name = result.company_description;
            configMongo.Companies_products_commerce_settings_user_customer_name = result.company_description;
            configMongo.Companies_products_jobsite_settings_user_customer_name = result.company_description;

            configMongo.Companies_description = result.company_description;
            console.log('company description: ' + configMongo.Companies_description);

            var Companies_status = process.env.COMPANY_STATUS;
            if (Companies_status === undefined) {
                Companies_status = config.Companies_status;
            }

            var promptCompaniesStatus = {
                properties: {
                    Companies_status: {
                        message: configPrompt.company_status,
                        default: Companies_status,
                        validator: /^(y[es]*|n[o]*)$/,
                        warning: 'You must enter yes or no',
                        required: false
                    }
                }
            };


            prompt.get(promptCompaniesStatus, function (err, result) {
                if (err) {
                    util.handleError(err);
                }

                if (result.Companies_status.substring(0, 1) === 'y') {
                    configMongo.Companies_status = 'y';
                }
                else {
                    configMongo.Companies_status = 'n';
                }
                console.log('company status: ' + configMongo.Companies_status);

                var Companies_settings_communications_email_from_name = process.env.Companies_settings_communications_email_from_name;
                if (Companies_settings_communications_email_from_name === undefined) {
                    Companies_settings_communications_email_from_name = config.Companies_settings_communications_email_from_name;
                }

                var promptCompaniesSettingsCommunicationsEmailFromName = {
                    properties: {
                        Companies_settings_communications_email_from_name: {
                            message: configPrompt.comapny_email_name,
                            default: Companies_settings_communications_email_from_name,
                            required: false
                        }
                    }
                };


                prompt.get(promptCompaniesSettingsCommunicationsEmailFromName, function (err, result) {
                    if (err) {
                        util.handleError(err);
                    }
                    configMongo.Companies_settings_communications_email_from_name = result.Companies_settings_communications_email_from_name;
                    console.log('company email name: ' + configMongo.Companies_settings_communications_email_from_name);

                    var Companies_settings_communications_email_from_value = process.env.Companies_settings_communications_email_from_value;
                    if (Companies_settings_communications_email_from_value === undefined) {
                        Companies_settings_communications_email_from_value = config.Companies_settings_communications_email_from_value;
                    }

                    var promptCompaniesSettingsCommunicationsEmailFromValue = {
                        properties: {
                            Companies_settings_communications_email_from_value: {
                                message: configPrompt.company_email_id,
                                default: Companies_settings_communications_email_from_value,
                                validator: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                                warning: 'Enter valid email.',
                                required: false
                            }
                        }
                    };


                    prompt.get(promptCompaniesSettingsCommunicationsEmailFromValue, function (err, result) {
                        if (err) {
                            util.handleError(err);
                        }

                        configMongo.Companies_settings_communications_email_from_value = result.Companies_settings_communications_email_from_value;
                        console.log('company email id: ' + configMongo.Companies_settings_communications_email_from_value);


                        var Companies_settings_cloudStore = process.env.Companies_settings_cloudStore;
                        if (Companies_settings_cloudStore === undefined) {
                            Companies_settings_cloudStore = config.Companies_settings_cloudStore;
                        }

                        var promptCompaniesSettingsCloudStore = {
                            properties: {
                                Companies_settings_cloudStore: {
                                    message: configPrompt.has_cloud_storage,
                                    default: Companies_settings_cloudStore,
                                    validator: /^(y[es]*|n[o]*)$/,
                                    warning: 'You must enter yes or no',
                                    required: false
                                }
                            }
                        };


                        prompt.get(promptCompaniesSettingsCloudStore, function (err, result) {
                            if (err) {
                                util.handleError(err);
                            }

                            if (result.Companies_settings_cloudStore.substring(0, 1) === 'y') {
                                configMongo.Companies_settings_cloudStore = 'y';
                            }
                            else {
                                configMongo.Companies_settings_cloudStore = 'n';
                            }

                            console.log('company has cloud store: ' + configMongo.Companies_settings_cloudStore);

                            var promptEnvironment = {
                                properties: {
                                    env: {
                                        message: configPrompt.environment,
                                        default: 'y',
                                        validator: /^(y[es]*|n[o]*)$/,
                                        warning: 'You must enter yes or no',
                                        required: false
                                    }
                                }
                            };

                            prompt.get(promptEnvironment, function(err,result) {
                                if (err) {
                                    util.handleError(err);
                                }

                                if (result.env.substring(0, 1) === 'y') {
                                    configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env;
                                }
                                else {
                                    configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env_prod;
                                }
                                console.log('Environment : ' + configMongo.Companies_products_commerce_settings_env);

                                deferred.resolve();
                            });
                        });
                    });
                });
            });
        });
        return deferred.promise;
    }
};