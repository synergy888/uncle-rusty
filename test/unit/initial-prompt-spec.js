var chai = require('chai'),
	expect = chai.expect,
    sinon = require('sinon');

chai.use(require('sinon-chai'));

chai.use(require('chai-fs'));

describe('initial-prompts-and-mongo-settings-tests', function() {
	var transformProperties;
	var env;
	var config;
	var transform;

	beforeEach(function () {
		config 				= require('../../scripts/JadeTransform/config-mongo.js');
		prompts				= require('../../scripts/JadeTransform/config-prompt.js');
		transform 			= require('../../scripts/JadeTransform/util/transform.js');
		transformProperties = transform.populateTransformObjects(config)
	})

	describe('populateTransformObjects - New customer unit test', function () {
		it('should return mongoHost value that matches transformProperty (127.0.0.1)', function () {
			expect(transformProperties.mongoHost).equal('127.0.0.1');
		});

		it('should return mongoPort value that matches transformProperty', function () {
			expect(transformProperties.mongoPort).equal(27017);
		});

		it('should return company_code value that matches transformProperty', function () {
			expect(transformProperties.company_code).equal('newco');
		});

		it('should match new/existing prompt text (Is this a new customer?)', function () {
			expect(prompts.new_customer_prompt.trim()).equal('Is this a new customer?'.trim());
		});

		it('should return y for a new customer', function () {
			expect(transformProperties.new_or_existing_customer).equal('y');
		});

		it('should return y for a new customer provided first character is y (e.g. yep)', function () {
			expect(transformProperties.new_or_existing_customer).equal('yes'.substring(0,1));
		});

		it('should return y for a new customer provided first character is y (e.g. yes)', function () {
			expect(transformProperties.new_or_existing_customer).equal('yep'.substring(0,1));
		});
	});
});