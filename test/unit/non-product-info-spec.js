var chai = require('chai');
var expect = chai.expect;

describe('Test Prompts', function(){

	before(function(){
		config 				= require('../../scripts/JadeTransform/config-mongo.js');
		transform 			= require('../../scripts/JadeTransform/util/mongo-transform.js');
		prompts				= require('../../scripts/JadeTransform/config-prompt.js');
		transformProperties = transform.populateTransformObjects(config);
	});

	describe('Non product info test for new customer', function(){

		describe('Company descripion', function(){
			it('should match company description prompt text (What is the company description?)', function(){
				expect(prompts.company_description.trim()).equal('What is the company description?'.trim());
			});

			it('should return \'new company\' for new customer', function(){
				expect(transformProperties.companyObj.description).equal('');
			});
		});

		describe('Company status', function(){
			it('should match company status prompt text (Is the company status active?)', function(){
				expect(prompts.company_status.trim()).equal('Is the company status active?'.trim());
			});

			it('should return y for company status active', function(){
				expect(transformProperties.companyObj.status).equal('y');
			});
		});

		describe('Company email', function(){
			it('should match company email name prompt text (What is the company email name?)', function(){
				expect(prompts.comapny_email_name.trim()).equal('What is the company email name?'.trim());
			});

			it('should return Newco Corp for company email name', function(){
				expect(transformProperties.companyObj.settings_communications_email_from_name).equal('Newco Corp');
			});

			it('should match company email id prompt text (What is the company email Id?)', function(){
				expect(prompts.company_email_id.trim()).equal('What is the company email Id?'.trim());
			});

			it('should return info@newco.com for company email id', function(){
				expect(transformProperties.companyObj.settings_communications_email_from_value).equal('info@newco.com');
			});
		});

		describe('Company cloud storage', function(){
			it('should match company cloud storage prompt text (Company has cloud store?)', function(){
				expect(prompts.has_cloud_storage.trim()).equal('Company has cloud store?'.trim());
			});

			it('should return n for company has cloud storage', function(){
				expect(transformProperties.companyObj.settings_cloudStore).equal('n');
			});
		});

		describe('Environment', function(){
			it('should match environment prompt text (Enter y if the environment is alpha and n if production?)', function(){
				expect(prompts.environment.trim()).equal('Enter y if the environment is alpha and n if production?'.trim());
			});

			it('should return alpha for environment', function(){
				expect(transformProperties.companyObj.products_commerce_settings_env).equal('alpha');
			});
		});

		//Style prompts were applicable for version 1.2. Unit tests for style were taken off. 
	});
});