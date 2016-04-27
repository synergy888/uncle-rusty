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
        if (sourceFile.indexOf('users.json') > -1) {
            data = data.replace(/~Users_userName~/g, transformMongoProperties.userObj.userName);
            data = data.replace(/~Users_hash~/g, transformMongoProperties.userObj.hash);
            data = data.replace(/~Users_salt~/g, transformMongoProperties.userObj.salt);
            data = data.replace(/~Users_firstName~/g, transformMongoProperties.userObj.firstName);
            data = data.replace(/~Users_lastName~/g, transformMongoProperties.userObj.lastName);
            data = data.replace(/~Users_email~/g, transformMongoProperties.userObj.email);
            data = data.replace(/~Users_passwordLifetime~/g, transformMongoProperties.userObj.passwordLifetime);
            data = data.replace(/~Users_resetPassword~/g, transformMongoProperties.userObj.resetPassword);
            data = data.replace(/~Users_loginAttempts~/g, transformMongoProperties.userObj.loginAttempts);
            data = data.replace(/~Users_lastLogin~/g, transformMongoProperties.userObj.lastLogin);
            data = data.replace(/~Users_lastLogout~/g, transformMongoProperties.userObj.lastLogout);
            data = data.replace(/~Users_totalLogins~/g, transformMongoProperties.userObj.totalLogins);
            data = data.replace(/~Users_status~/g, transformMongoProperties.userObj.status);
            data = data.replace(/~Users_company~/g, transformMongoProperties.userObj.company);
            data = data.replace(/~Users_type~/g, transformMongoProperties.userObj.type);

            data = data.replace(/~Users_products_commerce_code~/g, transformMongoProperties.userObj.products_commerce_code);
            data = data.replace(/~Users_products_commerce_roles~/g, transformMongoProperties.userObj.products_commerce_roles);
            data = data.replace(/~Users_products_commerce_roles2~/g, transformMongoProperties.userObj.products_commerce_roles2);
            data = data.replace(/~Users_products_commerce_settings_sms~/g, transformMongoProperties.userObj.products_commerce_settings_sms);
            data = data.replace(/~Users_products_commerce_settings_customer_code~/g, transformMongoProperties.userObj.products_commerce_settings_customer_code);
            data = data.replace(/~Users_products_commerce_settings_customer_name~/g, transformMongoProperties.userObj.products_commerce_settings_customer_name);
            data = data.replace(/~Users_products_commerce_settings_sales~/g, transformMongoProperties.userObj.products_commerce_settings_sales);
            data = data.replace(/~Users_products_commerce_settings_timeZone_value~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_value);
            data = data.replace(/~Users_products_commerce_settings_timeZone_operator~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_operator);
            data = data.replace(/~Users_products_commerce_settings_timeZone_hours~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_hours);
            data = data.replace(/~Users_products_commerce_settings_timeZone_minutes~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_minutes);
            data = data.replace(/~Users_products_commerce_settings_timeZone_name~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_name);
            data = data.replace(/~Users_products_commerce_settings_timeZone_defaultRegion~/g, transformMongoProperties.userObj.products_commerce_settings_timeZone_defaultRegion);
            data = data.replace(/~Users_products_commerce_settings_permissions_batchWeights~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_batchWeights);
            data = data.replace(/~Users_products_commerce_settings_permissions_truckTimes~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_truckTimes);
            data = data.replace(/~Users_products_commerce_settings_permissions_pricing~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_pricing);
            data = data.replace(/~Users_products_commerce_settings_permissions_mapping~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_mapping);
            data = data.replace(/~Users_products_commerce_settings_permissions_acctInfo~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_acctInfo);
            data = data.replace(/~Users_products_commerce_settings_permissions_docImage~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_docImage);
            data = data.replace(/~Users_products_commerce_settings_permissions_futureOrderEmail~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_futureOrderEmail);
            data = data.replace(/~Users_products_commerce_settings_permissions_changeCustomer~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_changeCustomer);
            data = data.replace(/~Users_products_commerce_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_isAdmin);
            data = data.replace(/~Users_products_commerce_settings_permissions_timeZone~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_timeZone);
            data = data.replace(/~Users_products_commerce_settings_permissions_advancedOrderRequest~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_advancedOrderRequest);
            data = data.replace(/~Users_products_commerce_settings_permissions_reports~/g, transformMongoProperties.userObj.products_commerce_settings_permissions_reports);

            data = data.replace(/~Users_products_ticket_code~/g, transformMongoProperties.userObj.products_ticket_code);
            data = data.replace(/~Users_products_ticket_roles~/g, transformMongoProperties.userObj.products_ticket_roles);
            data = data.replace(/~Users_products_ticket_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_ticket_settings_permissions_isAdmin);
            data = data.replace(/~Users_products_ticket_settings_permissions_legalAdmin~/g, transformMongoProperties.userObj.products_ticket_settings_permissions_legalAdmin);

            data = data.replace(/~Users_products_bulkticket_code~/g, transformMongoProperties.userObj.products_bulkticket_code);
            data = data.replace(/~Users_products_bulkticket_roles~/g, transformMongoProperties.userObj.products_bulkticket_roles);
            data = data.replace(/~Users_products_bulkticket_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_bulkticket_settings_permissions_isAdmin);
            data = data.replace(/~Users_products_bulkticket_settings_permissions_legalAdmin~/g, transformMongoProperties.userObj.products_bulkticket_settings_permissions_legalAdmin);

            data = data.replace(/~Users_products_jobsite_code~/g, transformMongoProperties.userObj.products_jobsite_code);
            data = data.replace(/~Users_products_jobsite_roles~/g, transformMongoProperties.userObj.products_jobsite_roles);
            data = data.replace(/~Users_products_jobsite_roles2~/g, transformMongoProperties.userObj.products_jobsite_roles2);
            data = data.replace(/~Users_products_jobsite_roles3~/g, transformMongoProperties.userObj.products_jobsite_roles3);
            data = data.replace(/~Users_products_jobsite_settings_sms~/g, transformMongoProperties.userObj.products_jobsite_settings_sms);
            data = data.replace(/~Users_products_jobsite_settings_customer_code~/g, transformMongoProperties.userObj.products_jobsite_settings_customer_code);
            data = data.replace(/~Users_products_jobsite_settings_customer_name~/g, transformMongoProperties.userObj.products_jobsite_settings_customer_name);
            data = data.replace(/~Users_products_jobsite_settings_sales~/g, transformMongoProperties.userObj.products_jobsite_settings_sales);
            data = data.replace(/~Users_products_jobsite_settings_timeZone_value~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_value);
            data = data.replace(/~Users_products_jobsite_settings_timeZone_operator~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_operator);
            data = data.replace(/~Users_products_jobsite_settings_timeZone_hours~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_hours);
            data = data.replace(/~Users_products_jobsite_settings_timeZone_minutes~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_minutes);
            data = data.replace(/~Users_products_jobsite_settings_timeZone_name~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_name);
            data = data.replace(/~Users_products_jobsite_settings_timeZone_defaultRegion~/g, transformMongoProperties.userObj.products_jobsite_settings_timeZone_defaultRegion);
            data = data.replace(/~Users_products_jobsite_settings_permissions_batchWeights~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_batchWeights);
            data = data.replace(/~Users_products_jobsite_settings_permissions_truckTimes~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_truckTimes);
            data = data.replace(/~Users_products_jobsite_settings_permissions_pricing~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_pricing);
            data = data.replace(/~Users_products_jobsite_settings_permissions_mapping~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_mapping);
            data = data.replace(/~Users_products_jobsite_settings_permissions_acctInfo~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_acctInfo);
            data = data.replace(/~Users_products_jobsite_settings_permissions_docImage~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_docImage);
            data = data.replace(/~Users_products_jobsite_settings_permissions_futureOrderEmail~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_futureOrderEmail);
            data = data.replace(/~Users_products_jobsite_settings_permissions_changeCustomer~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_changeCustomer);
            data = data.replace(/~Users_products_jobsite_settings_permissions_isAdmin~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_isAdmin);
            data = data.replace(/~Users_products_jobsite_settings_permissions_timeZone~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_timeZone);
            data = data.replace(/~Users_products_jobsite_settings_permissions_advancedOrderRequest~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_advancedOrderRequest);
            data = data.replace(/~Users_products_jobsite_settings_permissions_reports~/g, transformMongoProperties.userObj.products_jobsite_settings_permissions_reports);

            data = data.replace(/~Users_products_evoadmin_code~/g, transformMongoProperties.userObj.products_evoadmin_code);
            data = data.replace(/~Users_products_evoadmin_roles~/g, transformMongoProperties.userObj.products_evoadmin_roles);
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
