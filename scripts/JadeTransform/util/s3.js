#! /usr/bin/env node

var fs = require('fs');

var s3 = {
  /**
   * Copy .jade file to S3 Bucket
   * @param {Object} config object
   * @param {String} .jade jadeFile to copy to S3 Bucket
   * @returns {true/false} boolean true/false on transform operation
   */
  copyToS3Bucket: function(config, jadeFile){
      try
      {
          var fs = require('fs');
          if (fs.statSync(config.output_folder + '/' + jadeFile).isFile() === false){
              return false;
          }
      }
      catch (err)
      {
          return false;
      }

  try {
      var S3Bucket = process.env.S3_BUCKET;
      if (S3Bucket === undefined){
          S3Bucket = config.bucket_name;
      }
      var S3AccessKeyId = process.env.S3_ACCESS_KEY_ID;
      if (S3AccessKeyId === undefined){
          S3AccessKeyId = config.accessKeyId;
      }
      var S3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
      if (S3SecretAccessKey === undefined){
          S3SecretAccessKey = config.secretAccessKey;
      }
      var S3Folder = process.env.S3_FOLDER;
      if (S3Folder === undefined){
          S3Folder = config.s3_folder;
      }

      var S3FS = require('s3fs'),
          s3fsImpl = new S3FS(S3Bucket, {
            accessKeyId: S3AccessKeyId,
            secretAccessKey: S3SecretAccessKey
          });

      var fs = require('fs')
      var stream = fs.createReadStream(config.output_folder + '/' + jadeFile);
      s3fsImpl.writeFile(S3Folder + '/' + config.company_code + '/' + jadeFile, stream).then(function () {
        return true;
      });
  }
  catch (er)
  {
    console.log('copyToS3Bucket error: ', er.stack);
    return false;
  }

    return true;
}

};

module.exports = s3;
