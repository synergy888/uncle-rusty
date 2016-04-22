#! /usr/bin/env node

var fs = require('fs');
var company = require('../model/company.js');
var notificationDefinition = require('../model/notificationDefinition.js');
var productDefinition = require('../model/productDefinition.js');
var templateDefinition = require('../model/templateDefinition.js');
var user = require('../model/user.js');
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
        //companies-v1.3.json contains latest template to hold companies data after 1.3 is the only supporting vesion.
        //companies.json in the inut folder is 1.2 companies version json file.
        try {
            var fs = require('fs')
            var data = fs.readFileSync(sourceFile).toString();
            if (sourceFile.indexOf('companies-v1.3.json') > -1) {
                data = data.replace(/~Companies_code~/g, transformMongoProperties.companyObj.code);
                data = data.replace(/~Companies_description~/g, transformMongoProperties.companyObj.description);
                data = data.replace(/~Companies_status~/g, transformMongoProperties.companyObj.status);
                data = data.replace(/~Companies_settings_communications_email_from_name~/g, transformMongoProperties.companyObj.settings_communications_email_from_name);
                data = data.replace(/~Companies_settings_communications_email_from_value~/g, transformMongoProperties.companyObj.settings_communications_email_from_value);
                data = data.replace(/~Companies_settings_cloudStore~/g, transformMongoProperties.companyObj.settings_cloudStore);
                data = data.replace(/~Companies_customBranding_font_2~/g, transformMongoProperties.companyObj.customBranding_font_2);
                data = data.replace(/~Companies_customBranding_font~/g, transformMongoProperties.companyObj.customBranding_font);
                data = data.replace(/~Companies_branding_primary~/g, transformMongoProperties.companyObj.branding_primary);
                data = data.replace(/~Companies_branding_secondary~/g, transformMongoProperties.companyObj.branding_secondary);
                data = data.replace(/~Companies_branding_text_primary~/g, transformMongoProperties.companyObj.branding_text_primary);
                data = data.replace(/~Companies_branding_text_secondary~/g, transformMongoProperties.companyObj.branding_text_secondary);
                data = data.replace(/~Companies_branding_logo~/g, transformMongoProperties.companyObj.branding_logo);
                data = data.replace(/~Companies_images_smallLogo~/g, transformMongoProperties.companyObj.images_smallLogo);

                data = data.replace(/~Companies_products_commerce_code~/g, transformMongoProperties.companyObj.products_commerce_code);
                data = data.replace(/~Companies_products_commerce_settings_env~/g, transformMongoProperties.companyObj.products_commerce_settings_env);
                data = data.replace(/~Companies_products_commerce_settings_edxGatewayConfig_ServerAddress~/g, transformMongoProperties.companyObj.products_commerce_settings_edxGatewayConfig_ServerAddress);
                data = data.replace(/~Companies_products_commerce_settings_edxGatewayConfig_Port~/g, transformMongoProperties.companyObj.products_commerce_settings_edxGatewayConfig_Port);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Port~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_LegacyDataService_Port);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Type~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_LegacyDataService_Type);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_LegacyDataService_SubType~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_LegacyDataService_SubType);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_EndPointAddress~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_SocketEndPoint_EndPointAddress);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_Port~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_SocketEndPoint_Port);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_Type~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_SocketEndPoint_Type);
                data = data.replace(/~Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_SubType~/g, transformMongoProperties.companyObj.products_commerce_settings_dataEndPoints_SocketEndPoint_SubType);
                data = data.replace(/~Companies_products_commerce_settings_futureOrdersEmail_generateTime~/g, transformMongoProperties.companyObj.products_commerce_settings_futureOrdersEmail_generateTime);
                data = data.replace(/~Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod~/g, transformMongoProperties.companyObj.products_commerce_settings_futureOrdersEmail_durationTimePeriod);
                data = data.replace(/~Companies_products_commerce_settings_futureOrdersEmail_template~/g, transformMongoProperties.companyObj.products_commerce_settings_futureOrdersEmail_template);
                data = data.replace(/~Companies_products_commerce_settings_notifications_orderRequest_template~/g, transformMongoProperties.companyObj.products_commerce_settings_notifications_orderRequest_template);
                data = data.replace(/~Companies_products_commerce_settings_notifications_orderRequest_template_to_name~/g, transformMongoProperties.companyObj.products_commerce_settings_notifications_orderRequest_template_to_name);
                data = data.replace(/~Companies_products_commerce_settings_notifications_orderRequest_template_to_value~/g, transformMongoProperties.companyObj.products_commerce_settings_notifications_orderRequest_template_to_value);
                data = data.replace(/~Companies_products_commerce_settings_notifications_orderCreate_template~/g, transformMongoProperties.companyObj.products_commerce_settings_notifications_orderCreate_template);
                data = data.replace(/~Companies_products_commerce_settings_notifications_ticketCreate_template~/g, transformMongoProperties.companyObj.products_commerce_settings_notifications_ticketCreate_template);
                data = data.replace(/~Companies_products_commerce_settings_company_acctInfo~/g, transformMongoProperties.companyObj.products_commerce_settings_company_acctInfo);
                data = data.replace(/~Companies_products_commerce_settings_company_docImage~/g, transformMongoProperties.companyObj.products_commerce_settings_company_docImage);


                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_providerAddress~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_providerAddress);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documentsUseChecksum~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documentsUseChecksum);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_ticketUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_ticketUrl);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_invoiceUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_invoiceUrl);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_invoiceByDateUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_invoiceByDateUrl);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_invoiceByProjectByDateUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_invoiceByProjectByDateUrl);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_checkUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_checkUrl);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_statementsUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_statementsUrl);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_eTicketUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_eTicketUrl);
                data = data.replace(/~Companies_products_commerce_settings_documentsConfig_documents_batchWeightsUrl~/g, transformProperties.companyObj.products_commerce_settings_documentsConfig_documents_batchWeightsUrl);

                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_value~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_value);
                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_operator~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_operator);
                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_hours~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_hours);
                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_minutes~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_minutes);
                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_name~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_name);
                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_defaultRegion~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_defaultRegion);

                data = data.replace(/~Companies_products_commerce_settings_sms~/g, transformMongoProperties.companyObj.products_commerce_settings_user_sms);
                data = data.replace(/~Companies_products_commerce_settings_user_sms~/g, transformMongoProperties.companyObj.products_commerce_settings_user_sms);
                data = data.replace(/~Companies_products_commerce_settings_user_customer_code~/g, transformMongoProperties.companyObj.products_commerce_settings_user_customer_code);
                data = data.replace(/~Companies_products_commerce_settings_user_customer_name~/g, transformMongoProperties.companyObj.products_commerce_settings_user_customer_name);
                data = data.replace(/~Companies_products_commerce_settings_user_sales~/g, transformMongoProperties.companyObj.products_commerce_settings_user_sales);
                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_name~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_name);
                data = data.replace(/~Companies_products_commerce_settings_company_timeZone_defaultRegion~/g, transformMongoProperties.companyObj.products_commerce_settings_company_timeZone_defaultRegion);

                data = data.replace(/~Companies_products_commerce_settings_user_permissions_batchWeights~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_batchWeights);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_truckTimes~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_truckTimes);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_pricing~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_pricing);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_mapping~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_mapping);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_acctInfo~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_acctInfo);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_docImage~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_docImage);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_futureOrderEmail~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_futureOrderEmail);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_changeCustomer~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_changeCustomer);
                data = data.replace(/~Companies_products_commerce_settings_user_permissions_isAdmin~/g, transformMongoProperties.companyObj.products_commerce_settings_user_permissions_isAdmin);

                data = data.replace(/~Companies_products_ticket_code~/g, transformMongoProperties.companyObj.products_ticket_code);
                data = data.replace(/~Companies_products_ticket_settings_savePdf~/g, transformMongoProperties.companyObj.products_ticket_settings_savePdf);
                data = data.replace(/~Companies_products_ticket_settings_systemType_hauler~/g, transformMongoProperties.companyObj.products_ticket_settings_systemType_hauler);
                data = data.replace(/~Companies_products_ticket_settings_systemType_ticket_concrete~/g, transformMongoProperties.companyObj.products_ticket_settings_systemType_ticket_concrete);
                data = data.replace(/~Companies_products_ticket_settings_systemType_ticket_aggregate~/g, transformMongoProperties.companyObj.products_ticket_settings_systemType_ticket_aggregate);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_MobileTicketService_EndPointAddress~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_MobileTicketService_EndPointAddress);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_MobileTicketService_Port~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_MobileTicketService_Port);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_MobileTicketService_Type~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_MobileTicketService_Type);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_MobileTicketService_SubType~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_MobileTicketService_SubType);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_MobileTicketService_context~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_MobileTicketService_context);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Port~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_EDXTicketService_Port);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Type~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_EDXTicketService_Type);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_EDXTicketService_SubType~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_EDXTicketService_SubType);
                data = data.replace(/~Companies_products_ticket_settings_dataEndPoints_EDXTicketService_context~/g, transformMongoProperties.companyObj.products_ticket_settings_dataEndPoints_EDXTicketService_context);

                data = data.replace(/~Companies_products_ticket_settings_company_timeZone_value~/g, transformMongoProperties.companyObj.products_ticket_settings_company_timeZone_value);
                data = data.replace(/~Companies_products_ticket_settings_company_timeZone_operator~/g, transformMongoProperties.companyObj.products_ticket_settings_company_timeZone_operator);
                data = data.replace(/~Companies_products_ticket_settings_company_timeZone_hours~/g, transformMongoProperties.companyObj.products_ticket_settings_company_timeZone_hours);
                data = data.replace(/~Companies_products_ticket_settings_company_timeZone_minutes~/g, transformMongoProperties.companyObj.products_ticket_settings_company_timeZone_minutes);

                data = data.replace(/~Companies_products_ticket_settings_company_supportEmail~/g, transformMongoProperties.companyObj.products_ticket_settings_company_supportEmail);
                data = data.replace(/~Companies_products_ticket_settings_templates_type~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_type);
                data = data.replace(/~Companies_products_ticket_settings_templates_name~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_name);
                data = data.replace(/~Companies_products_ticket_settings_templates_body~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_body);
                data = data.replace(/~Companies_products_ticket_settings_templates_subject~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_subject);
                data = data.replace(/~Companies_products_ticket_settings_templates_fileName~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_fileName);
                data = data.replace(/~Companies_products_ticket_settings_templates_formatter~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_formatter);
                data = data.replace(/~Companies_products_ticket_settings_templates_type2~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_type2);
                data = data.replace(/~Companies_products_ticket_settings_templates_name2~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_name2);
                data = data.replace(/~Companies_products_ticket_settings_templates_body2~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_body2);
                data = data.replace(/~Companies_products_ticket_settings_templates_subject2~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_subject2);
                data = data.replace(/~Companies_products_ticket_settings_templates_fileName2~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_fileName2);
                data = data.replace(/~Companies_products_ticket_settings_templates_formatter2~/g, transformMongoProperties.companyObj.products_ticket_settings_templates_formatter2);

                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                data = data.replace(/~Companies_products_bulkticket_code~/g, transformMongoProperties.companyObj.products_bulkticket_code);
                data = data.replace(/~Companies_products_bulkticket_settings_savePdf~/g, transformMongoProperties.companyObj.products_bulkticket_settings_savePdf);
                data = data.replace(/~Companies_products_bulkticket_settings_systemType_hauler~/g, transformMongoProperties.companyObj.products_bulkticket_settings_systemType_hauler);
                data = data.replace(/~Companies_products_bulkticket_settings_systemType_ticket_concrete~/g, transformMongoProperties.companyObj.products_bulkticket_settings_systemType_bulkticket_concrete);
                data = data.replace(/~Companies_products_bulkticket_settings_systemType_ticket_aggregate~/g, transformMongoProperties.companyObj.products_bulkticket_settings_systemType_bulkticket_aggregate);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_EndPointAddress~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_MobileTicketService_EndPointAddress);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_Port~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_MobileTicketService_Port);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_Type~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_MobileTicketService_Type);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_SubType~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_MobileTicketService_SubType);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_context~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_MobileTicketService_context);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_EndPointAddress~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_EDXTicketService_EndPointAddress);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_Port~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_EDXTicketService_Port);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_Type~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_EDXTicketService_Type);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_SubType~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_EDXTicketService_SubType);
                data = data.replace(/~Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_context~/g, transformMongoProperties.companyObj.products_bulkticket_settings_dataEndPoints_EDXTicketService_context);

                data = data.replace(/~Companies_products_bulkticket_settings_company_timeZone_value~/g, transformMongoProperties.companyObj.products_bulkticket_settings_company_timeZone_value);
                data = data.replace(/~Companies_products_bulkticket_settings_company_timeZone_operator~/g, transformMongoProperties.companyObj.products_bulkticket_settings_company_timeZone_operator);
                data = data.replace(/~Companies_products_bulkticket_settings_company_timeZone_hours~/g, transformMongoProperties.companyObj.products_bulkticket_settings_company_timeZone_hours);
                data = data.replace(/~Companies_products_bulkticket_settings_company_timeZone_minutes~/g, transformMongoProperties.companyObj.products_bulkticket_settings_company_timeZone_minutes);

                data = data.replace(/~Companies_products_bulkticket_settings_company_supportEmail~/g, transformMongoProperties.companyObj.products_bulkticket_settings_company_supportEmail);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_type~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_type);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_name~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_name);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_body~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_body);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_subject~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_subject);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_fileName~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_fileName);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_formatter~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_formatter);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_type2~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_type2);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_name2~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_name2);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_body2~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_body2);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_subject2~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_subject2);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_fileName2~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_fileName2);
                data = data.replace(/~Companies_products_bulkticket_settings_templates_formatter2~/g, transformMongoProperties.companyObj.products_bulkticket_settings_templates_formatter2);
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                data = data.replace(/~Companies_products_jobsite_code~/g, transformMongoProperties.companyObj.products_jobsite_code);
                data = data.replace(/~Companies_products_jobsite_settings_systemType~/g, transformMongoProperties.companyObj.products_jobsite_settings_systemType);
                data = data.replace(/"~Companies_products_jobsite_settings_documentsConfig~"/g, transformMongoProperties.companyObj.products_jobsite_settings_documentsConfig);
                data = data.replace(/~Companies_products_jobsite_settings_edxGatewayConfig_ServerAddress~/g, transformMongoProperties.companyObj.products_jobsite_settings_edxGatewayConfig_ServerAddress);
                data = data.replace(/~Companies_products_jobsite_settings_edxGatewayConfig_Port~/g, transformMongoProperties.companyObj.products_jobsite_settings_edxGatewayConfig_Port);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_DataService_EndPointAddress~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_DataService_EndPointAddress);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_DataService_Port~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_DataService_Port);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_DataService_Type~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_DataService_Type);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_DataService_SubType~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_DataService_SubType);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_EndPointAddress~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_SocketEndPoint_EndPointAddress);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_Port~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_SocketEndPoint_Port);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_Type~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_DataService_Type);
                data = data.replace(/~Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_SubType~/g, transformMongoProperties.companyObj.products_jobsite_settings_dataEndPoints_DataService_SubType);
                data = data.replace(/~Companies_products_jobsite_settings_futureOrdersEmail_generateTime~/g, transformMongoProperties.companyObj.products_jobsite_settings_futureOrdersEmail_generateTime);
                data = data.replace(/~Companies_products_jobsite_settings_futureOrdersEmail_durationTimePeriod~/g, transformMongoProperties.companyObj.products_jobsite_settings_futureOrdersEmail_durationTimePeriod);
                data = data.replace(/~Companies_products_jobsite_settings_futureOrdersEmail_template~/g, transformMongoProperties.companyObj.products_jobsite_settings_futureOrdersEmail_template);
                data = data.replace(/~Companies_products_jobsite_settings_notifications_orderRequest_template~/g, transformMongoProperties.companyObj.products_jobsite_settings_notifications_orderRequest_template);
                data = data.replace(/~Companies_products_jobsite_settings_notifications_orderRequest_template_to_name~/g, transformMongoProperties.companyObj.products_jobsite_settings_notifications_orderRequest_template_to_name);
                data = data.replace(/~Companies_products_jobsite_settings_notifications_orderRequest_template_to_value~/g, transformMongoProperties.companyObj.products_jobsite_settings_notifications_orderRequest_template_to_value);
                data = data.replace(/~Companies_products_jobsite_settings_notifications_orderCreate_template~/g, transformMongoProperties.companyObj.products_jobsite_settings_notifications_orderCreate_template);
                data = data.replace(/~Companies_products_jobsite_settings_notifications_ticketCreate_template~/g, transformMongoProperties.companyObj.products_jobsite_settings_notifications_ticketCreate_template);

                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_value~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_value);
                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_operator~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_operator);
                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_hours~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_hours);
                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_minutes~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_minutes);
                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_name~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_name);
                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_defaultRegion~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_defaultRegion);

                data = data.replace(/~Companies_products_jobsite_settings_sms~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_sms);
                data = data.replace(/~Companies_products_jobsite_settings_user_customer_code~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_customer_code);
                data = data.replace(/~Companies_products_jobsite_settings_user_customer_name~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_customer_name);
                data = data.replace(/~Companies_products_jobsite_settings_sales~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_sales);
                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_name~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_name);
                data = data.replace(/~Companies_products_jobsite_settings_company_timeZone_defaultRegion~/g, transformMongoProperties.companyObj.products_jobsite_settings_company_timeZone_defaultRegion);

                data = data.replace(/~Companies_products_jobsite_settings_user_customer_code~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_customer_code);
                data = data.replace(/~Companies_products_jobsite_settings_user_customer_name~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_customer_name);
                data = data.replace(/~Companies_products_jobsite_settings_user_timeZone_value~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_timeZone_value);
                data = data.replace(/~Companies_products_jobsite_settings_user_timeZone_operator~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_timeZone_operator);
                data = data.replace(/~Companies_products_jobsite_settings_user_timeZone_hours~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_timeZone_hours);
                data = data.replace(/~Companies_products_jobsite_settings_user_timeZone_minutes~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_timeZone_minutes);
                data = data.replace(/~Companies_products_jobsite_settings_user_permissions_batchWeights~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_permissions_batchWeights);
                data = data.replace(/~Companies_products_jobsite_settings_user_permissions_truckTimes~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_permissions_truckTimes);
                data = data.replace(/~Companies_products_jobsite_settings_user_permissions_pricing~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_permissions_pricing);
                data = data.replace(/~Companies_products_jobsite_settings_user_permissions_mapping~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_permissions_mapping);
                data = data.replace(/~Companies_products_jobsite_settings_user_permissions_futureOrderEmail~/g, transformMongoProperties.companyObj.products_jobsite_settings_permissions_futureOrderEmail);
                data = data.replace(/~Companies_products_jobsite_settings_user_permissions_changeCustomer~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_permissions_changeCustomer);
                data = data.replace(/~Companies_products_jobsite_settings_user_permissions_timeZone~/g, transformMongoProperties.companyObj.products_jobsite_settings_user_permissions_timeZone);

                data = data.replace(/~Companies_products_supply_code~/g, transformMongoProperties.companyObj.products_supply_code);
                data = data.replace(/~Companies_products_supply_settings_user_vendor~/g, transformMongoProperties.companyObj.products_supply_settings_user_vendor);
                data = data.replace(/~Companies_products_supply_settings_user_permissions_configure~/g, transformMongoProperties.companyObj.products_supply_settings_user_permissions_configure);
                data = data.replace(/~Companies_products_supply_settings_user_permissions_plan~/g, transformMongoProperties.companyObj.products_supply_settings_user_permissions_plan);
                data = data.replace(/~Companies_products_supply_settings_user_permissions_alias~/g, transformMongoProperties.companyObj.products_supply_settings_user_permissions_alias);
                data = data.replace(/~Companies_products_supply_settings_user_locations~/g, transformMongoProperties.companyObj.products_supply_settings_user_locations);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_MasterData_EndPointAddress~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_MasterData_EndPointAddress);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_MasterData_Port~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_MasterData_Port);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_MasterData_Type~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_MasterData_Type);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_MasterData_SubType~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_MasterData_SubType);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_SocketEndPoint_EndPointAddress~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_SocketEndPoint_EndPointAddress);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_SocketEndPoint_Port~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_SocketEndPoint_Port);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_SocketEndPoint_Type~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_SocketEndPoint_Type);
                data = data.replace(/~Companies_products_supply_settings_dataEndPoints_SocketEndPoint_SubType~/g, transformMongoProperties.companyObj.products_supply_settings_dataEndPoints_SocketEndPoint_SubType);
                data = data.replace(/~Companies_products_evoadmin_code~/g, transformMongoProperties.companyObj.products_evoadmin_code);
                data = data.replace(/"~Companies_products_evoadmin_settings~"/g, transformMongoProperties.companyObj.products_evoadmin_settings);
            }
            else if (sourceFile.indexOf('notificationDefinitions.json') > -1) {
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
            else if (sourceFile.indexOf('productDefinitions.json') > -1) {
                data = data.replace(/~productDefinitions_commerce_code~/g, transformMongoProperties.productDefinitionObj.commerce_code);
                data = data.replace(/~productDefinitions_commerce_name~/g, transformMongoProperties.productDefinitionObj.commerce_name);
                data = data.replace(/~productDefinitions_commerce_description~/g, transformMongoProperties.productDefinitionObj.commerce_description);
                data = data.replace(/~productDefinitions_commerce_roles~/g, transformMongoProperties.productDefinitionObj.commerce_roles);
                data = data.replace(/~productDefinitions_commerce_roles2~/g, transformMongoProperties.productDefinitionObj.commerce_roles2);
                data = data.replace(/~productDefinitions_commerce_roles3~/g, transformMongoProperties.productDefinitionObj.commerce_roles3);
                data = data.replace(/~productDefinitions_commerce_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.commerce_platforms_desktop);
                data = data.replace(/~productDefinitions_commerce_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.commerce_platforms_mobile);
                data = data.replace(/~productDefinitions_commerce_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.commerce_platforms_tablet);

                data = data.replace(/~productDefinitions_ticket_code~/g, transformMongoProperties.productDefinitionObj.ticket_code);
                data = data.replace(/~productDefinitions_ticket_name~/g, transformMongoProperties.productDefinitionObj.ticket_name);
                data = data.replace(/~productDefinitions_ticket_description~/g, transformMongoProperties.productDefinitionObj.ticket_description);
                data = data.replace(/~productDefinitions_ticket_roles~/g, transformMongoProperties.productDefinitionObj.ticket_roles);
                data = data.replace(/~productDefinitions_ticket_roles2~/g, transformMongoProperties.productDefinitionObj.ticket_roles2);
                data = data.replace(/~productDefinitions_ticket_roles3~/g, transformMongoProperties.productDefinitionObj.ticket_roles3);
                data = data.replace(/~productDefinitions_ticket_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.ticket_platforms_desktop);
                data = data.replace(/~productDefinitions_ticket_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.ticket_platforms_mobile);
                data = data.replace(/~productDefinitions_ticket_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.ticket_platforms_tablet);

                data = data.replace(/~productDefinitions_bulkticket_code~/g, transformMongoProperties.productDefinitionObj.bulkticket_code);
                data = data.replace(/~productDefinitions_bulkticket_name~/g, transformMongoProperties.productDefinitionObj.bulkticket_name);
                data = data.replace(/~productDefinitions_bulkticket_description~/g, transformMongoProperties.productDefinitionObj.bulkticket_description);
                data = data.replace(/~productDefinitions_bulkticket_roles~/g, transformMongoProperties.productDefinitionObj.bulkticket_roles);
                data = data.replace(/~productDefinitions_bulkticket_roles2~/g, transformMongoProperties.productDefinitionObj.bulkticket_roles2);
                data = data.replace(/~productDefinitions_bulkticket_roles3~/g, transformMongoProperties.productDefinitionObj.bulkticket_roles3);
                data = data.replace(/~productDefinitions_bulkticket_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.bulkticket_platforms_desktop);
                data = data.replace(/~productDefinitions_bulkticket_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.bulkticket_platforms_mobile);
                data = data.replace(/~productDefinitions_bulkticket_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.bulkticket_platforms_tablet);

                data = data.replace(/~productDefinitions_jobsite_code~/g, transformMongoProperties.productDefinitionObj.jobsite_code);
                data = data.replace(/~productDefinitions_jobsite_name~/g, transformMongoProperties.productDefinitionObj.jobsite_name);
                data = data.replace(/~productDefinitions_jobsite_description~/g, transformMongoProperties.productDefinitionObj.jobsite_description);
                data = data.replace(/~productDefinitions_jobsite_roles~/g, transformMongoProperties.productDefinitionObj.jobsite_roles);
                data = data.replace(/~productDefinitions_jobsite_roles2~/g, transformMongoProperties.productDefinitionObj.jobsite_roles2);
                data = data.replace(/~productDefinitions_jobsite_roles3~/g, transformMongoProperties.productDefinitionObj.jobsite_roles3);
                data = data.replace(/~productDefinitions_jobsite_roles4~/g, transformMongoProperties.productDefinitionObj.jobsite_roles4);
                data = data.replace(/~productDefinitions_jobsite_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.jobsite_platforms_desktop);
                data = data.replace(/~productDefinitions_jobsite_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.jobsite_platforms_mobile);
                data = data.replace(/~productDefinitions_jobsite_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.jobsite_platforms_tablet);
                data = data.replace(/"~productDefinitions_jobsite_settings~"/g, transformMongoProperties.productDefinitionObj.jobsite_settings);

                data = data.replace(/~productDefinitions_supply_code~/g, transformMongoProperties.productDefinitionObj.supply_code);
                data = data.replace(/~productDefinitions_supply_name~/g, transformMongoProperties.productDefinitionObj.supply_name);
                data = data.replace(/~productDefinitions_supply_description~/g, transformMongoProperties.productDefinitionObj.supply_description);
                data = data.replace(/~productDefinitions_supply_roles_code~/g, transformMongoProperties.productDefinitionObj.supply_roles_code);
                data = data.replace(/~productDefinitions_supply_roles_name~/g, transformMongoProperties.productDefinitionObj.supply_roles_name);
                data = data.replace(/~productDefinitions_supply_roles_category~/g, transformMongoProperties.productDefinitionObj.supply_roles_category);
                data = data.replace(/~productDefinitions_supply_roles_code2~/g, transformMongoProperties.productDefinitionObj.supply_roles_code2);
                data = data.replace(/~productDefinitions_supply_roles_name2~/g, transformMongoProperties.productDefinitionObj.supply_roles_name2);
                data = data.replace(/~productDefinitions_supply_roles_category2~/g, transformMongoProperties.productDefinitionObj.supply_roles_category2);
                data = data.replace(/~productDefinitions_supply_roles_code3~/g, transformMongoProperties.productDefinitionObj.supply_roles_code3);
                data = data.replace(/~productDefinitions_supply_roles_name3~/g, transformMongoProperties.productDefinitionObj.supply_roles_name3);
                data = data.replace(/~productDefinitions_supply_roles_category3~/g, transformMongoProperties.productDefinitionObj.supply_roles_category3);
                data = data.replace(/~productDefinitions_supply_roles_code4~/g, transformMongoProperties.productDefinitionObj.supply_roles_code4);
                data = data.replace(/~productDefinitions_supply_roles_name4~/g, transformMongoProperties.productDefinitionObj.supply_roles_name4);
                data = data.replace(/~productDefinitions_supply_roles_category4~/g, transformMongoProperties.productDefinitionObj.supply_roles_category4);
                data = data.replace(/~productDefinitions_supply_roles_code5~/g, transformMongoProperties.productDefinitionObj.supply_roles_code5);
                data = data.replace(/~productDefinitions_supply_roles_name5~/g, transformMongoProperties.productDefinitionObj.supply_roles_name5);
                data = data.replace(/~productDefinitions_supply_roles_category5~/g, transformMongoProperties.productDefinitionObj.supply_roles_category5);
                data = data.replace(/~productDefinitions_supply_roles_code6~/g, transformMongoProperties.productDefinitionObj.supply_roles_code6);
                data = data.replace(/~productDefinitions_supply_roles_name6~/g, transformMongoProperties.productDefinitionObj.supply_roles_name6);
                data = data.replace(/~productDefinitions_supply_roles_category6~/g, transformMongoProperties.productDefinitionObj.supply_roles_category6);
                data = data.replace(/~productDefinitions_supply_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.supply_platforms_desktop);
                data = data.replace(/~productDefinitions_supply_settings_vendor~/g, transformMongoProperties.productDefinitionObj.supply_settings_vendor);
                data = data.replace(/~productDefinitions_supply_settings_permissions_configure~/g, transformMongoProperties.productDefinitionObj.supply_settings_permissions_configure);
                data = data.replace(/~productDefinitions_supply_settings_permissions_plan~/g, transformMongoProperties.productDefinitionObj.supply_settings_permissions_plan);
                data = data.replace(/~productDefinitions_supply_settings_permissions_alias~/g, transformMongoProperties.productDefinitionObj.supply_settings_permissions_alias);
                data = data.replace(/~productDefinitions_supply_settings_locations~/g, transformMongoProperties.productDefinitionObj.supply_settings_locations);
                data = data.replace(/~productDefinitions_supply_appAdmin~/g, transformMongoProperties.productDefinitionObj.supply_appAdmin);

                data = data.replace(/~productDefinitions_evoadmin_code~/g, transformMongoProperties.productDefinitionObj.evoadmin_code);
                data = data.replace(/~productDefinitions_evoadmin_name~/g, transformMongoProperties.productDefinitionObj.evoadmin_name);
                data = data.replace(/~productDefinitions_evoadmin_description~/g, transformMongoProperties.productDefinitionObj.evoadmin_description);
                data = data.replace(/~productDefinitions_evoadmin_roles~/g, transformMongoProperties.productDefinitionObj.evoadmin_roles);
                data = data.replace(/~productDefinitions_evoadmin_roles2~/g, transformMongoProperties.productDefinitionObj.evoadmin_roles2);
                data = data.replace(/~productDefinitions_evoadmin_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.evoadmin_platforms_desktop);
                data = data.replace(/~productDefinitions_evoadmin_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.evoadmin_platforms_mobile);
                data = data.replace(/~productDefinitions_evoadmin_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.evoadmin_platforms_tablet);
                data = data.replace(/"~productDefinitions_evoadmin_settings~"/g, transformMongoProperties.productDefinitionObj.evoadmin_settings);
            }
            else if (sourceFile.indexOf('templateDefinitions.json') > -1) {
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
            else if (sourceFile.indexOf('users.json') > -1) {
                data = data.replace(/~Users_userName~/g, transformMongoProperties.userObj.userName);
                data = data.replace(/~Users_hash~/g, transformMongoProperties.userObj.hash);
                data = data.replace(/~Users_firstName~/g, transformMongoProperties.userObj.firstName);
                data = data.replace(/~Users_lastName~/g, transformMongoProperties.userObj.lastName);
                data = data.replace(/~Users_email~/g, transformMongoProperties.userObj.email);
                data = data.replace(/~Users_passwordLifetime~/g, transformMongoProperties.userObj.passwordLifetime);
                data = data.replace(/~Users_resetPassword~/g, transformMongoProperties.userObj.resetPassword);
                data = data.replace(/~Users_loginAttempts~/g, transformMongoProperties.userObj.loginAttempts);
                data = data.replace(/~Users_lastLogin~/g, transformMongoProperties.userObj.lastLogin);
                data = data.replace(/~Users_lastLogout~/g, transformMongoProperties.userObj.lastLogout);
                data = data.replace(/~Users_totalLogins~/g, transformMongoProperties.userObj.totalLogins);
                data = data.replace(/~Users_status~/g, transformMongoProperties.userObj.status);
                data = data.replace(/~Users_company~/g, transformMongoProperties.userObj.company);
                data = data.replace(/~Users_type~/g, transformMongoProperties.userObj.type);

                data = data.replace(/~Users_products_commerce_code~/g, transformMongoProperties.userObj.products_commerce_code);
                data = data.replace(/~Users_products_commerce_roles~/g, transformMongoProperties.userObj.products_commerce_roles);
                data = data.replace(/~Users_products_commerce_roles2~/g, transformMongoProperties.userObj.products_commerce_roles2);
                data = data.replace(/~Users_products_commerce_settings_sms~/g, transformMongoProperties.userObj.products_commerce_settings_sms);
                data = data.replace(/~Users_products_commerce_settings_customer_code~/g, transformMongoProperties.userObj.products_commerce_settings_customer_code);
                data = data.replace(/~Users_products_commerce_settings_customer_name~/g, transformMongoProperties.userObj.products_commerce_settings_customer_name);
                data = data.replace(/~Users_products_commerce_settings_sales~/g, transformMongoProperties.userObj.products_commerce_settings_sales);
                data = data.replace(/~Users_products_commerce_settings_timeZone_value~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_value);
                data = data.replace(/~Users_products_commerce_settings_timeZone_operator~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_operator);
                data = data.replace(/~Users_products_commerce_settings_timeZone_hours~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_hours);
                data = data.replace(/~Users_products_commerce_settings_timeZone_minutes~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_minutes);
                data = data.replace(/~Users_products_commerce_settings_permissions_batchWeights~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_batchWeights);
                data = data.replace(/~Users_products_commerce_settings_permissions_truckTimes~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_truckTimes);
                data = data.replace(/~Users_products_commerce_settings_permissions_pricing~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_pricing);
                data = data.replace(/~Users_products_commerce_settings_permissions_mapping~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_mapping);
                data = data.replace(/~Users_products_commerce_settings_permissions_acctInfo~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_acctInfo);
                data = data.replace(/~Users_products_commerce_settings_permissions_docImage~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_docImage);
                data = data.replace(/~Users_products_commerce_settings_permissions_futureOrderEmail~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_futureOrderEmail);
                data = data.replace(/~Users_products_commerce_settings_permissions_changeCustomer~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_changeCustomer);
                data = data.replace(/~Users_products_commerce_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_isAdmin);
                data = data.replace(/~Users_products_commerce_settings_permissions_timeZone~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_timeZone);
                data = data.replace(/~Users_products_commerce_settings_permissions_advancedOrderRequest~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_advancedOrderRequest);
                data = data.replace(/~Users_products_commerce_settings_permissions_reports~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_reports);

                data = data.replace(/~Users_products_ticket_code~/g, transformMongoProperties.userObj.products_ticket_code);
                data = data.replace(/~Users_products_ticket_roles~/g, transformMongoProperties.userObj.products_ticket_roles);
                data = data.replace(/~Users_products_ticket_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_ticket_settings_permissions_isAdmin);
                data = data.replace(/~Users_products_ticket_settings_permissions_legalAdmin~/g, transformMongoProperties.userObj.products_ticket_settings_permissions_legalAdmin);

                data = data.replace(/~Users_products_bulkticket_code~/g, transformMongoProperties.userObj.products_bulkticket_code);
                data = data.replace(/~Users_products_bulkticket_roles~/g, transformMongoProperties.userObj.products_bulkticket_roles);
                data = data.replace(/~Users_products_bulkticket_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_bulkticket_settings_permissions_isAdmin);
                data = data.replace(/~Users_products_bulkticket_settings_permissions_legalAdmin~/g, transformMongoProperties.userObj.products_bulkticket_settings_permissions_legalAdmin);

                data = data.replace(/~Users_products_jobsite_code~/g, transformMongoProperties.userObj.products_jobsite_code);
                data = data.replace(/~Users_products_jobsite_roles~/g, transformMongoProperties.userObj.products_jobsite_roles);
                data = data.replace(/~Users_products_jobsite_roles2~/g, transformMongoProperties.userObj.products_jobsite_roles2);
                data = data.replace(/~Users_products_jobsite_roles3~/g, transformMongoProperties.userObj.products_jobsite_roles3);
                data = data.replace(/~Users_products_jobsite_settings_sms~/g, transformMongoProperties.userObj.products_jobsite_settings_sms);
                data = data.replace(/~Users_products_jobsite_settings_customer_code~/g, transformMongoProperties.userObj.products_jobsite_settings_customer_code);
                data = data.replace(/~Users_products_jobsite_settings_customer_name~/g, transformMongoProperties.userObj.products_jobsite_settings_customer_name);
                data = data.replace(/~Users_products_jobsite_settings_sales~/g, transformMongoProperties.userObj.products_jobsite_settings_sales);
                data = data.replace(/~Users_products_jobsite_settings_timeZone_value~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_value);
                data = data.replace(/~Users_products_jobsite_settings_timeZone_operator~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_operator);
                data = data.replace(/~Users_products_jobsite_settings_timeZone_hours~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_hours);
                data = data.replace(/~Users_products_jobsite_settings_timeZone_minutes~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_minutes);
                data = data.replace(/~Users_products_jobsite_settings_permissions_batchWeights~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_batchWeights);
                data = data.replace(/~Users_products_jobsite_settings_permissions_truckTimes~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_truckTimes);
                data = data.replace(/~Users_products_jobsite_settings_permissions_pricing~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_pricing);
                data = data.replace(/~Users_products_jobsite_settings_permissions_mapping~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_mapping);
                data = data.replace(/~Users_products_jobsite_settings_permissions_acctInfo~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_acctInfo);
                data = data.replace(/~Users_products_jobsite_settings_permissions_docImage~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_docImage);
                data = data.replace(/~Users_products_jobsite_settings_permissions_futureOrderEmail~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_futureOrderEmail);
                data = data.replace(/~Users_products_jobsite_settings_permissions_changeCustomer~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_changeCustomer);
                data = data.replace(/~Users_products_jobsite_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_isAdmin);
                data = data.replace(/~Users_products_jobsite_settings_permissions_timeZone~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_timeZone);
                data = data.replace(/~Users_products_jobsite_settings_permissions_advancedOrderRequest~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_advancedOrderRequest);
                data = data.replace(/~Users_products_jobsite_settings_permissions_reports~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_reports);

                data = data.replace(/~Users_products_evoadmin_code~/g, transformMongoProperties.userObj.products_evoadmin_code);
                data = data.replace(/~Users_products_evoadmin_roles~/g, transformMongoProperties.userObj.products_evoadmin_roles);
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
    },

    /**
     * populateTransformObjects - read from config file or mongo db and populate transform objects
     * @param {Object} config object
     * @returns {Object} transformProperties
     */
    populateTransformObjects: function(config){
        try {
            company.mongo_language_folder = config.input_folder;
            company.code = config.Companies_code;
            company.description = config.Companies_description;
            company.status = config.Companies_status;
            company.settings_communications_email_from_name = config.Companies_settings_communications_email_from_name;
            company.settings_communications_email_from_value = config.Companies_settings_communications_email_from_value;
            company.settings_cloudStore = config.Companies_settings_cloudStore;
            company.customBranding_font_2 = config.Companies_customBranding_font_2;
            company.customBranding_font = config.Companies_customBranding_font;
            company.branding_primary = config.primary_branding_text_color;
            company.branding_secondary = config.Companies_branding_secondary;
            company.branding_text_primary = config.Companies_branding_text_primary;
            company.branding_text_secondary = config.Companies_branding_text_secondary;
            company.branding_logo = config.Companies_branding_logo;
            company.images_smallLogo = config.Companies_images_smallLogo;


            company.products_commerce_version = config.commerceversion;
            company.products_commerce_code = config.Companies_products_commerce_code;
            company.products_commerce_settings_env = config.Companies_products_commerce_settings_env;
            company.products_commerce_settings_systemType = config.Companies_products_commerce_settings_systemType;
            company.products_commerce_settings_documentsConfig = config.Companies_products_commerce_settings_documentsConfig;
            company.products_commerce_settings_edxGatewayConfig_ServerAddress = config.Companies_products_commerce_settings_edxGatewayConfig_ServerAddress;
            company.products_commerce_settings_edxGatewayConfig_Port = config.Companies_products_commerce_settings_edxGatewayConfig_Port;
            company.products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress = config.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_EndPointAddress;
            company.products_commerce_settings_dataEndPoints_LegacyDataService_Port = config.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Port;
            company.products_commerce_settings_dataEndPoints_LegacyDataService_Type = config.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_Type;
            company.products_commerce_settings_dataEndPoints_LegacyDataService_SubType = config.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_SubType;
            company.products_commerce_settings_dataEndPoints_SocketEndPoint_EndPointAddress = config.Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_EndPointAddress;
            company.products_commerce_settings_dataEndPoints_SocketEndPoint_Port = config.Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_Port;
            company.products_commerce_settings_dataEndPoints_SocketEndPoint_Type = config.Companies_products_commerce_settings_dataEndPoints_SocketEndPoint_Type;
            company.products_commerce_settings_dataEndPoints_SocketEndPoint_SubType = config.Companies_products_commerce_settings_dataEndPoints_LegacyDataService_SubType;
            company.products_commerce_settings_futureOrdersEmail_generateTime = config.Companies_products_commerce_settings_futureOrdersEmail_generateTime;
            company.products_commerce_settings_futureOrdersEmail_durationTimePeriod = config.Companies_products_commerce_settings_futureOrdersEmail_durationTimePeriod;
            company.products_commerce_settings_futureOrdersEmail_template = config.Companies_products_commerce_settings_futureOrdersEmail_template;
            company.products_commerce_settings_notifications_orderRequest_template = config.Companies_products_commerce_settings_notifications_orderRequest_template;
            company.products_commerce_settings_notifications_orderRequest_template_to_name = config.Companies_products_commerce_settings_notifications_orderRequest_template_to_name;
            company.products_commerce_settings_notifications_orderRequest_template_to_value = config.Companies_products_commerce_settings_notifications_orderRequest_template_to_value;
            company.products_commerce_settings_notifications_orderCreate_template = config.Companies_products_commerce_settings_notifications_orderCreate_template;
            company.products_commerce_settings_notifications_ticketCreate_template = config.Companies_products_commerce_settings_notifications_ticketCreate_template;
            company.products_commerce_settings_company_advancedOrderRequest = config.Companies_products_commerce_settings_company_advancedOrderRequest;
            company.products_commerce_settings_company_acctInfo = config.Companies_products_commerce_settings_company_acctInfo;
            company.products_commerce_settings_company_docImage = config.Companies_products_commerce_settings_company_docImage;
            company.products_commerce_settings_company_timeZone_value = config.Companies_products_commerce_settings_company_timeZone_value;
            company.products_commerce_settings_company_timeZone_operator = config.Companies_products_commerce_settings_company_timeZone_operator;
            company.products_commerce_settings_company_timeZone_hours = config.Companies_products_commerce_settings_company_timeZone_hours;
            company.products_commerce_settings_company_timeZone_minutes = config.Companies_products_commerce_settings_company_timeZone_minutes;
            company.products_commerce_settings_company_timeZone_name = config.Companies_products_commerce_settings_company_timeZone_name;
            company.products_commerce_settings_company_timeZone_defaultRegion = config.Companies_products_commerce_settings_company_timeZone_defaultRegion;
            company.products_commerce_settings_user_sms = config.Companies_products_commerce_settings_user_sms;
            company.products_commerce_settings_user_customer_code = config.Companies_products_commerce_settings_user_customer_code;
            company.products_commerce_settings_user_customer_name = config.Companies_products_commerce_settings_user_customer_name;
            company.products_commerce_settings_user_sales = config.Companies_products_commerce_settings_user_sales;
            company.products_commerce_settings_user_timeZone_value = config.Companies_products_commerce_settings_user_timeZone_value;
            company.products_commerce_settings_user_timeZone_operator = config.Companies_products_commerce_settings_user_timeZone_operator;
            company.products_commerce_settings_user_timeZone_hours = config.Companies_products_commerce_settings_user_timeZone_hours;
            company.products_commerce_settings_user_timeZone_minutes = config.Companies_products_commerce_settings_user_timeZone_minutes;
            company.products_commerce_settings_user_permissions_batchWeights = config.Companies_products_commerce_settings_user_permissions_batchWeights;
            company.products_commerce_settings_user_permissions_truckTimes = config.Companies_products_commerce_settings_user_permissions_truckTimes;
            company.products_commerce_settings_user_permissions_pricing = config.Companies_products_commerce_settings_user_permissions_pricing;
            company.products_commerce_settings_user_permissions_mapping = config.Companies_products_commerce_settings_user_permissions_mapping;
            company.products_commerce_settings_user_permissions_acctInfo = config.Companies_products_commerce_settings_user_permissions_acctInfo;
            company.products_commerce_settings_user_permissions_docImage = config.Companies_products_commerce_settings_user_permissions_docImage;
            company.products_commerce_settings_user_permissions_futureOrderEmail = config.Companies_products_commerce_settings_user_permissions_futureOrderEmail;
            company.products_commerce_settings_user_permissions_changeCustomer = config.Companies_products_commerce_settings_user_permissions_changeCustomer;
            company.products_commerce_settings_user_permissions_isAdmin = config.Companies_products_commerce_settings_user_permissions_isAdmin;
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            company.products_commerce_settings_documentsConfig_providerAddress = config.Companies_products_commerce_settings_documentsConfig_providerAddress;
            company.products_commerce_settings_documentsConfig_documentsUseChecksum = config.Companies_products_commerce_settings_documentsConfig_documentsUseChecksum;
            company.products_commerce_settings_documentsConfig_documents_ticketUrl = config.Companies_products_commerce_settings_documentsConfig_documents_ticketUrl;
            company.products_commerce_settings_documentsConfig_documents_invoiceUrl = config.Companies_products_commerce_settings_documentsConfig_documents_invoiceUrl;
            company.products_commerce_settings_documentsConfig_documents_invoiceByDateUrl = config.Companies_products_commerce_settings_documentsConfig_documents_invoiceByDateUrl;
            company.products_commerce_settings_documentsConfig_documents_invoiceByProjectByDateUrl = config.Companies_products_commerce_settings_documentsConfig_documents_invoiceByProjectByDateUrl;
            company.products_commerce_settings_documentsConfig_documents_checkUrl = config.Companies_products_commerce_settings_documentsConfig_documents_checkUrl;
            company.products_commerce_settings_documentsConfig_documents_statementsUrl = config.Companies_products_commerce_settings_documentsConfig_documents_statementsUrl;
            company.products_commerce_settings_documentsConfig_documents_eTicketUrl = config.Companies_products_commerce_settings_documentsConfig_documents_eTicketUrl;
            company.products_commerce_settings_documentsConfig_documents_batchWeightsUrl = config.Companies_products_commerce_settings_documentsConfig_documents_batchWeightsUrl;

            company.products_ticket_code = config.Companies_products_ticket_code;
            company.products_ticket_settings_savePdf = config.Companies_products_ticket_settings_savePdf;
            company.products_ticket_settings_systemType_hauler = config.Companies_products_ticket_settings_systemType_hauler;
            company.products_ticket_settings_systemType_ticket_concrete = config.Companies_products_ticket_settings_systemType_ticket_concrete;
            company.products_ticket_settings_systemType_ticket_aggregate = config.Companies_products_ticket_settings_systemType_ticket_aggregate;
            company.products_ticket_settings_dataEndPoints_MobileTicketService_EndPointAddress = config.Companies_products_ticket_settings_dataEndPoints_MobileTicketService_EndPointAddress;
            company.products_ticket_settings_dataEndPoints_MobileTicketService_Port = config.Companies_products_ticket_settings_dataEndPoints_MobileTicketService_Port;
            company.products_ticket_settings_dataEndPoints_MobileTicketService_Type = config.Companies_products_ticket_settings_dataEndPoints_MobileTicketService_Type;
            company.products_ticket_settings_dataEndPoints_MobileTicketService_SubType = config.Companies_products_ticket_settings_dataEndPoints_MobileTicketService_SubType;
            company.products_ticket_settings_dataEndPoints_MobileTicketService_context = config.Companies_products_ticket_settings_dataEndPoints_MobileTicketService_context;
            company.products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress = config.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress;
            company.products_ticket_settings_dataEndPoints_EDXTicketService_Port = config.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Port;
            company.products_ticket_settings_dataEndPoints_EDXTicketService_Type = config.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_Type;
            company.products_ticket_settings_dataEndPoints_EDXTicketService_SubType = config.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_SubType;
            company.products_ticket_settings_dataEndPoints_EDXTicketService_context = config.Companies_products_ticket_settings_dataEndPoints_EDXTicketService_context;
            company.products_ticket_settings_company_timeZone_value =config.Companies_products_ticket_settings_company_timeZone_value;
            company.products_ticket_settings_company_timeZone_operator = config.Companies_products_ticket_settings_company_timeZone_operator;
            company.products_ticket_settings_company_timeZone_hours = config.Companies_products_ticket_settings_company_timeZone_hours;
            company.products_ticket_settings_company_timeZone_minutes = config.Companies_products_ticket_settings_company_timeZone_minutes;
            company.products_ticket_settings_company_supportEmail = config.Companies_products_ticket_settings_company_supportEmail;
            company.products_ticket_settings_templates_type = config.Companies_products_ticket_settings_templates_type;
            company.products_ticket_settings_templates_name = config.Companies_products_ticket_settings_templates_name;
            company.products_ticket_settings_templates_body = config.Companies_products_ticket_settings_templates_body;
            company.products_ticket_settings_templates_subject = config.Companies_products_ticket_settings_templates_subject;
            company.products_ticket_settings_templates_fileName = config.Companies_products_ticket_settings_templates_fileName;
            company.products_ticket_settings_templates_formatter = config.Companies_products_ticket_settings_templates_formatter;
            company.products_ticket_settings_templates_type2 = config.Companies_products_ticket_settings_templates_type2;
            company.products_ticket_settings_templates_name2 = config.Companies_products_ticket_settings_templates_name2;
            company.products_ticket_settings_templates_body2 = config.Companies_products_ticket_settings_templates_body2;
            company.products_ticket_settings_templates_subject2 = config.Companies_products_ticket_settings_templates_subject2;
            company.products_ticket_settings_templates_fileName2 = config.Companies_products_ticket_settings_templates_fileName2;
            company.products_ticket_settings_templates_formatter2 = config.Companies_products_ticket_settings_templates_formatter2;

            company.products_bulkticket_code = config.Companies_products_bulkticket_code;
            company.products_bulkticket_settings_savePdf = config.Companies_products_bulkticket_settings_savePdf;
            company.products_bulkticket_settings_systemType_hauler = config.Companies_products_bulkticket_settings_systemType_hauler;
            company.products_bulkticket_settings_systemType_bulkticket_concrete = config.Companies_products_bulkticket_settings_systemType_bulkticket_concrete;
            company.products_bulkticket_settings_systemType_bulkticket_aggregate = config.Companies_products_bulkticket_settings_systemType_bulkticket_aggregate;
            company.products_bulkticket_settings_dataEndPoints_MobileTicketService_EndPointAddress = config.Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_EndPointAddress;
            company.products_bulkticket_settings_dataEndPoints_MobileTicketService_Port = config.Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_Port;
            company.products_bulkticket_settings_dataEndPoints_MobileTicketService_Type = config.Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_Type;
            company.products_bulkticket_settings_dataEndPoints_MobileTicketService_SubType = config.Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_SubType;
            company.products_bulkticket_settings_dataEndPoints_MobileTicketService_context = config.Companies_products_bulkticket_settings_dataEndPoints_MobileTicketService_context;
            company.products_bulkticket_settings_dataEndPoints_EDXTicketService_EndPointAddress = config.Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_EndPointAddress;
            company.products_bulkticket_settings_dataEndPoints_EDXTicketService_Port = config.Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_Port;
            company.products_bulkticket_settings_dataEndPoints_EDXTicketService_Type = config.Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_Type;
            company.products_bulkticket_settings_dataEndPoints_EDXTicketService_SubType = config.Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_SubType;
            company.products_bulkticket_settings_dataEndPoints_EDXTicketService_context = config.Companies_products_bulkticket_settings_dataEndPoints_EDXTicketService_context;
            company.products_bulkticket_settings_company_timeZone_value =config.Companies_products_bulkticket_settings_company_timeZone_value;
            company.products_bulkticket_settings_company_timeZone_operator = config.Companies_products_bulkticket_settings_company_timeZone_operator;
            company.products_bulkticket_settings_company_timeZone_hours = config.Companies_products_bulkticket_settings_company_timeZone_hours;
            company.products_bulkticket_settings_company_timeZone_minutes = config.Companies_products_bulkticket_settings_company_timeZone_minutes;
            company.products_bulkticket_settings_company_supportEmail = config.Companies_products_bulkticket_settings_company_supportEmail;
            company.products_bulkticket_settings_templates_type = config.Companies_products_bulkticket_settings_templates_type;
            company.products_bulkticket_settings_templates_name = config.Companies_products_bulkticket_settings_templates_name;
            company.products_bulkticket_settings_templates_body = config.Companies_products_bulkticket_settings_templates_body;
            company.products_bulkticket_settings_templates_subject = config.Companies_products_bulkticket_settings_templates_subject;
            company.products_bulkticket_settings_templates_fileName = config.Companies_products_bulkticket_settings_templates_fileName;
            company.products_bulkticket_settings_templates_formatter = config.Companies_products_bulkticket_settings_templates_formatter;
            company.products_bulkticket_settings_templates_type2 = config.Companies_products_bulkticket_settings_templates_type2;
            company.products_bulkticket_settings_templates_name2 = config.Companies_products_bulkticket_settings_templates_name2;
            company.products_bulkticket_settings_templates_body2 = config.Companies_products_bulkticket_settings_templates_body2;
            company.products_bulkticket_settings_templates_subject2 = config.Companies_products_bulkticket_settings_templates_subject2;
            company.products_bulkticket_settings_templates_fileName2 = config.Companies_products_bulkticket_settings_templates_fileName2;
            company.products_bulkticket_settings_templates_formatter2 = config.Companies_products_bulkticket_settings_templates_formatter2;

            company.products_jobsite_code = config.Companies_products_jobsite_code;
            company.products_jobsite_settings_systemType = config.Companies_products_jobsite_settings_systemType;
            company.products_jobsite_settings_documentsConfig = config.Companies_products_jobsite_settings_documentsConfig;
            company.products_jobsite_settings_edxGatewayConfig_ServerAddress = config.Companies_products_jobsite_settings_edxGatewayConfig_ServerAddress;
            company.products_jobsite_settings_edxGatewayConfig_Port = config.Companies_products_jobsite_settings_edxGatewayConfig_Port;
            company.products_jobsite_settings_dataEndPoints_DataService_EndPointAddress = config.Companies_products_jobsite_settings_dataEndPoints_DataService_EndPointAddress;
            company.products_jobsite_settings_dataEndPoints_DataService_Port = config.Companies_products_jobsite_settings_dataEndPoints_DataService_Port;
            company.products_jobsite_settings_dataEndPoints_DataService_Type = config.Companies_products_jobsite_settings_dataEndPoints_DataService_Type;
            company.products_jobsite_settings_dataEndPoints_DataService_SubType = config.Companies_products_jobsite_settings_dataEndPoints_DataService_SubType;
            company.products_jobsite_settings_dataEndPoints_SocketEndPoint_EndPointAddress = config.Companies_products_jobsite_settings_dataEndPoints_SocketEndPoint_EndPointAddress;
            company.products_jobsite_settings_dataEndPoints_SocketEndPoint_Port = config.Companies_products_jobsite_settings_dataEndPoints_DataService_Port;
            company.products_jobsite_settings_dataEndPoints_SocketEndPoint_Type = config.Companies_products_jobsite_settings_dataEndPoints_DataService_Type;
            company.products_jobsite_settings_dataEndPoints_SocketEndPoint_SubType = config.Companies_products_jobsite_settings_dataEndPoints_DataService_SubType;
            company.products_jobsite_settings_futureOrdersEmail_generateTime = config.Companies_products_jobsite_settings_futureOrdersEmail_generateTime;
            company.products_jobsite_settings_futureOrdersEmail_durationTimePeriod = config.Companies_products_jobsite_settings_futureOrdersEmail_durationTimePeriod;
            company.products_jobsite_settings_futureOrdersEmail_template = config.Companies_products_jobsite_settings_futureOrdersEmail_template;
            company.products_jobsite_settings_notifications_orderRequest_template = config.Companies_products_jobsite_settings_notifications_orderRequest_template;
            company.products_jobsite_settings_notifications_orderRequest_template_to_name = config.Companies_products_jobsite_settings_notifications_orderRequest_template_to_name;
            company.products_jobsite_settings_notifications_orderRequest_template_to_value = config.Companies_products_jobsite_settings_notifications_orderRequest_template_to_value;
            company.products_jobsite_settings_notifications_orderCreate_template = config.Companies_products_jobsite_settings_notifications_orderCreate_template;
            company.products_jobsite_settings_notifications_ticketCreate_template = config.Companies_products_jobsite_settings_notifications_ticketCreate_template;
            company.products_jobsite_settings_company_timeZone_value = config.Companies_products_jobsite_settings_company_timeZone_value;
            company.products_jobsite_settings_company_timeZone_operator = config.Companies_products_jobsite_settings_company_timeZone_operator;
            company.products_jobsite_settings_company_timeZone_hours = config.Companies_products_jobsite_settings_company_timeZone_hours;
            company.products_jobsite_settings_company_timeZone_minutes = config.Companies_products_jobsite_settings_company_timeZone_minutes;
            company.products_jobsite_settings_company_timeZone_name = config.Companies_products_jobsite_settings_company_timeZone_name;
            company.products_jobsite_settings_company_timeZone_defaultRegion = config.Companies_products_jobsite_settings_company_timeZone_defaultRegion;
            company.products_jobsite_settings_user_sms = config.Companies_products_jobsite_settings_user_sms;
            company.products_jobsite_settings_user_sales = config.Companies_products_jobsite_settings_user_sales;
            company.products_jobsite_settings_user_customer_code = config.Companies_products_jobsite_settings_user_customer_code;
            company.products_jobsite_settings_user_customer_name = config.Companies_products_jobsite_settings_user_customer_name;
            company.products_jobsite_settings_user_timeZone_value = config.Companies_products_jobsite_settings_user_timeZone_value;
            company.products_jobsite_settings_user_timeZone_operator =config.Companies_products_jobsite_settings_user_timeZone_operator;
            company.products_jobsite_settings_user_timeZone_hours = config.Companies_products_jobsite_settings_user_timeZone_hours;
            company.products_jobsite_settings_user_timeZone_minutes = config.Companies_products_jobsite_settings_user_timeZone_minutes;
            company.products_jobsite_settings_user_permissions_batchWeights = config.Companies_products_jobsite_settings_user_permissions_batchWeights;
            company.products_jobsite_settings_user_permissions_truckTimes = config.Companies_products_jobsite_settings_user_permissions_truckTimes;
            company.products_jobsite_settings_user_permissions_pricing = config.Companies_products_jobsite_settings_user_permissions_pricing;
            company.products_jobsite_settings_user_permissions_mapping = config.Companies_products_jobsite_settings_user_permissions_mapping;
            company.products_jobsite_settings_user_permissions_futureOrderEmail = config.Companies_products_jobsite_settings_user_permissions_futureOrderEmail;
            company.products_jobsite_settings_user_permissions_changeCustomer = config.Companies_products_jobsite_settings_user_permissions_changeCustomer;
            company.products_jobsite_settings_user_permissions_timeZone = config.Companies_products_jobsite_settings_user_permissions_timeZone;

            company.products_supply_code = config.Companies_products_supply_code;
            company.products_supply_settings_user_vendor = config.Companies_products_supply_settings_user_vendor;
            company.products_supply_settings_user_permissions_configure = config.Companies_products_supply_settings_user_permissions_configure;
            company.products_supply_settings_user_permissions_plan = config.Companies_products_supply_settings_user_permissions_plan;
            company.products_supply_settings_user_permissions_alias = config.Companies_products_supply_settings_user_permissions_alias;
            company.products_supply_settings_user_locations = config.Companies_products_supply_settings_user_locations;
            company.products_supply_settings_dataEndPoints_MasterData_EndPointAddress = config.Companies_products_supply_settings_dataEndPoints_MasterData_EndPointAddress;
            company.products_supply_settings_dataEndPoints_MasterData_Port = config.Companies_products_supply_settings_dataEndPoints_MasterData_Port;
            company.products_supply_settings_dataEndPoints_MasterData_Type = config.Companies_products_supply_settings_dataEndPoints_MasterData_Type;
            company.products_supply_settings_dataEndPoints_MasterData_SubType = config.Companies_products_supply_settings_dataEndPoints_MasterData_SubType;
            company.products_supply_settings_dataEndPoints_SocketEndPoint_EndPointAddress = config.Companies_products_supply_settings_dataEndPoints_SocketEndPoint_EndPointAddress;
            company.products_supply_settings_dataEndPoints_SocketEndPoint_Port = config.Companies_products_supply_settings_dataEndPoints_SocketEndPoint_Port;
            company.products_supply_settings_dataEndPoints_SocketEndPoint_Type = config.Companies_products_supply_settings_dataEndPoints_SocketEndPoint_Type;
            company.products_supply_settings_dataEndPoints_SocketEndPoint_SubType = config.Companies_products_supply_settings_dataEndPoints_SocketEndPoint_SubType;

            company.products_evoadmin_code = config.Companies_products_evoadmin_code;
            company.products_evoadmin_settings = config.Companies_products_evoadmin_settings;

            notificationDefinition.mongo_language_folder = config.mongo_language_folder;

            notificationDefinition.order_create_company = config.notificationDefinitions_order_create_company;
            notificationDefinition.order_create_name = config.notificationDefinitions_order_create_name;
            notificationDefinition.order_create_bod_name = config.notificationDefinitions_order_create_bod_name;
            notificationDefinition.order_create_bod_filterDefinitions_name = config.notificationDefinitions_order_create_bod_filterDefinitions_name;
            notificationDefinition.order_create_bod_filterDefinitions_type = config.notificationDefinitions_order_create_bod_filterDefinitions_type;
            notificationDefinition.order_create_bod_filterDefinitions_expression = config.notificationDefinitions_order_create_bod_filterDefinitions_expression;
            notificationDefinition.order_create_bod_filterDefinitions_name2 = config.notificationDefinitions_order_create_bod_filterDefinitions_name2;
            notificationDefinition.order_create_bod_filterDefinitions_type2 = config.notificationDefinitions_order_create_bod_filterDefinitions_type2;
            notificationDefinition.order_create_bod_filterDefinitions_expression2 = config.notificationDefinitions_order_create_bod_filterDefinitions_expression2;
            notificationDefinition.order_create_bod_contextDefinitions = config.notificationDefinitions_order_create_bod_contextDefinitions;
            notificationDefinition.order_create_context = config.notificationDefinitions_order_create_context;
            notificationDefinition.order_create_context2 = config.notificationDefinitions_order_create_context2;
            notificationDefinition.order_create_context3 = config.notificationDefinitions_order_create_context3;
            notificationDefinition.order_create_transports_type = config.notificationDefinitions_order_create_transports_type;
            notificationDefinition.order_create_transports_name = config.notificationDefinitions_order_create_transports_name;
            notificationDefinition.order_create_transports_grouped = config.notificationDefinitions_order_create_transports_grouped;
            notificationDefinition.order_create_transports_template_name = config.notificationDefinitions_order_create_transports_template_name;
            notificationDefinition.order_create_transports_type2 = config.notificationDefinitions_order_create_transports_type2;
            notificationDefinition.order_create_transports_name2 = config.notificationDefinitions_order_create_transports_name2;
            notificationDefinition.order_create_transports_grouped2 = config.notificationDefinitions_order_create_transports_grouped2;
            notificationDefinition.order_create_transports_template_name2 = config.notificationDefinitions_order_create_transports_template_name2

            notificationDefinition.ticket_create_company = config.notificationDefinitions_ticket_create_company;
            notificationDefinition.ticket_create_name = config.notificationDefinitions_ticket_create_name;
            notificationDefinition.ticket_create_bod_name = config.notificationDefinitions_ticket_create_bod_name;
            notificationDefinition.ticket_create_bod_filterDefinitions_name = config.notificationDefinitions_ticket_create_bod_filterDefinitions_name;
            notificationDefinition.ticket_create_bod_filterDefinitions_type = config.notificationDefinitions_ticket_create_bod_filterDefinitions_type;
            notificationDefinition.ticket_create_bod_filterDefinitions_expression = config.notificationDefinitions_ticket_create_bod_filterDefinitions_expression;
            notificationDefinition.ticket_create_bod_contextDefinitions = config.notificationDefinitions_ticket_create_bod_contextDefinitions;
            notificationDefinition.ticket_create_context = config.notificationDefinitions_ticket_create_context;
            notificationDefinition.ticket_create_context2 = config.notificationDefinitions_ticket_create_context2;
            notificationDefinition.ticket_create_context3 = config.notificationDefinitions_ticket_create_context3;
            notificationDefinition.ticket_create_transports_type = config.notificationDefinitions_ticket_create_transports_type;
            notificationDefinition.ticket_create_transports_name = config.notificationDefinitions_ticket_create_transports_name;
            notificationDefinition.ticket_create_transports_grouped = config.notificationDefinitions_ticket_create_transports_grouped;
            notificationDefinition.ticket_create_transports_template_name = config.notificationDefinitions_ticket_create_transports_template_name;
            notificationDefinition.ticket_create_transports_type2 = config.notificationDefinitions_ticket_create_transports_type2;
            notificationDefinition.ticket_create_transports_name2 = config.notificationDefinitions_ticket_create_transports_name2;
            notificationDefinition.ticket_create_transports_grouped2 = config.notificationDefinitions_ticket_create_transports_grouped2;
            notificationDefinition.ticket_create_transports_template_name2 = config.notificationDefinitions_ticket_create_transports_template_name2;

            productDefinition.mongo_language_folder = config.mongo_language_folder;

            productDefinition.commerce_code = config.productDefinitions_commerce_code;
            productDefinition.commerce_name = config.productDefinitions_commerce_name;
            productDefinition.commerce_description = config.productDefinitions_commerce_description;
            productDefinition.commerce_roles = config.productDefinitions_commerce_roles;
            productDefinition.commerce_roles2 = config.productDefinitions_commerce_roles2;
            productDefinition.commerce_roles3 = config.productDefinitions_commerce_roles3;
            productDefinition.commerce_platforms_desktop = config.productDefinitions_commerce_platforms_desktop;
            productDefinition.commerce_platforms_mobile = config.productDefinitions_commerce_platforms_mobile;
            productDefinition.commerce_platforms_tablet = config.productDefinitions_commerce_platforms_tablet;
            productDefinition.commerce_settings = config.productDefinitions_commerce_settings;

            productDefinition.ticket_code = config.productDefinitions_ticket_code;
            productDefinition.ticket_name = config.productDefinitions_ticket_name;
            productDefinition.ticket_description = config.productDefinitions_ticket_description;
            productDefinition.ticket_roles = config.productDefinitions_ticket_roles;
            productDefinition.ticket_roles2 = config.productDefinitions_ticket_roles2;
            productDefinition.ticket_roles3 = config.productDefinitions_ticket_roles3;
            productDefinition.ticket_platforms_desktop = config.productDefinitions_ticket_platforms_desktop;
            productDefinition.ticket_platforms_mobile = config.productDefinitions_ticket_platforms_mobile;
            productDefinition.ticket_platforms_tablet = config.productDefinitions_ticket_platforms_tablet;
            productDefinition.ticket_settings = config.productDefinitions_ticket_settings;

            productDefinition.bulkticket_code = config.productDefinitions_bulkticket_code;
            productDefinition.bulkticket_name = config.productDefinitions_bulkticket_name;
            productDefinition.bulkticket_description = config.productDefinitions_bulkticket_description;
            productDefinition.bulkticket_roles = config.productDefinitions_bulkticket_roles;
            productDefinition.bulkticket_roles2 = config.productDefinitions_bulkticket_roles2;
            productDefinition.bulkticket_roles3 = config.productDefinitions_bulkticket_roles3;
            productDefinition.bulkticket_platforms_desktop = config.productDefinitions_bulkticket_platforms_desktop;
            productDefinition.bulkticket_platforms_mobile = config.productDefinitions_bulkticket_platforms_mobile;
            productDefinition.bulkticket_platforms_tablet = config.productDefinitions_bulkticket_platforms_tablet;
            productDefinition.bulkticket_settings = config.productDefinitions_bulkticket_settings;

            productDefinition.jobsite_code = config.productDefinitions_jobsite_code;
            productDefinition.jobsite_name = config.productDefinitions_jobsite_name;
            productDefinition.jobsite_description = config.productDefinitions_jobsite_description;
            productDefinition.jobsite_roles = config.productDefinitions_jobsite_roles;
            productDefinition.jobsite_roles2 = config.productDefinitions_jobsite_roles2;
            productDefinition.jobsite_roles3 = config.productDefinitions_jobsite_roles3;
            productDefinition.jobsite_roles4 = config.productDefinitions_jobsite_roles4;
            productDefinition.jobsite_platforms_desktop = config.productDefinitions_jobsite_platforms_desktop;
            productDefinition.jobsite_platforms_mobile = config.productDefinitions_jobsite_platforms_mobile;
            productDefinition.jobsite_platforms_tablet = config.productDefinitions_jobsite_platforms_tablet;
            productDefinition.jobsite_settings = config.productDefinitions_jobsite_settings;

            productDefinition.supply_code = config.productDefinitions_supply_code;
            productDefinition.supply_name = config.productDefinitions_supply_name;
            productDefinition.supply_description = config.productDefinitions_supply_description;
            productDefinition.supply_roles_code = config.productDefinitions_supply_roles_code;
            productDefinition.supply_roles_name = config.productDefinitions_supply_roles_name;
            productDefinition.supply_roles_category = config.productDefinitions_supply_roles_category;
            productDefinition.supply_roles_code2 = config.productDefinitions_supply_roles_code2;
            productDefinition.supply_roles_name2 = config.productDefinitions_supply_roles_name2;
            productDefinition.supply_roles_category2 = config.productDefinitions_supply_roles_category2;
            productDefinition.supply_roles_code3 = config.productDefinitions_supply_roles_code3;
            productDefinition.supply_roles_name3 = config.productDefinitions_supply_roles_name3;
            productDefinition.supply_roles_category3 = config.productDefinitions_supply_roles_category3;
            productDefinition.supply_roles_code4 = config.productDefinitions_supply_roles_code4;
            productDefinition.supply_roles_name4 = config.productDefinitions_supply_roles_name4;
            productDefinition.supply_roles_category4 = config.productDefinitions_supply_roles_category4;
            productDefinition.supply_roles_code5 = config.productDefinitions_supply_roles_code5;
            productDefinition.supply_roles_name5 = config.productDefinitions_supply_roles_name5;
            productDefinition.supply_roles_category5 = config.productDefinitions_supply_roles_category5;
            productDefinition.supply_roles_code6 = config.productDefinitions_supply_roles_code6;
            productDefinition.supply_roles_name6 = config.productDefinitions_supply_roles_name6;
            productDefinition.supply_roles_category6 = config.productDefinitions_supply_roles_category6;
            productDefinition.supply_platforms_desktop = config.productDefinitions_supply_platforms_desktop;
            productDefinition.supply_settings_vendor = config.productDefinitions_supply_settings_vendor;
            productDefinition.supply_settings_permissions_configure = config.productDefinitions_supply_settings_permissions_configure;
            productDefinition.supply_settings_permissions_plan = config.productDefinitions_supply_settings_permissions_plan;
            productDefinition.supply_settings_permissions_alias = config.productDefinitions_supply_settings_permissions_alias;
            productDefinition.supply_settings_locations = config.productDefinitions_supply_settings_locations;
            productDefinition.supply_appAdmin = config.productDefinitions_supply_appAdmin;

            productDefinition.evoadmin_code = config.productDefinitions_evoadmin_code;
            productDefinition.evoadmin_name = config.productDefinitions_evoadmin_name;
            productDefinition.evoadmin_description = config.productDefinitions_evoadmin_description;
            productDefinition.evoadmin_roles = config.productDefinitions_evoadmin_roles;
            productDefinition.evoadmin_roles2 = config.productDefinitions_evoadmin_roles2;
            productDefinition.evoadmin_platforms_desktop = config.productDefinitions_evoadmin_platforms_desktop;
            productDefinition.evoadmin_platforms_mobile = config.productDefinitions_evoadmin_platforms_mobile;
            productDefinition.evoadmin_platforms_tablet = config.productDefinitions_evoadmin_platforms_tablet;
            productDefinition.evoadmin_settings = config.productDefinitions_evoadmin_settings;

            templateDefinition.mongo_language_folder = config.mongo_language_folder;

            templateDefinition.order_company = config.templateDefinitions_order_company;
            templateDefinition.order_name = config.templateDefinitions_order_name;
            templateDefinition.order_transport_type = config.templateDefinitions_order_transport_type;
            templateDefinition.order_transport_name = config.templateDefinitions_order_transport_name;
            templateDefinition.order_transport_grouped = config.templateDefinitions_order_transport_grouped;
            templateDefinition.order_bod_name = config.templateDefinitions_order_bod_name;
            templateDefinition.order_formatter = config.templateDefinitions_order_formatter;
            templateDefinition.order_subject_type = config.templateDefinitions_order_subject_type;
            templateDefinition.order_subject_value = config.templateDefinitions_order_subject_value;
            templateDefinition.order_content_type = config.templateDefinitions_order_content_type;
            templateDefinition.order_content_value = config.templateDefinitions_order_content_value;
            templateDefinition.order_content_attachments_fileName = config.templateDefinitions_order_content_attachments_fileName;
            templateDefinition.order_content_attachments_filePath = config.templateDefinitions_order_content_attachments_filePath;
            templateDefinition.order_content_attachments_cid = config.templateDefinitions_order_content_attachments_cid;
            templateDefinition.order_active = config.templateDefinitions_order_active;

            templateDefinition.order_sms_company = config.templateDefinitions_order_sms_company;
            templateDefinition.order_sms_name = config.templateDefinitions_order_sms_name;
            templateDefinition.order_sms_transport_type = config.templateDefinitions_order_sms_transport_type;
            templateDefinition.order_sms_transport_name = config.templateDefinitions_order_sms_transport_name;
            templateDefinition.order_sms_transport_grouped = config.templateDefinitions_order_sms_transport_grouped;
            templateDefinition.order_sms_bod_name = config.templateDefinitions_order_sms_bod_name;
            templateDefinition.order_sms_formatter = config.templateDefinitions_order_sms_formatter;
            templateDefinition.order_sms_subject_type = config.templateDefinitions_order_sms_subject_type;
            templateDefinition.order_sms_subject_value = config.templateDefinitions_order_sms_subject_value;
            templateDefinition.order_sms_content_type = config.templateDefinitions_order_sms_content_type;
            templateDefinition.order_sms_content_value = config.templateDefinitions_order_sms_content_value;
            templateDefinition.order_sms_active = config.templateDefinitions_order_sms_active;

            templateDefinition.ticket_company = config.templateDefinitions_ticket_company;
            templateDefinition.ticket_name = config.templateDefinitions_ticket_name;
            templateDefinition.ticket_transport_type = config.templateDefinitions_ticket_transport_type;
            templateDefinition.ticket_transport_name = config.templateDefinitions_ticket_transport_name;
            templateDefinition.ticket_transport_grouped = config.templateDefinitions_ticket_transport_grouped;
            templateDefinition.ticket_bod_name = config.templateDefinitions_ticket_bod_name;
            templateDefinition.ticket_formatter = config.templateDefinitions_ticket_formatter;
            templateDefinition.ticket_subject_type = config.templateDefinitions_ticket_subject_type;
            templateDefinition.ticket_subject_value = config.templateDefinitions_ticket_subject_value;
            templateDefinition.ticket_content_type = config.templateDefinitions_ticket_content_type;
            templateDefinition.ticket_content_value = config.templateDefinitions_ticket_content_value;
            templateDefinition.ticket_content_attachments_fileName = config.templateDefinitions_ticket_content_attachments_fileName;
            templateDefinition.ticket_content_attachments_filePath = config.templateDefinitions_ticket_content_attachments_filePath;
            templateDefinition.ticket_content_attachments_cid = config.templateDefinitions_ticket_content_attachments_cid;
            templateDefinition.ticket_active = config.templateDefinitions_ticket_active;

            templateDefinition.ticket_sms_company = config.templateDefinitions_ticket_sms_company;
            templateDefinition.ticket_sms_name = config.templateDefinitions_ticket_sms_name;
            templateDefinition.ticket_sms_transport_type = config.templateDefinitions_ticket_sms_transport_type;
            templateDefinition.ticket_sms_transport_name = config.templateDefinitions_ticket_sms_transport_name;
            templateDefinition.ticket_sms_transport_grouped = config.templateDefinitions_ticket_sms_transport_grouped;
            templateDefinition.ticket_sms_bod_name = config.templateDefinitions_ticket_sms_bod_name;
            templateDefinition.ticket_sms_formatter = config.templateDefinitions_ticket_sms_formatter;
            templateDefinition.ticket_sms_subject_type = config.templateDefinitions_ticket_sms_subject_type;
            templateDefinition.ticket_sms_subject_value = config.templateDefinitions_ticket_sms_subject_value;
            templateDefinition.ticket_sms_content_type = config.templateDefinitions_ticket_sms_content_type;
            templateDefinition.ticket_sms_content_value = config.templateDefinitions_ticket_sms_content_value;
            templateDefinition.ticket_sms_active = config.templateDefinitions_ticket_sms_active;

            templateDefinition.reorder_company = config.templateDefinitions_reorder_company;
            templateDefinition.reorder_name = config.templateDefinitions_reorder_name;
            templateDefinition.reorder_transport_type = config.templateDefinitions_reorder_transport_type;
            templateDefinition.reorder_transport_name = config.templateDefinitions_reorder_transport_name;
            templateDefinition.reorder_transport_grouped = config.templateDefinitions_reorder_transport_grouped;
            templateDefinition.reorder_bod_name = config.templateDefinitions_reorder_bod_name;
            templateDefinition.reorder_formatter = config.templateDefinitions_reorder_formatter;
            templateDefinition.reorder_subject_type = config.templateDefinitions_reorder_subject_type;
            templateDefinition.reorder_subject_value = config.templateDefinitions_reorder_subject_value;
            templateDefinition.reorder_content_type = config.templateDefinitions_reorder_content_type;
            templateDefinition.reorder_content_value = config.templateDefinitions_reorder_content_value;
            templateDefinition.reorder_content_attachments_fileName = config.templateDefinitions_reorder_content_attachments_fileName;
            templateDefinition.reorder_content_attachments_filePath = config.templateDefinitions_reorder_content_attachments_filePath;
            templateDefinition.reorder_content_attachments_cid = config.templateDefinitions_reorder_content_attachments_cid;
            templateDefinition.reorder_active = config.templateDefinitions_reorder_active;

            templateDefinition.future_order_company = config.templateDefinitions_future_order_company;
            templateDefinition.future_order_name = config.templateDefinitions_future_order_name;
            templateDefinition.future_order_transport_type = config.templateDefinitions_future_order_transport_type;
            templateDefinition.future_order_transport_name = config.templateDefinitions_future_order_transport_name;
            templateDefinition.future_order_transport_grouped = config.templateDefinitions_future_order_transport_grouped;
            templateDefinition.future_order_bod_name = config.templateDefinitions_future_order_bod_name;
            templateDefinition.future_order_formatter = config.templateDefinitions_future_order_formatter;
            templateDefinition.future_order_subject_type = config.templateDefinitions_future_order_subject_type;
            templateDefinition.future_order_subject_value = config.templateDefinitions_future_order_subject_value;
            templateDefinition.future_order_content_type = config.templateDefinitions_future_order_content_type;
            templateDefinition.future_order_content_value = config.templateDefinitions_future_order_content_value;
            templateDefinition.future_order_content_attachments_fileName = config.templateDefinitions_future_order_content_attachments_fileName;
            templateDefinition.future_order_content_attachments_filePath = config.templateDefinitions_future_order_content_attachments_filePath;
            templateDefinition.future_order_content_attachments_cid = config.templateDefinitions_future_order_content_attachments_cid;
            templateDefinition.future_order_active = config.templateDefinitions_future_order_active;

            user.mongo_language_folder = config.mongo_language_folder;

            user.userName = config.Users_userName;
            user.hash = config.Users_hash;
            user.firstName = config.Users_firstName;
            user.lastName = config.Users_lastName;
            user.email = config.Users_email;
            user.passwordLifetime = config.Users_passwordLifetime;
            user.resetPassword = config.Users_resetPassword;
            user.loginAttempts = config.Users_loginAttempts;
            user.lastLogin = config.Users_lastLogin;
            user.lastLogout = config.Users_lastLogout;
            user.totalLogins = config.Users_totalLogins;
            user.status = config.Users_status;
            user.company = config.Users_company;
            user.type = config.Users_type;

            user.products_commerce_code = config.Users_products_commerce_code;
            user.products_commerce_roles = config.Users_products_commerce_roles;
            user.products_commerce_roles2 = config.Users_products_commerce_roles2;
            user.products_commerce_settings_sms = config.Users_products_commerce_settings_sms;
            user.products_commerce_settings_customer_code = config.Users_products_commerce_settings_customer_code;
            user.products_commerce_settings_customer_name = config.Users_products_commerce_settings_customer_name;
            user.products_commerce_settings_sales = config.Users_products_commerce_settings_sales;
            user.products_commerce_settings_timeZone_value = config.Users_products_commerce_settings_timeZone_value;
            user.products_commerce_settings_timeZone_operator = config.Users_products_commerce_settings_timeZone_operator;
            user.products_commerce_settings_timeZone_hours = config.Users_products_commerce_settings_timeZone_hours;
            user.products_commerce_settings_timeZone_minutes = config.Users_products_commerce_settings_timeZone_minutes;
            user.products_commerce_settings_permissions_batchWeights = config.Users_products_commerce_settings_permissions_batchWeights;
            user.products_commerce_settings_permissions_truckTimes = config.Users_products_commerce_settings_permissions_truckTimes;
            user.products_commerce_settings_permissions_pricing = config.Users_products_commerce_settings_permissions_pricing;
            user.products_commerce_settings_permissions_mapping = config.Users_products_commerce_settings_permissions_mapping;
            user.products_commerce_settings_permissions_acctInfo = config.Users_products_commerce_settings_permissions_acctInfo;
            user.products_commerce_settings_permissions_docImage = config.Users_products_commerce_settings_permissions_docImage;
            user.products_commerce_settings_permissions_futureOrderEmail = config.Users_products_commerce_settings_permissions_futureOrderEmail;
            user.products_commerce_settings_permissions_changeCustomer = config.Users_products_commerce_settings_permissions_changeCustomer;
            user.products_commerce_settings_permissions_isAdmin = config.Users_products_commerce_settings_permissions_isAdmin;
            user.products_commerce_settings_permissions_timeZone = config.Users_products_commerce_settings_permissions_timeZone;
            user.products_commerce_settings_permissions_advancedOrderRequest = config.Users_products_commerce_settings_permissions_advancedOrderRequest;
            user.products_commerce_settings_permissions_reports = config.Users_products_commerce_settings_permissions_reports;

            user.products_ticket_code = config.Users_products_ticket_code;
            user.products_ticket_roles = config.Users_products_ticket_roles;
            user.products_ticket_settings_permissions_isAdmin = config.Users_products_ticket_settings_permissions_isAdmin;
            user.products_ticket_settings_permissions_legalAdmin = config.Users_products_ticket_settings_permissions_legalAdmin;

            user.products_bulkticket_code = config.Users_products_bulkticket_code;
            user.products_bulkticket_roles = config.Users_products_bulkticket_roles;
            user.products_bulkticket_settings_permissions_isAdmin = config.Users_products_bulkticket_settings_permissions_isAdmin;
            user.products_bulkticket_settings_permissions_legalAdmin = config.Users_products_bulkticket_settings_permissions_legalAdmin;

            user.products_jobsite_code = config.Users_products_jobsite_code;
            user.products_jobsite_roles = config.Users_products_jobsite_roles;
            user.products_jobsite_roles2 = config.Users_products_jobsite_roles2;
            user.products_jobsite_roles3 = config.Users_products_jobsite_roles3;
            user.products_jobsite_settings_sms = config.Users_products_jobsite_settings_sms;
            user.products_jobsite_settings_customer_code = config.Users_products_jobsite_settings_customer_code;
            user.products_jobsite_settings_customer_name = config.Users_products_jobsite_settings_customer_name;
            user.products_jobsite_settings_sales = config.Users_products_jobsite_settings_sales;
            user.products_jobsite_settings_timeZone_value = config.Users_products_jobsite_settings_timeZone_value;
            user.products_jobsite_settings_timeZone_operator = config.Users_products_jobsite_settings_timeZone_operator;
            user.products_jobsite_settings_timeZone_hours = config.Users_products_jobsite_settings_timeZone_hours;
            user.products_jobsite_settings_timeZone_minutes = config.Users_products_jobsite_settings_timeZone_minutes;
            user.products_jobsite_settings_permissions_batchWeights = config.Users_products_jobsite_settings_permissions_batchWeights;
            user.products_jobsite_settings_permissions_truckTimes = config.Users_products_jobsite_settings_permissions_truckTimes;
            user.products_jobsite_settings_permissions_pricing = config.Users_products_jobsite_settings_permissions_pricing;
            user.products_jobsite_settings_permissions_mapping = config.Users_products_jobsite_settings_permissions_mapping;
            user.products_jobsite_settings_permissions_acctInfo = config.Users_products_jobsite_settings_permissions_acctInfo;
            user.products_jobsite_settings_permissions_docImage = config.Users_products_jobsite_settings_permissions_docImage;
            user.products_jobsite_settings_permissions_futureOrderEmail = config.Users_products_jobsite_settings_permissions_futureOrderEmail;
            user.products_jobsite_settings_permissions_changeCustomer = config.Users_products_jobsite_settings_permissions_changeCustomer;
            user.products_jobsite_settings_permissions_isAdmin = config.Users_products_jobsite_settings_permissions_isAdmin;
            user.products_jobsite_settings_permissions_timeZone = config.Users_products_jobsite_settings_permissions_timeZone;
            user.products_jobsite_settings_permissions_advancedOrderRequest = config.Users_products_jobsite_settings_permissions_advancedOrderRequest;
            user.products_jobsite_settings_permissions_reports = config.Users_products_jobsite_settings_permissions_reports;

            user.products_evoadmin_code = config.Users_products_evoadmin_code;
            user.products_evoadmin_roles = config.Users_products_evoadmin_roles;


            transformMongoProperties.mongoHost = config.mongoHost;
            transformMongoProperties.mongoPort = config.mongoPort;

            transformMongoProperties.company_code = config.commerce_code;
            transformMongoProperties.output_to_folder_only = config.output_to_folder_only;
            transformMongoProperties.input_folder = config.input_folder;
            transformMongoProperties.output_folder = config.output_folder;
            transformMongoProperties.import_already_rendered_to_mongo = config.import_already_rendered_to_mongo;

            transformMongoProperties.companyObj = company;
            transformMongoProperties.notificationDefinitionObj = notificationDefinition;
            transformMongoProperties.productDefinitionObj = productDefinition;
            transformMongoProperties.templateDefinitionObj = templateDefinition;
            transformMongoProperties.userObj = user;

            transformMongoProperties.templateDefinitions_order = config.templateDefinitions_order;
            transformMongoProperties.templateDefinitions_order_sms = config.templateDefinitions_order_sms;
            transformMongoProperties.templateDefinitions_ticket = config.templateDefinitions_ticket;
            transformMongoProperties.templateDefinitions_ticket_sms = config.templateDefinitions_ticket_sms;
            transformMongoProperties.templateDefinitions_reorder = config.templateDefinitions_reorder;
            transformMongoProperties.templateDefinitions_future_order = config.templateDefinitions_future_order;

            transformMongoProperties.productDefinitions_commerce = config.productDefinitions_commerce;
            transformMongoProperties.productDefinitions_ticket = config.productDefinitions_ticket;
            transformMongoProperties.productDefinitions_jobsite = config.productDefinitions_jobsite;
            transformMongoProperties.productDefinitions_supply = config.productDefinitions_supply;
            transformMongoProperties.productDefinitions_evoadmin = config.productDefinitions_evoadmin;

            transformMongoProperties.notificationDefinitions_order_create = config.notificationDefinitions_order_create;
            transformMongoProperties.notificationDefinitions_ticket_create = config.notificationDefinitions_ticket_create;

            transformMongoProperties.Users_products_commerce = config.Users_products_commerce;
            transformMongoProperties.Users_products_ticket = config.Users_products_ticket;
            transformMongoProperties.Users_products_jobsite = config.Users_products_jobsite;
            transformMongoProperties.Users_products_evoadmin = config.Users_products_evoadmin;

            transformMongoProperties.Companies_products_commerce = config.Companies_products_commerce;
            transformMongoProperties.Companies_products_ticket = config.Companies_products_ticket;
            transformMongoProperties.Companies_products_bulkticket = config.Companies_products_bulkticket;
            transformMongoProperties.Companies_products_jobsite = config.Companies_products_jobsite;
            transformMongoProperties.Companies_products_supply = config.Companies_products_supply;
            transformMongoProperties.Companies_products_evoadmin = config.Companies_products_evoadmin;

            return transformMongoProperties;
        }
        catch (er)
        {
            console.log('populateTransformObjects error: ', er.stack);
            return undefined;
        }

        return undefined;
    }

};

module.exports = mongo_transform;
