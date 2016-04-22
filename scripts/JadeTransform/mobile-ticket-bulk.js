
var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var configPrompt = require('./config-prompt.js');
var MongoClient = require('mongodb').MongoClient;
var async = require('async');

module.exports = {
    product3Install : function (cb) {
        var product3_installation = process.env.PRODUCT3_INSTALLATION;
        if (product3_installation === undefined) {
            product3_installation = configMongo.product3_installation;
        }

        var promptProduct3Installation = {
            properties: {
                product3_installation: {
                    message: configPrompt.installProduct(product3_installation),
                    default: 'y',
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

                var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
                if (edx_gateway_ip === undefined) {
                    edx_gateway_ip = configMongo.edx_gateway_ip;
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
                    configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress = result.edx_gateway_ip;

                    var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                    if (edx_gateway_port === undefined) {
                        edx_gateway_port = configMongo.edx_gateway_port;
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
                        configMongo.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Port = result.edx_gateway_port;

                        cb();
                    });
                });
            }
            else {
                cb();
            }
        });
    },

    product3InstallFromDB : function (cb) {
        var self = this;
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
                                            message: configPrompt.productAlreadyInstalled(configMongo.product3_installation),
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
                                                            edx_gateway_ip = configMongo.edx_gateway_ip;
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

                                                            var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
                                                            if (edx_gateway_port === undefined) {
                                                                edx_gateway_port = configMongo.edx_gateway_port;
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
                                self.product3Install(function() {
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
        if (product.code === configMongo.product3_installation) {
            return callback(true);
        }
        callback(false);
    }, function (hasMatched) {
        cb(hasMatched);
    });
}