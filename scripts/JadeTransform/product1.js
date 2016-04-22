var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var MongoClient = require('mongodb').MongoClient;
var async = require('async');

module.exports = {
    
    product1Install : function (cb) {
        var product_installation = process.env.PRODUCT_INSTALLATION;
        if (product_installation === undefined) {
            product_installation = configMongo.product_default_option;
        }

        var promptProductInstallation = {
            properties: {
                product_installation: {
                    message: 'Do you want to install ' + configMongo.product_installation + '?',
                    default: product_installation,
                    required: false
                }
            }
        };


        prompt.get(promptProductInstallation, function (err, result) {
            if (err) {
                util.handleError(err);
            }

            if (result.product_installation.toLowerCase() === 'y') {

                configMongo.product1_install = 'y';
                result.product_installation = configMongo.product_installation;
                configMongo.product_installation = result.product_installation;
                configMongo.productDefinitions_commerce_code = result.product_installation;
                configMongo.Users_products_commerce_code = result.product_installation;
                configMongo.Companies_products_commerce_code = result.product_installation;

                console.log('product installing: ' + configMongo.product_installation);

                    var commerceversion = process.env.commerceversion;
                    if (commerceversion === undefined) {
                        commerceversion = configMongo.commerceversion;
                    }

                    var promptCommerceVersion = {
                        properties: {
                            commerceversion: {
                                message: 'Is this for MobileCommerce 1.2 or MobileCommerce 1.3?',
                                default: commerceversion,
                                required: false
                            }
                        }
                    };

                    prompt.get(promptCommerceVersion, function (err, result) {
                        if (err) {
                            util.handleError(err);
                        }
                        console.log('commerce version: ' + result.commerceversion);
                        configMongo.commerceversion = result.commerceversion;


                        if (result.commerceversion === '1.3'){
                            configMongo.commerceversion = result.commerceversion;

                            configMongo.Companies_products_commerce_settings_company_timeZone_value = "0600";
                            configMongo.Companies_products_commerce_settings_company_timeZone_operator = "-";
                            configMongo.Companies_products_commerce_settings_company_timeZone_hours = "06";
                            configMongo.Companies_products_commerce_settings_company_timeZone_minutes = "00";

                            configMongo.Companies_products_commerce_settings_company_timeZone_name = "US/Central";
                            configMongo.Companies_products_commerce_settings_company_timeZone_defaultRegion = "USA";



                            configMongo.Users_products_commerce_settings_timeZone_value = "";
                            configMongo.Users_products_commerce_settings_timeZone_operator = "";
                            configMongo.Users_products_commerce_settings_timeZone_hours = "";
                            configMongo.Users_products_commerce_settings_timeZone_minutes = "";

                            configMongo.Users_products_jobsite_settings_timeZone_value = "";
                            configMongo.Users_products_jobsite_settings_timeZone_operator = "";
                            configMongo.Users_products_jobsite_settings_timeZone_hours = "";
                            configMongo.Users_products_jobsite_settings_timeZone_minutes = "";

                            configMongo.Companies_products_commerce_settings_user_timeZone_value = "";
                            configMongo.Companies_products_commerce_settings_user_timeZone_operator = "";
                            configMongo.Companies_products_commerce_settings_user_timeZone_hours = "";
                            configMongo.Companies_products_commerce_settings_user_timeZone_minutes = "";


                        }else {
                            configMongo.Companies_products_commerce_settings_company_timeZone_value = "0600";
                            configMongo.Companies_products_commerce_settings_company_timeZone_operator = "-";
                            configMongo.Companies_products_commerce_settings_company_timeZone_hours = "06";
                            configMongo.Companies_products_commerce_settings_company_timeZone_minutes = "00";

                            configMongo.Companies_products_commerce_settings_company_timeZone_name = "US/Central";
                            configMongo.Companies_products_commerce_settings_company_timeZone_defaultRegion = "USA";

                            configMongo.Users_products_commerce_settings_timeZone_value = "-0500";
                            configMongo.Users_products_commerce_settings_timeZone_operator = "-";
                            configMongo.Users_products_commerce_settings_timeZone_hours = "05";
                            configMongo.Users_products_commerce_settings_timeZone_minutes = "00";
                        }



                        var promptSystemType = {
                            properties : {
                                system_type : {
                                    message : 'Is this setup for a command series?',
                                    default : 'n',
                                    required : false
                                }
                            }
                        };

                        prompt.get(promptSystemType, function (err,result) {
                            if (err) {
                                util.handleError(err);
                            }

                            if (result.system_type.substring(0,1) === 'y') {
                                configMongo.Companies_products_commerce_settings_systemType = 'no integra';
                            }
                            else {
                                configMongo.Companies_products_commerce_settings_systemType = 'integra';
                            }
                            console.log('System type '+ configMongo.Companies_products_commerce_settings_systemType);

                            var futureOrderEmailGenerateTime = process.env.FUTURE_ORDER_EMAIL_GENERATE_TIME;
                            if (futureOrderEmailGenerateTime === undefined) {
                                futureOrderEmailGenerateTime = configMongo.Companies_products_commerce_settings_futureOrdersEmail_generateTime;
                            }

                            var promptGenerateTime = {
                                properties: {
                                    generate_time: {
                                        message: 'What is future orders email generate time?',
                                        default: futureOrderEmailGenerateTime,
                                        required: false
                                    }
                                }
                            };

                            prompt.get(promptGenerateTime, function(err,result){
                                if (err) {
                                    util.handleError(err);
                                }

                                configMongo.Companies_products_commerce_settings_futureOrdersEmail_generateTime = result.generate_time;
                                console.log('Future orders email generate time '+ configMongo.Companies_products_commerce_settings_futureOrdersEmail_generateTime);


                                var futureOrderEmailDurationTime = process.env.FUTURE_ORDER_EMAIL_DURATIOIN_TIME;
                                if (futureOrderEmailDurationTime === undefined) {
                                    futureOrderEmailDurationTime = configMongo.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod;
                                }

                                var promptDurationTime = {
                                    properties: {
                                        duration_time: {
                                            message: 'What is future orders email duration time period?',
                                            default: futureOrderEmailDurationTime,
                                            required: false
                                        }
                                    }
                                };

                                prompt.get(promptDurationTime, function(err,result) {
                                    if (err) {
                                        util.handleError(err);
                                    }

                                    configMongo.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod = result.duration_time;
                                    console.log('Future orders email duration time ' + configMongo.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod);

                                    var end_point = process.env.END_POINT;
                                    if (end_point === undefined) {
                                        end_point = configMongo.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress;
                                    }

                                    var promptEndPoint = {
                                        properties: {
                                            end_point: {
                                                message: 'What is their End Point (What server is the IIS (CS) or Integra Rest service located)?',
                                                default: end_point,
                                                required: false
                                            }
                                        }
                                    };
                                    prompt.get(promptEndPoint, function (err, result) {
                                        if (err) {
                                            util.handleError(err);
                                        }
                                        configMongo.end_point = result.end_point;

                                        configMongo.Companies_products_commerce_settings_edxGatewayConfig_ServerAddress = result.end_point;
                                        configMongo.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress = result.end_point;
                                        configMongo.Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_EndPointAddress = result.end_point;
                                        console.log('End point : ' + configMongo.end_point);

                                        var end_point_port = process.env.END_POINT_PORT;
                                        if (end_point_port === undefined) {
                                            end_point_port = configMongo.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Port;
                                        }

                                        console.log(end_point_port);

                                        var promptEndPointPort = {
                                            properties: {
                                                end_point_port: {
                                                    message: 'What is their End Point Port ?',
                                                    default: end_point_port,
                                                    required: false
                                                }
                                            }
                                        };
                                        prompt.get(promptEndPointPort, function (err, result) {
                                            if (err) {
                                                util.handleError(err);
                                            }
                                            configMongo.end_point_port = result.end_point_port;
                                            configMongo.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Port = result.end_point_port;
                                            configMongo.Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_Port = result.end_point_port;
                                            console.log('End point port : ' + configMongo.end_point_port);

                                            if (configMongo.commerceversion === '1.2') {
                                                var adv_order_req = process.env.ADV_ORDER_REQ;
                                                if (adv_order_req === undefined) {
                                                    adv_order_req = configMongo.adv_order_req;
                                                }

                                                var promptAdvOrderReq = {
                                                    properties: {
                                                        adv_order_req: {
                                                            message: 'Is the (customer) doing Advance Order Request?',
                                                            default: adv_order_req,
                                                            required: false
                                                        }
                                                    }
                                                };
                                                prompt.get(promptAdvOrderReq, function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }

                                                    if (result.adv_order_req.substring(0, 1) === 'n') {
                                                        configMongo.adv_order_req = 'n';
                                                        configMongo.Companies_products_commerce_settings_company_advancedOrderRequest = false;
                                                    }
                                                    else {

                                                        configMongo.adv_order_req = 'y';
                                                        configMongo.Companies_products_commerce_settings_company_advancedOrderRequest = true;

                                                        var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
                                                        if (edx_gateway_ip === undefined) {
                                                            edx_gateway_ip = configMongo.edx_gateway_ip;
                                                        }

                                                        var promptEDXGatewayIp = {
                                                            properties: {
                                                                edx_gateway_ip: {
                                                                    message: 'What is the EDX Gateway IP?',
                                                                    default: edx_gateway_ip,
                                                                    required: false
                                                                }
                                                            }
                                                        };
                                                        prompt.get(promptEDXGatewayIp, function (err, result) {
                                                            if (err) {
                                                                util.handleError(err);
                                                            }

                                                            configMongo.edx_gateway_ip = result.edx_gateway_ip;
                                                            configMongo.Companies_products_commerce_settings_edxGatewayConfig_ServerAddress = result.edx_gateway_ip;

                                                            var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                                                            if (edx_gateway_port === undefined) {
                                                                edx_gateway_port = configMongo.edx_gateway_port;
                                                            }

                                                            var promptEDXGatewayPort = {
                                                                properties: {
                                                                    edx_gateway_port: {
                                                                        message: 'What is the EDX Gateway Port?',
                                                                        default: edx_gateway_port,
                                                                        required: false
                                                                    }
                                                                }
                                                            };

                                                            prompt.get(promptEDXGatewayPort, function (err, result) {
                                                                if (err) {
                                                                    util.handleError(err);
                                                                }

                                                                configMongo.edx_gateway_port = result.edx_gateway_port;
                                                                configMongo.Companies_products_commerce_settings_edxGatewayConfig_Port = result.edx_gateway_port;
                                                            });

                                                        });
                                                    }

                                                    console.log('Advance order request : ' + configMongo.adv_order_req);
                                                });

                                            }

                                            var reorder_request_mail = process.env.REORDER_REQUEST_MAIL;
                                            if (reorder_request_mail === undefined) {
                                                reorder_request_mail = configMongo.reorder_request_mail;
                                            }

                                            var promptReorderRequestMail = {
                                                properties: {
                                                    reorder_request_mail: {
                                                        message: 'What is their Reorder request email?',
                                                        default: reorder_request_mail,
                                                        required: false
                                                    }
                                                }
                                            };

                                            prompt.get(promptReorderRequestMail, function (err, result) {
                                                if (err) {
                                                    util.handleError(err);
                                                }

                                                configMongo.reorder_request_mail = result.reorder_request_mail;

                                                var on_base = process.env.ON_BASE;
                                                if (on_base === undefined) {
                                                    on_base = configMongo.on_base;
                                                }

                                                var promptOnBase = {
                                                    properties: {
                                                        on_base: {
                                                            message: 'Do they have onBase?',
                                                            default: on_base,
                                                            required: false
                                                        }
                                                    }
                                                };

                                                prompt.get(promptOnBase, function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }

                                                    if (result.on_base.substring(0,1) === 'y') {
                                                        configMongo.on_base = 'y';

                                                        var provider_url = process.env.PROVIDER_URL;
                                                        if (provider_url === undefined) {
                                                            provider_url = configMongo.provider_url;
                                                        }

                                                        var promptProviderUrl = {
                                                            properties: {
                                                                provider_url: {
                                                                    message: 'What is the provider URL?',
                                                                    default: provider_url,
                                                                    required: false
                                                                }
                                                            }
                                                        };

                                                        prompt.get(promptProviderUrl, function (err, result) {
                                                            if (err) {
                                                                util.handleError(err);
                                                            }

                                                            configMongo.provider_url = result.provider_url;

                                                            cb();

                                                        });
                                                    }
                                                    else {
                                                        configMongo.on_base = 'n';
                                                        cb();
                                                    }
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
            }
            else {
                configMongo.product1_install = 'n';
                cb();
            }
        });
    },

    product1InstallFromDB : function(cb) {
        var self = this;
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
                        checkIfProductInstalled(result, function(flag){
                            if(flag){
                                var promptFlag = {
                                    properties: {
                                        flag: {
                                            message: configMongo.product_installation +' is already installed. Do you want to modify it?',
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
                                        var data = {};
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
                                                        data.end_point_address = results[0].products[0].settings.dataEndPoints.LegacyDataService.EndPointAddress;
                                                        data.end_point_port = results[0].products[0].settings.dataEndPoints.LegacyDataService.Port;
                                                        data.generate_time = results[0].products[0].settings.futureOrdersEmail.generateTime;
                                                        data.duration_time = results[0].products[0].settings.futureOrdersEmail.durationTimePeriod;

                                                        var commerceversion = process.env.commerceversion;
                                                        if (commerceversion === undefined) {
                                                            commerceversion = configMongo.commerceversion;
                                                        }


                                                        var promptCommerceVersion = {
                                                            properties: {
                                                                commerceversion: {
                                                                    message: 'Is this for MobileCommerce 1.2 or MobileCommerce 1.3?',
                                                                    default: commerceversion,
                                                                    required: false
                                                                }
                                                            }
                                                        };

                                                        prompt.get(promptCommerceVersion, function (err, result) {
                                                            if (err) {
                                                                util.handleError(err);
                                                            }
                                                            console.log('commerce version: ' + result.commerceversion);
                                                            configMongo.commerceversion = result.commerceversion;

                                                            if (result.commerceversion === '1.3'){
                                                                configMongo.commerceversion = result.commerceversion;

                                                                configMongo.Companies_products_commerce_settings_company_timeZone_value = "0600";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_operator = "-";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_hours = "06";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_minutes = "00";

                                                                configMongo.Companies_products_commerce_settings_company_timeZone_name = "US/Central";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_defaultRegion = "USA";



                                                                configMongo.Users_products_commerce_settings_timeZone_value = "";
                                                                configMongo.Users_products_commerce_settings_timeZone_operator = "";
                                                                configMongo.Users_products_commerce_settings_timeZone_hours = "";
                                                                configMongo.Users_products_commerce_settings_timeZone_minutes = "";

                                                                configMongo.Users_products_jobsite_settings_timeZone_value = "";
                                                                configMongo.Users_products_jobsite_settings_timeZone_operator = "";
                                                                configMongo.Users_products_jobsite_settings_timeZone_hours = "";
                                                                configMongo.Users_products_jobsite_settings_timeZone_minutes = "";

                                                                configMongo.Companies_products_commerce_settings_user_timeZone_value = "";
                                                                configMongo.Companies_products_commerce_settings_user_timeZone_operator = "";
                                                                configMongo.Companies_products_commerce_settings_user_timeZone_hours = "";
                                                                configMongo.Companies_products_commerce_settings_user_timeZone_minutes = "";


                                                            }else {
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_value = "0600";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_operator = "-";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_hours = "06";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_minutes = "00";

                                                                configMongo.Companies_products_commerce_settings_company_timeZone_name = "US/Central";
                                                                configMongo.Companies_products_commerce_settings_company_timeZone_defaultRegion = "USA";

                                                                configMongo.Users_products_commerce_settings_timeZone_value = "-0500";
                                                                configMongo.Users_products_commerce_settings_timeZone_operator = "-";
                                                                configMongo.Users_products_commerce_settings_timeZone_hours = "05";
                                                                configMongo.Users_products_commerce_settings_timeZone_minutes = "00";
                                                            }

                                                            if (configMongo.commerceversion === '1.2') {
                                                                data.edx_gateway_ip = results[0].products[0].settings.edxGatewayConfig.ServerAddress;
                                                                data.edx_gateway_port = results[0].products[0].settings.edxGatewayConfig.Port;
                                                                data.adv_order_req = results[0].products[0].settings.company.advancedOrderRequest;
                                                            }

                                                            var promptSystemType = {
                                                                properties : {
                                                                    system_type : {
                                                                        message : 'Is this setup for a command series?',
                                                                        default : 'n',
                                                                        required : false
                                                                    }
                                                                }
                                                            };

                                                            prompt.get(promptSystemType, function (err,result) {
                                                                if (err) {
                                                                    util.handleError(err);
                                                                }

                                                                if (result.system_type.substring(0,1) === 'y') {
                                                                    configMongo.Companies_products_commerce_settings_systemType = 'no integra';
                                                                }
                                                                else {
                                                                    configMongo.Companies_products_commerce_settings_systemType = 'integra';
                                                                }

                                                                console.log('System type ' + configMongo.Companies_products_commerce_settings_systemType);

                                                                var futureOrderEmailGenerateTime = process.env.FUTURE_ORDER_EMAIL_GENERATE_TIME;
                                                                if (futureOrderEmailGenerateTime === undefined) {
                                                                    futureOrderEmailGenerateTime = data.generate_time;
                                                                }

                                                                var promptGenerateTime = {
                                                                    properties: {
                                                                        generate_time: {
                                                                            message: 'What is future orders email generate time?',
                                                                            default: futureOrderEmailGenerateTime,
                                                                            required: false
                                                                        }
                                                                    }
                                                                };

                                                                prompt.get(promptGenerateTime, function(err,result) {
                                                                    if (err) {
                                                                        util.handleError(err);
                                                                    }

                                                                    configMongo.Companies_products_commerce_settings_futureOrdersEmail_generateTime = result.generate_time;
                                                                    console.log('Future orders email generate time ' + configMongo.Companies_products_commerce_settings_futureOrdersEmail_generateTime);


                                                                    var futureOrderEmailDurationTime = process.env.FUTURE_ORDER_EMAIL_DURATIOIN_TIME;
                                                                    if (futureOrderEmailDurationTime === undefined) {
                                                                        futureOrderEmailDurationTime = data.duration_time;
                                                                    }

                                                                    var promptDurationTime = {
                                                                        properties: {
                                                                            duration_time: {
                                                                                message: 'What is future orders email duration time period?',
                                                                                default: futureOrderEmailDurationTime,
                                                                                required: false
                                                                            }
                                                                        }
                                                                    };

                                                                    prompt.get(promptDurationTime, function (err, result) {
                                                                        if (err) {
                                                                            util.handleError(err);
                                                                        }

                                                                        configMongo.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod = result.duration_time;
                                                                        console.log('Future orders email duration time ' + configMongo.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod);

                                                                        var end_point = process.env.END_POINT;
                                                                        if (end_point === undefined) {
                                                                            end_point = data.end_point_address;
                                                                        }

                                                                        var promptEndPoint = {
                                                                            properties: {
                                                                                end_point: {
                                                                                    message: 'What is their End Point (What server is the IIS (CS) or Integra Rest service located)?',
                                                                                    default: end_point,
                                                                                    required: false
                                                                                }
                                                                            }
                                                                        };
                                                                        prompt.get(promptEndPoint, function (err, result) {
                                                                            if (err) {
                                                                                util.handleError(err);
                                                                            }
                                                                            configMongo.end_point = result.end_point;
                                                                            configMongo.Companies_products_commerce_settings_edxGatewayConfig_ServerAddress = result.end_point;
                                                                            configMongo.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress = result.end_point;
                                                                            configMongo.Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_EndPointAddress = result.end_point;
                                                                            console.log('End point : ' + configMongo.end_point);

                                                                            var end_point_port = process.env.END_POINT_PORT;
                                                                            if (end_point_port === undefined) {
                                                                                end_point_port = data.end_point_port;
                                                                            }

                                                                            var promptEndPointPort = {
                                                                                properties: {
                                                                                    end_point_port: {
                                                                                        message: 'What is their End Point Port ?',
                                                                                        default: end_point_port,
                                                                                        required: false
                                                                                    }
                                                                                }
                                                                            };
                                                                            prompt.get(promptEndPointPort, function (err, result) {
                                                                                if (err) {
                                                                                    util.handleError(err);
                                                                                }
                                                                                configMongo.end_point_port = result.end_point_port;
                                                                                configMongo.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Port = result.end_point_port;
                                                                                configMongo.Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_Port = result.end_point_port;
                                                                                console.log('End point port : ' + configMongo.end_point_port);

                                                                                if (configMongo.commerceversion === '1.2') {
                                                                                    var adv_order_req = process.env.ADV_ORDER_REQ;
                                                                                    if (adv_order_req === undefined) {
                                                                                        if (data.adv_order_req) {
                                                                                            adv_order_req = 'y';
                                                                                        }
                                                                                        else {
                                                                                            adv_order_req = 'n';
                                                                                        }
                                                                                    }

                                                                                    var promptAdvOrderReq = {
                                                                                        properties: {
                                                                                            adv_order_req: {
                                                                                                message: 'Is the (customer) doing Advance Order Request?',
                                                                                                default: adv_order_req,
                                                                                                required: false
                                                                                            }
                                                                                        }
                                                                                    };
                                                                                    prompt.get(promptAdvOrderReq, function (err, result) {
                                                                                        if (err) {
                                                                                            util.handleError(err);
                                                                                        }

                                                                                        console.log('Advance order request : ' + result.adv_order_req);

                                                                                        if (result.adv_order_req.substring(0, 1) === 'n') {
                                                                                            configMongo.adv_order_req = 'n';
                                                                                            configMongo.Companies_products_commerce_settings_company_advancedOrderRequest = false;
                                                                                        }
                                                                                        else {
                                                                                            configMongo.adv_order_req = 'y';
                                                                                            configMongo.Companies_products_commerce_settings_company_advancedOrderRequest = true;

                                                                                            if (configMongo.commerceversion === '1.2') {
                                                                                                var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
                                                                                                if (edx_gateway_ip === undefined) {
                                                                                                    edx_gateway_ip = data.edx_gateway_ip;
                                                                                                }

                                                                                                var promptEDXGatewayIp = {
                                                                                                    properties: {
                                                                                                        edx_gateway_ip: {
                                                                                                            message: 'What is the EDX Gateway IP?',
                                                                                                            default: edx_gateway_ip,
                                                                                                            required: false
                                                                                                        }
                                                                                                    }
                                                                                                };
                                                                                                prompt.get(promptEDXGatewayIp, function (err, result) {
                                                                                                    if (err) {
                                                                                                        util.handleError(err);
                                                                                                    }

                                                                                                    configMongo.edx_gateway_ip = result.edx_gateway_ip;
                                                                                                    configMongo.Companies_products_commerce_settings_edxGatewayConfig_ServerAddress = result.edx_gateway_ip;

                                                                                                    var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                                                                                                    if (edx_gateway_port === undefined) {
                                                                                                        edx_gateway_port = data.edx_gateway_port;
                                                                                                    }

                                                                                                    var promptEDXGatewayPort = {
                                                                                                        properties: {
                                                                                                            edx_gateway_port: {
                                                                                                                message: 'What is the EDX Gateway Port?',
                                                                                                                default: edx_gateway_port,
                                                                                                                required: false
                                                                                                            }
                                                                                                        }
                                                                                                    };

                                                                                                    prompt.get(promptEDXGatewayPort, function (err, result) {
                                                                                                        if (err) {
                                                                                                            util.handleError(err);
                                                                                                        }

                                                                                                        configMongo.edx_gateway_port = result.edx_gateway_port;
                                                                                                        configMongo.Companies_products_commerce_settings_edxGatewayConfig_Port = result.edx_gateway_port;
                                                                                                    });
                                                                                                });
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                }

                                                                                var reorder_request_mail = process.env.REORDER_REQUEST_MAIL;
                                                                                if (reorder_request_mail === undefined) {
                                                                                    reorder_request_mail = configMongo.reorder_request_mail;
                                                                                }

                                                                                var promptReorderRequestMail = {
                                                                                    properties: {
                                                                                        reorder_request_mail: {
                                                                                            message: 'What is their Reorder request email?',
                                                                                            default: reorder_request_mail,
                                                                                            required: false
                                                                                        }
                                                                                    }
                                                                                };

                                                                                prompt.get(promptReorderRequestMail, function (err, result) {
                                                                                    if (err) {
                                                                                        util.handleError(err);
                                                                                    }

                                                                                    configMongo.reorder_request_mail = result.reorder_request_mail;

                                                                                    var on_base = process.env.ON_BASE;
                                                                                    if (on_base === undefined) {
                                                                                        on_base = configMongo.on_base;
                                                                                    }

                                                                                    var promptOnBase = {
                                                                                        properties: {
                                                                                            on_base: {
                                                                                                message: 'Do they have onBase?',
                                                                                                default: on_base,
                                                                                                required: false
                                                                                            }
                                                                                        }
                                                                                    };

                                                                                    prompt.get(promptOnBase, function (err, result) {
                                                                                        if (err) {
                                                                                            util.handleError(err);
                                                                                        }

                                                                                        if (result.on_base.substring(0,1) === 'y') {
                                                                                            configMongo.on_base = 'y';

                                                                                            var provider_url = process.env.PROVIDER_URL;
                                                                                            if (provider_url === undefined) {
                                                                                                provider_url = configMongo.provider_url;
                                                                                            }

                                                                                            var promptProviderUrl = {
                                                                                                properties: {
                                                                                                    provider_url: {
                                                                                                        message: 'What is the provider URL?',
                                                                                                        default: provider_url,
                                                                                                        required: false
                                                                                                    }
                                                                                                }
                                                                                            };

                                                                                            prompt.get(promptProviderUrl, function (err, result) {
                                                                                                if (err) {
                                                                                                    util.handleError(err);
                                                                                                }

                                                                                                configMongo.provider_url = result.provider_url;

                                                                                                cb();

                                                                                            });
                                                                                        }
                                                                                        else {
                                                                                            configMongo.on_base = 'n';
                                                                                            cb();
                                                                                        }
                                                                                    });

                                                                                });
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
                                        cb();
                                    }
                                });

                            }
                            else {
                                self.product1Install( function() {
                                    cb();
                                });
                            }
                        });
                    }
                });
            }
        });
    }
};

function checkIfProductInstalled(data, cb){
    async.each(data[0].products, function(product, callback){
        if (product.code === configMongo.product_installation) {
            return callback(true);
        }
        callback(false);
    }, function (hasMatched) {
        cb(hasMatched);
    });
}