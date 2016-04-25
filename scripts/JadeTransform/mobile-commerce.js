var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var configPrompt = require('./config-prompt.js');
var Q = require('q');

module.exports = {

    mobileCommerceInstall : function(config){

        var deferred = Q.defer();

        var systemType = '';
        if(config.Companies_products_commerce_settings_systemType === 'integra'){
            systemType = 'n';
        }else{
            systemType = 'y';
        }
        var promptSystemType = {
            properties : {
                system_type : {
                    message : configPrompt.system_type,
                    default : systemType,
                    validator: /^(y[es]*|n[o]*)$/,
                    warning: 'You must enter yes or no',
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
                futureOrderEmailGenerateTime = config.Companies_products_commerce_settings_futureOrdersEmail_generateTime;
            }

            var promptGenerateTime = {
                properties: {
                    generate_time: {
                        message: configPrompt.email_generate_time,
                        default: futureOrderEmailGenerateTime,
                        validator: /^[0-9]*$/,
                        warning: 'Only numbers are allowed.',
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
                    futureOrderEmailDurationTime = config.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod;
                }

                var promptDurationTime = {
                    properties: {
                        duration_time: {
                            message: configPrompt.email_duration_period,
                            default: futureOrderEmailDurationTime,
                            validator: /^[0-9]*$/,
                            warning: 'Only numbers are allowed.',
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
                        end_point = config.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress;
                    }

                    var promptEndPoint = {
                        properties: {
                            end_point: {
                                message: configPrompt.end_point,
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
                            end_point_port = config.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Port;
                        }

                        console.log(end_point_port);

                        var promptEndPointPort = {
                            properties: {
                                end_point_port: {
                                    message: configPrompt.end_point_port,
                                    default: end_point_port,
                                    validator: /^[0-9]*$/,
                                    warning: 'Only numbers are allowed.',
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

                            var reorder_request_mail = process.env.REORDER_REQUEST_MAIL;
                            if (reorder_request_mail === undefined) {
                                reorder_request_mail = config.reorder_request_mail;
                            }

                            var promptReorderRequestMail = {
                                properties: {
                                    reorder_request_mail: {
                                        message: configPrompt.reorder_request_mail,
                                        default: reorder_request_mail,
                                        validator: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                                        warning: 'Enter valid email.',
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
                                    on_base = config.on_base;
                                }

                                var promptOnBase = {
                                    properties: {
                                        on_base: {
                                            message: configPrompt.on_base,
                                            default: on_base,
                                            validator: /^(y[es]*|n[o]*)$/,
                                            warning: 'You must enter yes or no',
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
                                            provider_url = config.provider_url;
                                        }

                                        var promptProviderUrl = {
                                            properties: {
                                                provider_url: {
                                                    message: configPrompt.provider_url,
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

                                            deferred.resolve();
                                        });
                                    }
                                    else {
                                        configMongo.on_base = 'n';
                                        deferred.resolve();
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });

        return deferred.promise;
    }
};