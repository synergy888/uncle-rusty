var configPrompt = {};

configPrompt.company_code = 'Enter a company code that will be part of the subdomain. For example, enter cai for cai.evodevelop.com';
configPrompt.new_customer_prompt 	= 'Is this a new customer?';
configPrompt.customer_already_exist = 'Customer already exists. Do you want to overwrite previous customer data?';

configPrompt.company_description 	= 'What is the company description?';
configPrompt.company_status 		= 'Is the company status active?';
configPrompt.comapny_email_name 	= 'What is the company email name?';
configPrompt.company_email_id 		= 'What is the company email Id?';
configPrompt.has_cloud_storage 		= 'Company has cloud store?';
configPrompt.environment 			= 'Enter y if the environment is alpha and n if production?';

configPrompt.system_type 			= 'Is this setup for a command series?';
configPrompt.email_generate_time 	= 'What is future orders email generate time?';
configPrompt.email_duration_period 	= 'What is future orders email duration time period?';
configPrompt.end_point 				= 'What is their End Point (What server is the IIS (CS) or Integra Rest service located)?';
configPrompt.end_point_port 		= 'What is their End Point Port ?';
configPrompt.adv_order_request 		= 'Is the (customer) doing Advance Order Request?';
configPrompt.edx_gateway_ip 		= 'What is the EDX Gateway IP?';
configPrompt.edx_gateway_port 		= 'What is the EDX Gateway Port?';
configPrompt.reorder_request_mail 	= 'What is their Reorder request email?';
configPrompt.on_base 				= 'Do they have onBase?';
configPrompt.provider_url 			= 'What is the provider URL?';

configPrompt.input_folder = "Enter a relative path to the Mongo JSON input folder containing the .json files to be modified.";
configPrompt.output_folder = "Enter a relative path to the Mongo JSON output folder where the transformed .json files will be written to.";
configPrompt.import_to_mongo = "Output to folder only and do not import into mongo?";

configPrompt.installProduct = function(productName){
    return 'Do you want to install ' + productName + '?';
};

configPrompt.productAlreadyInstalled = function(productName){
    return productName +' is already installed. Do you want to modify it?';
};

module.exports = configPrompt;