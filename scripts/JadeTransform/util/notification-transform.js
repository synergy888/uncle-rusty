#! /usr/bin/env node

var fs = require('fs');
var transformMongoProperties = require('../model/transformMongoProperties.js');

var mongo_transform = {
    /**
     * Transform Mongo .json files by replacing values from the config file
     * @param {Object} config object
     * @param {String} Mongo .json sourceFile
     * @param {String} destinationFile for transformed Mongo .json sourceFile
     * @returns {true/false} boolean true/false on transform operation
     */
    transformMongoJSONFile: function(transformProperties, sourceFile, destinationFile){
        try {
            var fs = require('fs')
            var data = fs.readFileSync(sourceFile).toString();
            if (sourceFile.indexOf('notificationDefinitions.json') > -1) {
                data = data.replace(/~notificationDefinitions_order_create_company~/g, transformMongoProperties.notificationDefinitionObj.order_create_company);
                data = data.replace(/~notificationDefinitions_order_create_name~/g, transformMongoProperties.notificationDefinitionObj.order_create_name);
                data = data.replace(/~notificationDefinitions_order_create_bod_name~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_name);
                data = data.replace(/~notificationDefinitions_order_create_bod_filterDefinitions_name~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_filterDefinitions_name);
                data = data.replace(/~notificationDefinitions_order_create_bod_filterDefinitions_type~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_filterDefinitions_type);
                data = data.replace(/~notificationDefinitions_order_create_bod_filterDefinitions_expression~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_filterDefinitions_expression);
                data = data.replace(/~notificationDefinitions_order_create_bod_filterDefinitions_name2~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_filterDefinitions_name2);
                data = data.replace(/~notificationDefinitions_order_create_bod_filterDefinitions_type2~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_filterDefinitions_type2);
                data = data.replace(/~notificationDefinitions_order_create_bod_filterDefinitions_expression2~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_filterDefinitions_expression2);
                data = data.replace(/~notificationDefinitions_order_create_bod_contextDefinitions~/g, transformMongoProperties.notificationDefinitionObj.order_create_bod_contextDefinitions);
                data = data.replace(/~notificationDefinitions_order_create_context~/g, transformMongoProperties.notificationDefinitionObj.order_create_context);
                data = data.replace(/~notificationDefinitions_order_create_context2~/g, transformMongoProperties.notificationDefinitionObj.order_create_context2);
                data = data.replace(/~notificationDefinitions_order_create_context3~/g, transformMongoProperties.notificationDefinitionObj.order_create_context3);
                data = data.replace(/~notificationDefinitions_order_create_transports_type~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_type);
                data = data.replace(/~notificationDefinitions_order_create_transports_name~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_name);
                data = data.replace(/~notificationDefinitions_order_create_transports_grouped~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_grouped);
                data = data.replace(/~notificationDefinitions_order_create_transports_template_name~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_template_name);
                data = data.replace(/~notificationDefinitions_order_create_transports_type2~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_type2);
                data = data.replace(/~notificationDefinitions_order_create_transports_name2~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_name2);
                data = data.replace(/~notificationDefinitions_order_create_transports_grouped2~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_grouped2);
                data = data.replace(/~notificationDefinitions_order_create_transports_template_name2~/g, transformMongoProperties.notificationDefinitionObj.order_create_transports_template_name2);

                data = data.replace(/~notificationDefinitions_ticket_create_company~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_company);
                data = data.replace(/~notificationDefinitions_ticket_create_name~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_name);
                data = data.replace(/~notificationDefinitions_ticket_create_bod_name~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_bod_name);
                data = data.replace(/~notificationDefinitions_ticket_create_bod_filterDefinitions_name~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_bod_filterDefinitions_name);
                data = data.replace(/~notificationDefinitions_ticket_create_bod_filterDefinitions_type~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_bod_filterDefinitions_type);
                data = data.replace(/~notificationDefinitions_ticket_create_bod_filterDefinitions_expression~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_bod_filterDefinitions_expression);
                data = data.replace(/~notificationDefinitions_ticket_create_bod_contextDefinitions~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_bod_contextDefinitions);
                data = data.replace(/~notificationDefinitions_ticket_create_context~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_context);
                data = data.replace(/~notificationDefinitions_ticket_create_context2~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_context2);
                data = data.replace(/~notificationDefinitions_ticket_create_context3~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_context3);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_type~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_type);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_name~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_name);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_grouped~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_grouped);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_template_name~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_template_name);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_type2~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_type2);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_name2~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_name2);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_grouped2~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_grouped2);
                data = data.replace(/~notificationDefinitions_ticket_create_transports_template_name2~/g, transformMongoProperties.notificationDefinitionObj.ticket_create_transports_template_name2);
            }

            this.isDirectory = true;
            try
            {
                var fs = require('fs');
                if (fs.statSync(transformMongoProperties.output_folder).isDirectory() === false){
                    this.isDirectory = false;
                }
            }
            catch (err)
            {
                this.isDirectory = false;
            }

            if (this.isDirectory === false) {
                fs.mkdirSync(transformMongoProperties.output_folder, 0766, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }

            this.isFile = false;
            try
            {
                var fs = require('fs');
                if (fs.statSync(destinationFile).isFile === true){
                    this.isFile = true;
                }
            }
            catch (err)
            {
                this.isFile = false;
            }

            if (this.isFile === true) {
                fs.unlinkSync(destinationFile);
            }

            fs.writeFileSync(destinationFile, data, 'utf8');
        }
        catch (er)
        {
            console.log('transform error: ', er.stack);
            return false;
        }

        return true;
    }

};

module.exports = mongo_transform;
