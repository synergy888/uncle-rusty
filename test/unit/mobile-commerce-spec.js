var chai = require('chai');
var expect = chai.expect;

describe('Test Prompts', function(){

	before(function(){
		config 				= require('../../scripts/JadeTransform/config-mongo.js');
		transform 			= require('../../scripts/JadeTransform/util/mongo-transform.js');
		prompts				= require('../../scripts/JadeTransform/config-prompt.js');
		transformProperties = transform.populateTransformObjects(config);
	});

	describe('Mobile Commerce tests for new customer', function(){

		// Version 1.2 has been pulled off. Removed all 1.2 test cases.

		describe('System type', function(){
			it('should match system type prompt text (Is this setup for a command series?)', function(){
				expect(prompts.system_type.trim()).equal('Is this setup for a command series?'.trim());
			});

			it('should return integra for system type', function(){
				expect(transformProperties.companyObj.products_commerce_settings_systemType).equal('integra');
			});
		});

		describe('Future order email', function(){
			it('should match future order email generate time prompt text (What is future orders email generate time?)', function(){
				expect(prompts.email_generate_time.trim()).equal('What is future orders email generate time?'.trim());
			});

			it('should return \'1127\' for future order email generate time', function(){
				expect(transformProperties.companyObj.products_commerce_settings_futureOrdersEmail_generateTime).equal('1127');
			});

			it('should match future order email duration time prompt text (What is future orders email duration time period?)', function(){
				expect(prompts.email_duration_period.trim()).equal('What is future orders email duration time period?'.trim());
			});

			it('should return \'3\' for future order email duration time', function(){
				expect(transformProperties.companyObj.products_commerce_settings_futureOrdersEmail_durationTimePeriod).equal(3);
			});
		});

		describe('End point', function(){
			it('should match end pint prompt text (What is their End Point (What server is the IIS (CS) or Integra Rest service located)?)', function(){
				expect(prompts.end_point.trim()).equal('What is their End Point (What server is the IIS (CS) or Integra Rest service located)?'.trim());
			});

			it('should return \'http://localhost\' for end point', function(){
				expect(transformProperties.companyObj.products_commerce_settings_edxGatewayConfig_ServerAddress).equal('http://localhost');
			});

			it('should match end point port prompt text (What is their End Point Port ?)', function(){
				expect(prompts.end_point_port.trim()).equal('What is their End Point Port ?'.trim());
			});

			it('should return \'35244\' for end point port', function(){
				expect(transformProperties.companyObj.products_commerce_settings_edxGatewayConfig_Port).equal('35244');
			});
		});

		describe('Advance order request', function(){
			it('should match advance order request prompt text (Is the (customer) doing Advance Order Request?)', function(){
				expect(prompts.adv_order_request.trim()).equal('Is the (customer) doing Advance Order Request?'.trim());
			});

			it('should return false for advance order request', function(){
				expect(transformProperties.companyObj.products_commerce_settings_company_advancedOrderRequest).equal(true);
			});

			it('should match edx gateway ip prompt text (What is the EDX Gateway IP?)', function(){
				expect(prompts.edx_gateway_ip.trim()).equal('What is the EDX Gateway IP?'.trim());
			});

			it('should return \'http://localhost\' for edx gateway ip', function(){
				expect(transformProperties.companyObj.products_commerce_settings_edxGatewayConfig_ServerAddress).equal('http://localhost');
			});

			it('should match edx gateway port prompt text (What is the EDX Gateway Port?)', function(){
				expect(prompts.edx_gateway_port.trim()).equal('What is the EDX Gateway Port?'.trim());
			});

			it('should return \'35244\' for edx gateway port', function(){
				expect(transformProperties.companyObj.products_commerce_settings_edxGatewayConfig_Port).equal('35244');
			});
		});

		describe('Reorder request', function(){
			it('should match reorder request mail prompt text (What is their Reorder request email?)', function(){
				expect(prompts.reorder_request_mail.trim()).equal('What is their Reorder request email?'.trim());
			});
		});

		describe('On base', function(){
			it('should match on base prompt text (Do they have onBase?)', function(){
				expect(prompts.on_base.trim()).equal('Do they have onBase?'.trim());
			});
		});

		describe('Provider url', function(){
			it('should match provider url prompt text (What is the provider URL?)', function(){
				expect(prompts.provider_url.trim()).equal('What is the provider URL?'.trim());
			});
		});
	});
});