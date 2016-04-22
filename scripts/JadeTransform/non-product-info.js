var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var configPrompt = require('./config-prompt.js');
var MongoClient = require('mongodb').MongoClient;

module.exports = {
  
    getNonProductInfo : function (cb) {

        var Companies_description = process.env.COMPANY_DESCRIPTION;
        if (Companies_description === undefined) {
            Companies_description = configMongo.Companies_description;
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
                Companies_status = configMongo.Companies_status;
            }

            var promptCompaniesStatus = {
                properties: {
                    Companies_status: {
                        message: configPrompt.company_status,
                        default: Companies_status,
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
                    Companies_settings_communications_email_from_name = configMongo.Companies_settings_communications_email_from_name;
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
                        Companies_settings_communications_email_from_value = configMongo.Companies_settings_communications_email_from_value;
                    }

                    var promptCompaniesSettingsCommunicationsEmailFromValue = {
                        properties: {
                            Companies_settings_communications_email_from_value: {
                                message: configPrompt.company_email_id,
                                default: Companies_settings_communications_email_from_value,
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
                            Companies_settings_cloudStore = configMongo.Companies_settings_cloudStore;
                        }

                        var promptCompaniesSettingsCloudStore = {
                            properties: {
                                Companies_settings_cloudStore: {
                                    message: configPrompt.has_cloud_storage,
                                    default: Companies_settings_cloudStore,
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
                                cb();
                            });
                        });
                    });
                });
            });
        });
    },

    getNonProductInfoFromDb : function(cb) {
        var promptFlag = {
            properties: {
                flag: {
                    message: 'Do you want to modify non-product related company information?',
                    default: 'y',
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
                                data.company_description = result[0].description;
                                data.company_status = result[0].status;
                                data.company_email_name = result[0].settings.communications.email.from.name;
                                data.company_email_value = result[0].settings.communications.email.from.value;
                                data.company_cloud_store = result[0].settings.cloudStore;
                                data.env = result[0].products[0].settings.environment;

                                db.close();

                                var Companies_description = process.env.COMPANY_DESCRIPTION;
                                if (Companies_description === undefined) {
                                    Companies_description = data.company_description;
                                }

                                var promptCompanyDescription = {
                                    properties: {
                                        company_description: {
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

                                    configMongo.Companies_code = data.company_code;
                                    configMongo.Companies_description = result.company_description
                                    console.log('Company description: ' + configMongo.Companies_description);

                                    var Companies_status = process.env.COMPANY_STATUS;
                                    if (Companies_status === undefined) {
                                        Companies_status = data.company_status;
                                    }

                                    var promptCompaniesStatus = {
                                        properties: {
                                            Companies_status: {
                                                message: configPrompt.company_status,
                                                default: Companies_status,
                                                required: false
                                            }
                                        }
                                    };


                                    prompt.get(promptCompaniesStatus, function (err, result) {
                                        if (err) {
                                            util.handleError(err);
                                        }
                                        if (result.Companies_status.substring(0,1) === 'y') {
                                            configMongo.Companies_status = 'y';
                                        }
                                        else {
                                            configMongo.Companies_status = 'n';
                                        }

                                        console.log('company status: ' + configMongo.Companies_status);

                                        var Companies_settings_communications_email_from_name = process.env.Companies_settings_communications_email_from_name;
                                        if (Companies_settings_communications_email_from_name === undefined) {
                                            Companies_settings_communications_email_from_name = data.company_email_name;
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
                                                Companies_settings_communications_email_from_value = data.company_email_value;
                                            }

                                            var promptCompaniesSettingsCommunicationsEmailFromValue = {
                                                properties: {
                                                    Companies_settings_communications_email_from_value: {
                                                        message: configPrompt.company_email_id,
                                                        default: Companies_settings_communications_email_from_value,
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
                                                    Companies_settings_cloudStore = data.company_cloud_store;
                                                }

                                                var promptCompaniesSettingsCloudStore = {
                                                    properties: {
                                                        Companies_settings_cloudStore: {
                                                            message: configPrompt.has_cloud_storage,
                                                            default: Companies_settings_cloudStore,
                                                            required: false
                                                        }
                                                    }
                                                };


                                                prompt.get(promptCompaniesSettingsCloudStore, function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }
                                                    if (result.Companies_settings_cloudStore.substring(0,1) === 'y') {
                                                        configMongo.Companies_settings_cloudStore = 'y';
                                                    }
                                                    else {
                                                        configMongo.Companies_settings_cloudStore = 'n';
                                                    }
                                                    console.log('company has cloud store: ' + configMongo.Companies_settings_cloudStore);

                                                    var env = process.env.ENV;
                                                    if (env === undefined) {
                                                        env = 'y';
                                                    }

                                                    var promptEnvironment = {
                                                        properties: {
                                                            env: {
                                                                message: configPrompt.environment,
                                                                default: env,
                                                                required: false
                                                            }
                                                        }
                                                    };

                                                    prompt.get(promptEnvironment, function(err,result) {
                                                        if (err) {
                                                            util.handleError(err);
                                                        }

                                                        console.log('Environment : ' + result.env);
                                                        if (result.env.substring(0, 1) === 'y') {
                                                            configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env;
                                                        }
                                                        else {
                                                            configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env_prod;
                                                        }
                                                        cb();
                                                    });
                                                });
                                            });
                                        });
                                    });
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

                                db.close();
                            }
                        });
                    }
                });
                cb();
            }
        });
    }
};