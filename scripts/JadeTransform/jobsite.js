var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var configPrompt = require('./config-prompt.js');
var MongoClient = require('mongodb').MongoClient;
var async = require('async');

module.exports = {
    product4Install : function (cb) {
        var product4_installation = process.env.PRODUCT4_INSTALLATION;
        if (product4_installation === undefined) {
            product4_installation = configMongo.product4_installation;
        }

        var promptProduct4Installation = {
            properties: {
                product4_installation: {
                    message: configPrompt.installProduct(product4_installation),
                    default: 'y',
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

                var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
                if (edx_gateway_ip === undefined) {
                    edx_gateway_ip = configMongo.Companies_products_jobsite_settings_edxGatewayConfig_ServerAddress;
                }

                var promptEDXGatewayIp = {
                    properties: {
                        edx_gateway_ip: {
                            message: configPrompt.edx_gateway_ip,
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
                    configMongo.Companies_products_jobsite_settings_edxGatewayConfig_ServerAddress = result.edx_gateway_ip;

                    var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                    if (edx_gateway_port === undefined) {
                        edx_gateway_port = configMongo.Companies_products_jobsite_settings_edxGatewayConfig_Port;
                    }

                    var promptEDXGatewayPort = {
                        properties: {
                            edx_gateway_port: {
                                message: configPrompt.edx_gateway_port,
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
                        configMongo.Companies_products_jobsite_settings_edxGatewayConfig_Port = result.edx_gateway_port;

                        cb();
                    });
                });
            }
            else {
                configMongo.product4_install = 'n';
                cb();
            }
        });
    },

    product4InstallFromDB : function (cb) {
        var self = this;
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

                        checkIfProductInstalled(result, function(flag){
                            if(flag) {
                                var promptFlag = {
                                    properties: {
                                        flag: {
                                            message: configPrompt.productAlreadyInstalled(configMongo.product4_installation),
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
                                                collection.find({}).toArray(function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }
                                                    else {

                                                        var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
                                                        if (edx_gateway_ip === undefined) {
                                                            edx_gateway_ip = configMongo.Companies_products_jobsite_settings_edxGatewayConfig_ServerAddress;
                                                        }

                                                        var promptEDXGatewayIp = {
                                                            properties: {
                                                                edx_gateway_ip: {
                                                                    message: configPrompt.edx_gateway_ip,
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
                                                            configMongo.Companies_products_ticket_settings_dataEndPoints_MobileTicketService_EndPointAddress = result.edx_gateway_ip;
                                                            configMongo.Companies_products_jobsite_settings_edxGatewayConfig_ServerAddress = result.edx_gateway_ip;

                                                            var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                                                            if (edx_gateway_port === undefined) {
                                                                edx_gateway_port = configMongo.Companies_products_jobsite_settings_edxGatewayConfig_Port;
                                                            }

                                                            var promptEDXGatewayPort = {
                                                                properties: {
                                                                    edx_gateway_port: {
                                                                        message: configPrompt.edx_gateway_port,
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
                                                                configMongo.Companies_products_ticket_settings_dataEndPoints_MobileTicketService_Port = result.edx_gateway_port;
                                                                configMongo.Companies_products_jobsite_settings_edxGatewayConfig_Port = result.edx_gateway_port;

                                                                cb();
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
                                self.product4Install(function() {
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
        if (product.code === configMongo.product4_installation) {
            return callback(true);
        }
        callback(false);
    }, function (hasMatched) {
        cb(hasMatched);
    });
}