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
            if (sourceFile.indexOf('templateDefinitions.json') > -1) {
                data = data.replace(/~templateDefinitions_order_company~/g, transformMongoProperties.templateDefinitionObj.order_company);
                data = data.replace(/~templateDefinitions_order_name~/g, transformMongoProperties.templateDefinitionObj.order_name);
                data = data.replace(/~templateDefinitions_order_transport_type~/g, transformMongoProperties.templateDefinitionObj.order_transport_type);
                data = data.replace(/~templateDefinitions_order_transport_name~/g, transformMongoProperties.templateDefinitionObj.order_transport_name);
                data = data.replace(/~templateDefinitions_order_transport_grouped~/g, transformMongoProperties.templateDefinitionObj.order_transport_grouped);
                data = data.replace(/~templateDefinitions_order_bod_name~/g, transformMongoProperties.templateDefinitionObj.order_bod_name);
                data = data.replace(/~templateDefinitions_order_formatter~/g, transformMongoProperties.templateDefinitionObj.order_formatter);
                data = data.replace(/~templateDefinitions_order_subject_type~/g, transformMongoProperties.templateDefinitionObj.order_subject_type);
                data = data.replace(/~templateDefinitions_order_subject_value~/g, transformMongoProperties.templateDefinitionObj.order_subject_value);
                data = data.replace(/~templateDefinitions_order_content_type~/g, transformMongoProperties.templateDefinitionObj.order_content_type);
                data = data.replace(/~templateDefinitions_order_content_value~/g, transformMongoProperties.templateDefinitionObj.order_content_value);
                data = data.replace(/~templateDefinitions_order_content_attachments_fileName~/g, transformMongoProperties.templateDefinitionObj.order_content_attachments_fileName);
                data = data.replace(/~templateDefinitions_order_content_attachments_filePath~/g, transformMongoProperties.templateDefinitionObj.order_content_attachments_filePath);
                data = data.replace(/~templateDefinitions_order_content_attachments_cid~/g, transformMongoProperties.templateDefinitionObj.order_content_attachments_cid);
                data = data.replace(/~templateDefinitions_order_active~/g, transformMongoProperties.templateDefinitionObj.order_active);

                data = data.replace(/~templateDefinitions_order_sms_company~/g, transformMongoProperties.templateDefinitionObj.order_sms_company);
                data = data.replace(/~templateDefinitions_order_sms_name~/g, transformMongoProperties.templateDefinitionObj.order_sms_name);
                data = data.replace(/~templateDefinitions_order_sms_transport_type~/g, transformMongoProperties.templateDefinitionObj.order_sms_transport_type);
                data = data.replace(/~templateDefinitions_order_sms_transport_name~/g, transformMongoProperties.templateDefinitionObj.order_sms_transport_name);
                data = data.replace(/~templateDefinitions_order_sms_transport_grouped~/g, transformMongoProperties.templateDefinitionObj.order_sms_transport_grouped);
                data = data.replace(/~templateDefinitions_order_sms_bod_name~/g, transformMongoProperties.templateDefinitionObj.order_sms_bod_name);
                data = data.replace(/~templateDefinitions_order_sms_formatter~/g, transformMongoProperties.templateDefinitionObj.order_sms_formatter);
                data = data.replace(/~templateDefinitions_order_sms_subject_type~/g, transformMongoProperties.templateDefinitionObj.order_sms_subject_type);
                data = data.replace(/~templateDefinitions_order_sms_subject_value~/g, transformMongoProperties.templateDefinitionObj.order_sms_subject_value);
                data = data.replace(/~templateDefinitions_order_sms_content_type~/g, transformMongoProperties.templateDefinitionObj.order_sms_content_type);
                data = data.replace(/~templateDefinitions_order_sms_content_value~/g, transformMongoProperties.templateDefinitionObj.order_sms_content_value);
                data = data.replace(/~templateDefinitions_order_sms_active~/g, transformMongoProperties.templateDefinitionObj.order_sms_active);

                data = data.replace(/~templateDefinitions_ticket_company~/g, transformMongoProperties.templateDefinitionObj.ticket_company);
                data = data.replace(/~templateDefinitions_ticket_name~/g, transformMongoProperties.templateDefinitionObj.ticket_name);
                data = data.replace(/~templateDefinitions_ticket_transport_type~/g, transformMongoProperties.templateDefinitionObj.ticket_transport_type);
                data = data.replace(/~templateDefinitions_ticket_transport_name~/g, transformMongoProperties.templateDefinitionObj.ticket_transport_name);
                data = data.replace(/~templateDefinitions_ticket_transport_grouped~/g, transformMongoProperties.templateDefinitionObj.ticket_transport_grouped);
                data = data.replace(/~templateDefinitions_ticket_bod_name~/g, transformMongoProperties.templateDefinitionObj.ticket_bod_name);
                data = data.replace(/~templateDefinitions_ticket_formatter~/g, transformMongoProperties.templateDefinitionObj.ticket_formatter);
                data = data.replace(/~templateDefinitions_ticket_subject_type~/g, transformMongoProperties.templateDefinitionObj.ticket_subject_type);
                data = data.replace(/~templateDefinitions_ticket_subject_value~/g, transformMongoProperties.templateDefinitionObj.ticket_subject_value);
                data = data.replace(/~templateDefinitions_ticket_content_type~/g, transformMongoProperties.templateDefinitionObj.ticket_content_type);
                data = data.replace(/~templateDefinitions_ticket_content_value~/g, transformMongoProperties.templateDefinitionObj.ticket_content_value);
                data = data.replace(/~templateDefinitions_ticket_content_attachments_fileName~/g, transformMongoProperties.templateDefinitionObj.ticket_content_attachments_fileName);
                data = data.replace(/~templateDefinitions_ticket_content_attachments_filePath~/g, transformMongoProperties.templateDefinitionObj.ticket_content_attachments_filePath);
                data = data.replace(/~templateDefinitions_ticket_content_attachments_cid~/g, transformMongoProperties.templateDefinitionObj.ticket_content_attachments_cid);
                data = data.replace(/~templateDefinitions_ticket_active~/g, transformMongoProperties.templateDefinitionObj.ticket_active);

                data = data.replace(/~templateDefinitions_ticket_sms_company~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_company);
                data = data.replace(/~templateDefinitions_ticket_sms_name~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_name);
                data = data.replace(/~templateDefinitions_ticket_sms_transport_type~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_transport_type);
                data = data.replace(/~templateDefinitions_ticket_sms_transport_name~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_transport_name);
                data = data.replace(/~templateDefinitions_ticket_sms_transport_grouped~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_transport_grouped);
                data = data.replace(/~templateDefinitions_ticket_sms_bod_name~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_bod_name);
                data = data.replace(/~templateDefinitions_ticket_sms_formatter~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_formatter);
                data = data.replace(/~templateDefinitions_ticket_sms_subject_type~/g, transformMongoProperties.templateDefinitionObj.ticket_subject_type);
                data = data.replace(/~templateDefinitions_ticket_sms_subject_value~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_subject_value);
                data = data.replace(/~templateDefinitions_ticket_sms_content_type~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_content_type);
                data = data.replace(/~templateDefinitions_ticket_sms_content_value~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_content_value);
                data = data.replace(/~templateDefinitions_ticket_sms_active~/g, transformMongoProperties.templateDefinitionObj.ticket_sms_active);

                data = data.replace(/~templateDefinitions_reorder_company~/g, transformMongoProperties.templateDefinitionObj.reorder_company);
                data = data.replace(/~templateDefinitions_reorder_name~/g, transformMongoProperties.templateDefinitionObj.reorder_name);
                data = data.replace(/~templateDefinitions_reorder_transport_type~/g, transformMongoProperties.templateDefinitionObj.reorder_transport_type);
                data = data.replace(/~templateDefinitions_reorder_transport_name~/g, transformMongoProperties.templateDefinitionObj.reorder_transport_name);
                data = data.replace(/~templateDefinitions_reorder_transport_grouped~/g, transformMongoProperties.templateDefinitionObj.reorder_transport_grouped);
                data = data.replace(/~templateDefinitions_reorder_bod_name~/g, transformMongoProperties.templateDefinitionObj.reorder_bod_name);
                data = data.replace(/~templateDefinitions_reorder_formatter~/g, transformMongoProperties.templateDefinitionObj.reorder_formatter);
                data = data.replace(/~templateDefinitions_reorder_subject_type~/g, transformMongoProperties.templateDefinitionObj.reorder_subject_type);
                data = data.replace(/~templateDefinitions_reorder_subject_value~/g, transformMongoProperties.templateDefinitionObj.reorder_subject_value);
                data = data.replace(/~templateDefinitions_reorder_content_type~/g, transformMongoProperties.templateDefinitionObj.reorder_content_type);
                data = data.replace(/~templateDefinitions_reorder_content_value~/g, transformMongoProperties.templateDefinitionObj.reorder_content_value);
                data = data.replace(/~templateDefinitions_reorder_content_attachments_fileName~/g, transformMongoProperties.templateDefinitionObj.reorder_content_attachments_fileName);
                data = data.replace(/~templateDefinitions_reorder_content_attachments_filePath~/g, transformMongoProperties.templateDefinitionObj.reorder_content_attachments_filePath);
                data = data.replace(/~templateDefinitions_reorder_content_attachments_cid~/g, transformMongoProperties.templateDefinitionObj.reorder_content_attachments_cid);
                data = data.replace(/~templateDefinitions_reorder_active~/g, transformMongoProperties.templateDefinitionObj.reorder_active);
                data = data.replace(/~templateDefinitions_future_order_company~/g, transformMongoProperties.templateDefinitionObj.future_order_company);
                data = data.replace(/~templateDefinitions_future_order_name~/g, transformMongoProperties.templateDefinitionObj.future_order_name);
                data = data.replace(/~templateDefinitions_future_order_transport_type~/g, transformMongoProperties.templateDefinitionObj.future_order_transport_type);
                data = data.replace(/~templateDefinitions_future_order_transport_name~/g, transformMongoProperties.templateDefinitionObj.future_order_transport_name);
                data = data.replace(/~templateDefinitions_future_order_transport_grouped~/g, transformMongoProperties.templateDefinitionObj.future_order_transport_grouped);
                data = data.replace(/~templateDefinitions_future_order_formatter~/g, transformMongoProperties.templateDefinitionObj.future_order_formatter);
                data = data.replace(/~templateDefinitions_future_order_subject_type~/g, transformMongoProperties.templateDefinitionObj.future_order_subject_type);
                data = data.replace(/~templateDefinitions_future_order_subject_value~/g, transformMongoProperties.templateDefinitionObj.future_order_subject_value);
                data = data.replace(/~templateDefinitions_future_order_content_type~/g, transformMongoProperties.templateDefinitionObj.future_order_content_type);
                data = data.replace(/~templateDefinitions_future_order_content_value~/g, transformMongoProperties.templateDefinitionObj.future_order_content_value);
                data = data.replace(/~templateDefinitions_future_order_content_attachments_fileName~/g, transformMongoProperties.templateDefinitionObj.future_order_content_attachments_fileName);
                data = data.replace(/~templateDefinitions_future_order_content_attachments_filePath~/g, transformMongoProperties.templateDefinitionObj.future_order_content_attachments_filePath);
                data = data.replace(/~templateDefinitions_future_order_content_attachments_cid~/g, transformMongoProperties.templateDefinitionObj.future_order_content_attachments_cid);
                data = data.replace(/~templateDefinitions_future_order_active~/g, transformMongoProperties.templateDefinitionObj.future_order_active);
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
