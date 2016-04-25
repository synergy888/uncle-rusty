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
            if (sourceFile.indexOf('productDefinitions.json') > -1) {
                data = data.replace(/~productDefinitions_commerce_code~/g, transformMongoProperties.productDefinitionObj.commerce_code);
                data = data.replace(/~productDefinitions_commerce_name~/g, transformMongoProperties.productDefinitionObj.commerce_name);
                data = data.replace(/~productDefinitions_commerce_description~/g, transformMongoProperties.productDefinitionObj.commerce_description);
                data = data.replace(/~productDefinitions_commerce_roles~/g, transformMongoProperties.productDefinitionObj.commerce_roles);
                data = data.replace(/~productDefinitions_commerce_roles2~/g, transformMongoProperties.productDefinitionObj.commerce_roles2);
                data = data.replace(/~productDefinitions_commerce_roles3~/g, transformMongoProperties.productDefinitionObj.commerce_roles3);
                data = data.replace(/~productDefinitions_commerce_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.commerce_platforms_desktop);
                data = data.replace(/~productDefinitions_commerce_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.commerce_platforms_mobile);
                data = data.replace(/~productDefinitions_commerce_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.commerce_platforms_tablet);

                data = data.replace(/~productDefinitions_ticket_code~/g, transformMongoProperties.productDefinitionObj.ticket_code);
                data = data.replace(/~productDefinitions_ticket_name~/g, transformMongoProperties.productDefinitionObj.ticket_name);
                data = data.replace(/~productDefinitions_ticket_description~/g, transformMongoProperties.productDefinitionObj.ticket_description);
                data = data.replace(/~productDefinitions_ticket_roles~/g, transformMongoProperties.productDefinitionObj.ticket_roles);
                data = data.replace(/~productDefinitions_ticket_roles2~/g, transformMongoProperties.productDefinitionObj.ticket_roles2);
                data = data.replace(/~productDefinitions_ticket_roles3~/g, transformMongoProperties.productDefinitionObj.ticket_roles3);
                data = data.replace(/~productDefinitions_ticket_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.ticket_platforms_desktop);
                data = data.replace(/~productDefinitions_ticket_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.ticket_platforms_mobile);
                data = data.replace(/~productDefinitions_ticket_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.ticket_platforms_tablet);

                data = data.replace(/~productDefinitions_bulkticket_code~/g, transformMongoProperties.productDefinitionObj.bulkticket_code);
                data = data.replace(/~productDefinitions_bulkticket_name~/g, transformMongoProperties.productDefinitionObj.bulkticket_name);
                data = data.replace(/~productDefinitions_bulkticket_description~/g, transformMongoProperties.productDefinitionObj.bulkticket_description);
                data = data.replace(/~productDefinitions_bulkticket_roles~/g, transformMongoProperties.productDefinitionObj.bulkticket_roles);
                data = data.replace(/~productDefinitions_bulkticket_roles2~/g, transformMongoProperties.productDefinitionObj.bulkticket_roles2);
                data = data.replace(/~productDefinitions_bulkticket_roles3~/g, transformMongoProperties.productDefinitionObj.bulkticket_roles3);
                data = data.replace(/~productDefinitions_bulkticket_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.bulkticket_platforms_desktop);
                data = data.replace(/~productDefinitions_bulkticket_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.bulkticket_platforms_mobile);
                data = data.replace(/~productDefinitions_bulkticket_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.bulkticket_platforms_tablet);

                data = data.replace(/~productDefinitions_jobsite_code~/g, transformMongoProperties.productDefinitionObj.jobsite_code);
                data = data.replace(/~productDefinitions_jobsite_name~/g, transformMongoProperties.productDefinitionObj.jobsite_name);
                data = data.replace(/~productDefinitions_jobsite_description~/g, transformMongoProperties.productDefinitionObj.jobsite_description);
                data = data.replace(/~productDefinitions_jobsite_roles~/g, transformMongoProperties.productDefinitionObj.jobsite_roles);
                data = data.replace(/~productDefinitions_jobsite_roles2~/g, transformMongoProperties.productDefinitionObj.jobsite_roles2);
                data = data.replace(/~productDefinitions_jobsite_roles3~/g, transformMongoProperties.productDefinitionObj.jobsite_roles3);
                data = data.replace(/~productDefinitions_jobsite_roles4~/g, transformMongoProperties.productDefinitionObj.jobsite_roles4);
                data = data.replace(/~productDefinitions_jobsite_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.jobsite_platforms_desktop);
                data = data.replace(/~productDefinitions_jobsite_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.jobsite_platforms_mobile);
                data = data.replace(/~productDefinitions_jobsite_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.jobsite_platforms_tablet);
                data = data.replace(/"~productDefinitions_jobsite_settings~"/g, transformMongoProperties.productDefinitionObj.jobsite_settings);

                data = data.replace(/~productDefinitions_supply_code~/g, transformMongoProperties.productDefinitionObj.supply_code);
                data = data.replace(/~productDefinitions_supply_name~/g, transformMongoProperties.productDefinitionObj.supply_name);
                data = data.replace(/~productDefinitions_supply_description~/g, transformMongoProperties.productDefinitionObj.supply_description);
                data = data.replace(/~productDefinitions_supply_roles_code~/g, transformMongoProperties.productDefinitionObj.supply_roles_code);
                data = data.replace(/~productDefinitions_supply_roles_name~/g, transformMongoProperties.productDefinitionObj.supply_roles_name);
                data = data.replace(/~productDefinitions_supply_roles_category~/g, transformMongoProperties.productDefinitionObj.supply_roles_category);
                data = data.replace(/~productDefinitions_supply_roles_code2~/g, transformMongoProperties.productDefinitionObj.supply_roles_code2);
                data = data.replace(/~productDefinitions_supply_roles_name2~/g, transformMongoProperties.productDefinitionObj.supply_roles_name2);
                data = data.replace(/~productDefinitions_supply_roles_category2~/g, transformMongoProperties.productDefinitionObj.supply_roles_category2);
                data = data.replace(/~productDefinitions_supply_roles_code3~/g, transformMongoProperties.productDefinitionObj.supply_roles_code3);
                data = data.replace(/~productDefinitions_supply_roles_name3~/g, transformMongoProperties.productDefinitionObj.supply_roles_name3);
                data = data.replace(/~productDefinitions_supply_roles_category3~/g, transformMongoProperties.productDefinitionObj.supply_roles_category3);
                data = data.replace(/~productDefinitions_supply_roles_code4~/g, transformMongoProperties.productDefinitionObj.supply_roles_code4);
                data = data.replace(/~productDefinitions_supply_roles_name4~/g, transformMongoProperties.productDefinitionObj.supply_roles_name4);
                data = data.replace(/~productDefinitions_supply_roles_category4~/g, transformMongoProperties.productDefinitionObj.supply_roles_category4);
                data = data.replace(/~productDefinitions_supply_roles_code5~/g, transformMongoProperties.productDefinitionObj.supply_roles_code5);
                data = data.replace(/~productDefinitions_supply_roles_name5~/g, transformMongoProperties.productDefinitionObj.supply_roles_name5);
                data = data.replace(/~productDefinitions_supply_roles_category5~/g, transformMongoProperties.productDefinitionObj.supply_roles_category5);
                data = data.replace(/~productDefinitions_supply_roles_code6~/g, transformMongoProperties.productDefinitionObj.supply_roles_code6);
                data = data.replace(/~productDefinitions_supply_roles_name6~/g, transformMongoProperties.productDefinitionObj.supply_roles_name6);
                data = data.replace(/~productDefinitions_supply_roles_category6~/g, transformMongoProperties.productDefinitionObj.supply_roles_category6);
                data = data.replace(/~productDefinitions_supply_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.supply_platforms_desktop);
                data = data.replace(/~productDefinitions_supply_settings_vendor~/g, transformMongoProperties.productDefinitionObj.supply_settings_vendor);
                data = data.replace(/~productDefinitions_supply_settings_permissions_configure~/g, transformMongoProperties.productDefinitionObj.supply_settings_permissions_configure);
                data = data.replace(/~productDefinitions_supply_settings_permissions_plan~/g, transformMongoProperties.productDefinitionObj.supply_settings_permissions_plan);
                data = data.replace(/~productDefinitions_supply_settings_permissions_alias~/g, transformMongoProperties.productDefinitionObj.supply_settings_permissions_alias);
                data = data.replace(/~productDefinitions_supply_settings_locations~/g, transformMongoProperties.productDefinitionObj.supply_settings_locations);
                data = data.replace(/~productDefinitions_supply_appAdmin~/g, transformMongoProperties.productDefinitionObj.supply_appAdmin);

                data = data.replace(/~productDefinitions_evoadmin_code~/g, transformMongoProperties.productDefinitionObj.evoadmin_code);
                data = data.replace(/~productDefinitions_evoadmin_name~/g, transformMongoProperties.productDefinitionObj.evoadmin_name);
                data = data.replace(/~productDefinitions_evoadmin_description~/g, transformMongoProperties.productDefinitionObj.evoadmin_description);
                data = data.replace(/~productDefinitions_evoadmin_roles~/g, transformMongoProperties.productDefinitionObj.evoadmin_roles);
                data = data.replace(/~productDefinitions_evoadmin_roles2~/g, transformMongoProperties.productDefinitionObj.evoadmin_roles2);
                data = data.replace(/~productDefinitions_evoadmin_platforms_desktop~/g, transformMongoProperties.productDefinitionObj.evoadmin_platforms_desktop);
                data = data.replace(/~productDefinitions_evoadmin_platforms_mobile~/g, transformMongoProperties.productDefinitionObj.evoadmin_platforms_mobile);
                data = data.replace(/~productDefinitions_evoadmin_platforms_tablet~/g, transformMongoProperties.productDefinitionObj.evoadmin_platforms_tablet);
                data = data.replace(/"~productDefinitions_evoadmin_settings~"/g, transformMongoProperties.productDefinitionObj.evoadmin_settings);
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
