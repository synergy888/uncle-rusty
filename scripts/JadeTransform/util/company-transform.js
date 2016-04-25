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
            if (sourceFile.indexOf('companies.json') > -1) {
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
