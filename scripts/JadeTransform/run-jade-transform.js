#! /usr/bin/env node

var prompt = require('prompt');
var config = require('./config-jade.js');
var util = require('./util/utils');
var transform = require('./util/transform.js');
var s3 = require('./util/s3.js');
var argv = require('yargs').argv;
var fs = require('fs');

if(argv.get){

} else

if(argv.rollback){

} else {

  prompt.override = argv;

  console.log('\n\nThe purpose of this app is to setup a new company by modifying .jade templates ');
  console.log('and creating new .jade templates for the new company.  ');
  console.log('Please edit the config file and assign the appropriate values to the config variables.\n\n');

  prompt.start();

  var promptVerify = {
    name: 'yesno',
    message: 'Do you wish to continue?',
    validator: /y[es]*|n[o]?/,
    warning: 'You must enter yes or no',
    default: 'yes'
  };

  prompt.get(promptVerify, function (err, result) {
    if (err) {
      util.handleError(err);
    }

    if (result.yesno.substring(0, 1) == 'n') {
      process.exit();
    }

    var companyCode = process.env.COMPANY_CODE;
    if (companyCode === undefined){
      companyCode = config.company_code;
    }
    var promptCompanyCode = {
      properties: {
        company: {
          message: 'Enter a company code that will be part of the subdomain. For example, enter cai for cai.evodevelop.com',
          default: companyCode,
          required: false
        }
      }
    };

    prompt.get(promptCompanyCode, function (err, result) {
      if (err) {
        util.handleError(err);
      }
      config.company_code = result.company;
      console.log('company code is: ' + config.company_code);

      var inputFolder = process.env.INPUT_FOLDER;
      if (inputFolder === undefined){
        inputFolder = './' + config.input_folder;
      }
      var promptInputFolder = {
        properties: {
          inputFolder: {
            message: 'Enter a relative path to the .jade input folder containing the .jade files to be modified',
            default: inputFolder,
            required: false
          },
        }
      };

      prompt.get(promptInputFolder, function (err, result) {
        if (err) {
          util.handleError(err);
        }

        console.log('input folder: ' + result.inputFolder);
        config.input_folder = result.inputFolder;

        var outputFolder = process.env.OUTPUT_FOLDER;
        if (outputFolder === undefined){
          outputFolder = './' + config.output_folder;
        }
        var promptOutputFolder = {
            properties: {
              outputFolder: {
                message: 'Enter a relative path to the .jade output folder where the transformed .jade files will be written to.',
                default: outputFolder,
                required: false
              },
            }
          };

          prompt.get(promptOutputFolder, function (err, result) {
            if (err) {
              util.handleError(err);
            }

            config.output_folder = result.outputFolder;

            var output_to_folder_only = {
              properties: {
                outputFolderOnly: {
                  message: 'Do you want to output the transformed .jade files to the local output folder ONLY?',
                  default: config.output_to_folder_only,
                  required: false
                },
              }
            };

            prompt.get(output_to_folder_only, function (err, result) {
              if (err) {
                util.handleError(err);
              }
              if (result.outputFolderOnly.substring(0, 1) === 'n') {
                config.output_to_folder_only = 'n';
              }
              else {
                config.output_to_folder_only = 'y';
              }


              setTimeout(function(){
                global.transformProperties = transform.populateTransformObjects(config)
                //console.log('leo' + JSON.stringify(global.transformProperties) + 'leo')
                if (global.transformProperties === undefined){
                  process.exit();
                }

              if (global.transformProperties.output_to_folder_only === 'n'){
              var pushAlreadyRenderedToS3 = {
                properties: {
                  pushAlreadyRenderedOnly: {
                    message: 'Do you want to push already (previously) rendered .jade files to the S3 Bucket?',
                    default: config.push_already_rendered_to_s3,
                    required: false
                  },
                }
              };

                global.transformProperties.push_already_rendered_to_s3 = 'n';

              prompt.get(pushAlreadyRenderedToS3, function (err, result) {
                if (err) {
                  util.handleError(err);
                }
                if (result.pushAlreadyRenderedOnly.substring(0, 1) === 'n') {
                  global.transformProperties.push_already_rendered_to_s3 = 'n';
                }
                else {
                  global.transformProperties.push_already_rendered_to_s3 = 'y';
                }

                if (global.transformProperties.push_already_rendered_to_s3 === 'n') {
                  transformJadeFiles(global.transformProperties);
                }

                if (global.transformProperties.output_to_folder_only === 'n')  {
                  bReturn = s3.copyToS3Bucket(global.transformProperties, 'futureOrders.jade');

                  if (bReturn === true) {
                    bReturn = s3.copyToS3Bucket(global.transformProperties, 'order.jade');
                  }
                  else {
                    try
                    {
                      if (fs.statSync(global.transformProperties.output_folder + '/' + 'futureOrders.jade').isFile() === false){
                        console.log('File does not exist in the output directory. Error copying futureOrders.jade file to S3 bucket.');
                        process.exit();
                      }
                    }
                    catch (err)
                    {
                      console.log('File does not exist in the output directory. Error copying futureOrders.jade file to S3 bucket.');
                      process.exit();
                    }

                    console.log('Error copying futureOrders.jade file to S3 bucket.');
                    process.exit();
                  }
                  if (bReturn === true) {
                    bReturn = s3.copyToS3Bucket(global.transformProperties, 'order.sms.jade');
                  }
                  else {
                    try
                    {
                      if (fs.statSync(global.transformProperties.output_folder + '/' + 'order.jade').isFile() === false){
                        console.log('File does not exist in the output directory. Error copying order.jade file to S3 bucket.');
                        process.exit();
                      }
                    }
                    catch (err)
                    {
                      console.log('File does not exist in the output directory. Error copying order.jade file to S3 bucket.');
                      process.exit();
                    }

                    console.log('Error copying order.jade file to S3 bucket.');
                    process.exit();
                  }
                  if (bReturn === true) {
                    bReturn = s3.copyToS3Bucket(global.transformProperties, 'reorder.jade');
                  }
                  else {
                    try
                    {
                      if (fs.statSync(global.transformProperties.output_folder + '/' + 'order.sms.jade').isFile() === false){
                        console.log('File does not exist in the output directory. Error copying order.sms.jade file to S3 bucket.');
                        process.exit();
                      }
                    }
                    catch (err)
                    {
                      console.log('File does not exist in the output directory. Error copying order.sms.jade file to S3 bucket.');
                      process.exit();
                    }

                    console.log('Error copying order.sms.jade file to S3 bucket.');
                    process.exit();
                  }
                  if (bReturn === true) {
                    bReturn = s3.copyToS3Bucket(global.transformProperties, 'ticket.jade');
                  }
                  else {
                    try
                    {
                      if (fs.statSync(global.transformProperties.output_folder + '/' + 'reorder.jade').isFile() === false){
                        console.log('File does not exist in the output directory. Error copying reorder.jade file to S3 bucket.');
                        process.exit();
                      }
                    }
                    catch (err)
                    {
                      console.log('File does not exist in the output directory. Error copying reorder.jade file to S3 bucket.');
                      process.exit();
                    }

                    console.log('Error copying reorder.jade file to S3 bucket.');
                    process.exit();
                  }
                  if (bReturn === true) {
                    bReturn = s3.copyToS3Bucket(global.transformProperties, 'ticket.sms.jade');
                  }
                  else {
                    try
                    {
                      if (fs.statSync(global.transformProperties.output_folder + '/' + 'ticket.jade').isFile() === false){
                        console.log('File does not exist in the output directory. Error copying ticket.jade file to S3 bucket.');
                        process.exit();
                      }
                    }
                    catch (err)
                    {
                      console.log('File does not exist in the output directory. Error copying ticket.jade file to S3 bucket.');
                      process.exit();
                    }

                    console.log('Error copying ticket.jade file to S3 bucket.');
                    process.exit();
                  }
                  if (bReturn === false) {
                    try
                    {
                      if (fs.statSync(global.transformProperties.output_folder + '/' + 'ticket.sms.jade').isFile() === false){
                        console.log('File does not exist in the output directory. Error copying ticket.sms.jade file to S3 bucket.');
                        process.exit();
                      }
                    }
                    catch (err)
                    {
                      console.log('File does not exist in the output directory. Error copying ticket.sms.jade file to S3 bucket.');
                      process.exit();
                    }

                    console.log('Error copying ticket.sms.jade file to S3 bucket.');
                    process.exit();
                  }
                  if (global.transformProperties.push_already_rendered_to_s3 === 'n') {
                    console.log('Successfully copied newly transformed .jade templates to S3.');
                  }
                  else {
                    console.log('Successfully copied previously rendered .jade templates to S3.');
                  }
                }
              });
              }
              else if (global.transformProperties.push_already_rendered_to_s3 === 'n') {
                  transformJadeFiles(global.transformProperties);
              }

              },500);


            });
        });
      });

    });

    });
}

/**
 * Transforms .jade files by applying configuration settings
 */
function transformJadeFiles(transformProperties){
  var bReturn = transform.transformJadeFile(transformProperties, transformProperties.futureOrdersObj.jade_language_folder + '/futureOrders.jade', transformProperties.output_folder + '/futureOrders.jade');
  if (bReturn === true) {
    bReturn = transform.transformJadeFile(transformProperties, transformProperties.orderObj.jade_language_folder + '/order.jade', transformProperties.output_folder + '/order.jade');
  }
  else {
    console.log('Error transforming .jade file futureOrders.jade');
    process.exit();
  }
  if (bReturn === true) {
    bReturn = transform.transformJadeFile(transformProperties, transformProperties.orderSmsObj.jade_language_folder + '/order.sms.jade', transformProperties.output_folder + '/order.sms.jade');
  }
  else {
    console.log('Error transforming .jade file order.jade');
    process.exit();
  }
  if (bReturn === true) {
    bReturn = transform.transformJadeFile(transformProperties, transformProperties.reorderObj.jade_language_folder + '/reorder.jade', transformProperties.output_folder + '/reorder.jade');
  }
  else {
    console.log('Error transforming .jade file order.sms.jade');
    process.exit();
  }
  if (bReturn === true) {
    bReturn = transform.transformJadeFile(transformProperties, transformProperties.ticketObj.jade_language_folder + '/ticket.jade', transformProperties.output_folder + '/ticket.jade');
  }
  else {
    console.log('Error transforming .jade file reoder.jade');
    process.exit();
  }
  if (bReturn === true) {
    bReturn = transform.transformJadeFile(transformProperties, transformProperties.ticketSmsObj.jade_language_folder + '/ticket.sms.jade', transformProperties.output_folder + '/ticket.sms.jade');
  }
  else {
    console.log('Error transforming .jade file ticket.jade');
    process.exit();
  }
  if (bReturn === false) {
    console.log('Error transforming .jade file ticket.sms.jade');
    process.exit();
  }

  console.log('Successfully transformed .jade templates to the following folder: ' + transformProperties.output_folder);
}
