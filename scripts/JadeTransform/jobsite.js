var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var configPrompt = require('./config-prompt.js');
var Q = require('q');

module.exports = {
    jobsiteInstall : function(config){
        var deferred = Q.defer();

        var edx_gateway_ip = process.env.EDX_GATEWAY_IP;
        if (edx_gateway_ip === undefined) {
            edx_gateway_ip = config.Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_EndPointAddress;
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
            configMongo.Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_EndPointAddress = result.edx_gateway_ip;

            var edx_gateway_port = process.env.EDX_GATEWAY_PORT;
            if (edx_gateway_port === undefined) {
                edx_gateway_port = config.Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_Port;
            }

            var promptEDXGatewayPort = {
                properties: {
                    edx_gateway_port: {
                        message: configPrompt.edx_gateway_port,
                        default: edx_gateway_port,
                        validator: /^[0-9]*$/,
                        warning: 'Only numbers are allowed.',
                        required: false
                    }
                }
            };

            prompt.get(promptEDXGatewayPort, function (err, result) {
                if (err) {
                    util.handleError(err);
                }

                configMongo.edx_gateway_port = result.edx_gateway_port;
                configMongo.Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_Port = result.edx_gateway_port;

                deferred.resolve();
            });
        });
        return deferred.promise;
    }
};