var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var configPrompt = require('./config-prompt.js');
var MongoClient = require('mongodb').MongoClient;
var async = require('async');

module.exports = {

    product2Install : function (cb) {
        var product2_installation = process.env.PRODUCT2_INSTALLATION;
        if (product2_installation === undefined) {
            product2_installation = configMongo.product2_installation;
        }

        var promptProduct2Installation = {
            properties: {
                product2_installation: {
                    message: configPrompt.installProduct(product2_installation),
                    default: 'y',
                    required: false
                }
            }
        };


        prompt.get(promptProduct2Installation, function (err, result) {
            if (err) {
                util.handleError(err);
            }

            if (result.product2_installation.toLowerCase() === 'y') {

                configMongo.product2_install = 'y';
                result.product2_installation = configMongo.product2_installation;
                configMongo.productDefinitions_ticket_code = result.product2_installation;
                configMongo.Users_products_ticket_code = result.product2_installation;
                configMongo.Companies_products_ticket_code = result.product2_installation;
                console.log('product installing: ' + configMongo.product2_installation);

                var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
                if (edx_gateway_ip === undefined) {
                    edx_gateway_ip = configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress;
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
                    configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress = result.edx_gateway_ip;

                    var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                    if (edx_gateway_port === undefined) {
                        edx_gateway_port = configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Port;
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
                        configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Port = result.edx_gateway_port;

                        cb();
                    });
                });
            }
            else {
                configMongo.product2_install = 'n';
                cb();
            }
        });
    },

    product2InstallFromDB : function (cb) {

        var self = this;
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

                        checkIfProductInstalled(result, function(flag){
                            console.log(flag);
                            if(flag) {
                                var promptFlag = {
                                    properties: {
                                        flag: {
                                            message: configPrompt.productAlreadyInstalled(configMongo.product2_installation),
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

                                                        for (i=0; i < result[0].products.length;i++) {
                                                            if (result[0].products[i].code === configMongo.product2_installation) {
                                                                data.edx_gateway_ip = result[0].products[i].settings.dataEndPoints.EDXTicketService.EndPointAddress;
                                                                data.edx_gateway_port = result[0].products[i].settings.dataEndPoints.EDXTicketService.Port;
                                                            }

                                                        }

                                                        var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
                                                        if (edx_gateway_ip === undefined) {
                                                            edx_gateway_ip = data.edx_gateway_ip;
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
                                                            configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress = result.edx_gateway_ip;

                                                            var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                                                            if (edx_gateway_port === undefined) {
                                                                edx_gateway_port = data.edx_gateway_port;
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
                                                                configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Port = result.edx_gateway_port;

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
                                self.product2Install(function() {
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
        if (product.code === configMongo.product2_installation) {
            return callback(true);
        }
        callback(false);
    }, function (hasMatched) {
        cb(hasMatched);
    });
}