var chai = require('chai');
var expect = chai.expect;

describe('Test Prompts', function(){

	before(function(){
		config 				= require('../../scripts/JadeTransform/config-mongo.js');
		transform 			= require('../../scripts/JadeTransform/util/mongo-transform.js');
		prompts				= require('../../scripts/JadeTransform/config-prompt.js');
		transformProperties = transform.populateTransformObjects(config);
	});

	describe('Mobile Ticket Bulk tests for new customer', function(){

		describe('EDX gateway', function(){
			it('should match edx gateway ip prompt text (What is the EDX Gateway IP?)', function(){
				expect(prompts.edx_gateway_ip.trim()).equal('What is the EDX Gateway IP?'.trim());
			});

			it('should return \'http://localhost\' for edx gateway ip', function(){
				expect(transformProperties.companyObj.products_ticket_settings_dataEndPoints_EDXTicketService_EndPointAddress).equal('http://localhost');
			});

			it('should match edx gateway port prompt text (What is the EDX Gateway Port?)', function(){
				expect(prompts.edx_gateway_port.trim()).equal('What is the EDX Gateway Port?'.trim());
			});

			it('should return \'35245\' for edx gateway port', function(){
				expect(transformProperties.companyObj.products_ticket_settings_dataEndPoints_EDXTicketService_Port).equal(35245);
			});
		});
	});
});