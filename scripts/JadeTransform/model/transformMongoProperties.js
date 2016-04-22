var transformMongoProperties = {};

transformMongoProperties.mongoHost = undefined;
transformMongoProperties.mongoPort = undefined;

transformMongoProperties.company_code = undefined;
transformMongoProperties.output_to_folder_only = undefined;
transformMongoProperties.input_folder = undefined;
transformMongoProperties.output_folder = undefined;
transformMongoProperties.import_already_rendered_to_mongo = undefined;

transformMongoProperties.companyObj = undefined;
transformMongoProperties.notificationDefinitionObj = undefined;
transformMongoProperties.productDefinitionObj = undefined;
transformMongoProperties.templateDefinitionObj = undefined;
transformMongoProperties.userObj = undefined;

//sections
transformMongoProperties.templateDefinitions_order = undefined;
transformMongoProperties.templateDefinitions_order_sms = undefined;
transformMongoProperties.templateDefinitions_ticket = undefined;
transformMongoProperties.templateDefinitions_ticket_sms = undefined;
transformMongoProperties.templateDefinitions_reorder = undefined;
transformMongoProperties.templateDefinitions_future_order = undefined;

transformMongoProperties.productDefinitions_commerce = undefined;
transformMongoProperties.productDefinitions_ticket = undefined;
transformMongoProperties.productDefinitions_jobsite = undefined;
transformMongoProperties.productDefinitions_supply = undefined;
transformMongoProperties.productDefinitions_evoadmin = undefined;

transformMongoProperties.notificationDefinitions_order_create = undefined;
transformMongoProperties.notificationDefinitions_ticket_create = undefined;

transformMongoProperties.Users_products_commerce = undefined;
transformMongoProperties.Users_products_ticket = undefined;
transformMongoProperties.Users_products_jobsite = undefined;
transformMongoProperties.Users_products_evoadmin = undefined;

transformMongoProperties.Companies_products_commerce = undefined;
transformMongoProperties.Companies_products_ticket = undefined;
transformMongoProperties.Companies_products_jobsite = undefined;
transformMongoProperties.Companies_products_supply = undefined;
transformMongoProperties.Companies_products_evoadmin = undefined;


module.exports = transformMongoProperties;