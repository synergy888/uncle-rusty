var chai = require('chai');
var expect = chai.expect;

describe('Test mongo transformation', function(){

    before(function(){
        config 				= require('../../scripts/JadeTransform/config-mongo.js');
        transform 			= require('../../scripts/JadeTransform/util/mongo-transform.js');
        prompts				= require('../../scripts/JadeTransform/config-prompt.js');
        transformProperties = transform.populateTransformObjects(config);
        chai.use(require('chai-fs'));
        path = require('path');
    });

    describe('Mongo transformation test input folder', function(){

        it('should return output_to_folder_only value that matches transformProperty', function () {
            expect(transformProperties.output_to_folder_only).equal('n');
        });

        it('should return input_folder value that matches transformProperty', function () {
            expect(transformProperties.input_folder).equal('mongo_english');
        });

        it('should return output_folder value that matches transformProperty', function () {
            expect(transformProperties.output_folder).equal('mongo_english_out');
        });

        it('should match input folder prompt text (Enter a relative path to the Mongo JSON input folder containing the .json files to be modified.)', function(){
            expect(prompts.input_folder.trim()).equal('Enter a relative path to the Mongo JSON input folder containing the .json files to be modified.'.trim());
        });

        it('should be valid and non empty directory', function(){
            expect(path.resolve('../scripts/JadeTransform/'+ config.input_folder)).to.be.a.directory().and.not.empty;

            expect(path.resolve('../scripts/JadeTransform/'+ config.input_folder +'/users.json')).to.be.a.file().with.json;
            
            expect(path.resolve('../scripts/JadeTransform/'+ config.input_folder +'/templateDefinitions.json')).to.be.a.file().with.json;

            //expect(path.resolve('../scripts/JadeTransform/'+ config.input_folder +'/productDefinitions.json')).to.be.a.file().with.json;

            expect(path.resolve('../scripts/JadeTransform/'+ config.input_folder +'/notificationDefinitions.json')).to.be.a.file().with.json;

            //expect(path.resolve('../scripts/JadeTransform/'+config.input_folder+'/companies-v1.3.json')).to.be.a.file().with.json;
            
        });
    });

    describe('Mongo transformation test output folder', function(){
        it('should match output folder prompt text (Enter a relative path to the Mongo JSON output folder where the transformed .json files will be written to.)', function(){
            expect(prompts.output_folder.trim()).equal('Enter a relative path to the Mongo JSON output folder where the transformed .json files will be written to.'.trim());
        });
    });
});