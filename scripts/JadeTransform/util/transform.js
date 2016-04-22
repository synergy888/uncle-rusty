#! /usr/bin/env node

var fs = require('fs');
var futureOrder = require('../model/futureOrder.js');
var order = require('../model/order.js');
var orderSMS = require('../model/orderSMS.js');
var reorder = require('../model/reorder.js');
var ticket = require('../model/ticket.js');
var ticketSMS = require('../model/ticketSMS.js');
var transformProperties = require('../model/transformProperties.js');

var transform = {
  /**
   * Transform .jade files by replacing values from the config file
   * @param {Object} config object
   * @param {String} .jade sourceFile
   * @param {String} destinationFile for transformed .jade sourceFile
   * @returns {true/false} boolean true/false on transform operation
   */
  transformJadeFile: function(transformProperties, sourceFile, destinationFile){
  try {
    var fs = require('fs')
    var data = fs.readFileSync(sourceFile).toString();

    if (sourceFile.indexOf('futureOrders.jade') > -1) {
      data = data.replace(/~primaryBackgroundColor~/g, transformProperties.futureOrdersObj.primaryBackgroundColor);
      data = data.replace(/~primaryTextColor~/g, transformProperties.futureOrdersObj.primaryTextColor);
      data = data.replace(/~secondaryBackgroundColor~/g, transformProperties.futureOrdersObj.secondaryBackgroundColor);
      data = data.replace(/~secondaryTextColor~/g, transformProperties.futureOrdersObj.secondaryTextColor);
      data = data.replace(/~logoName~/g, transformProperties.futureOrdersObj.logoName);
      data = data.replace(/~generalBackgroundColor~/g, transformProperties.futureOrdersObj.generalBackgroundColor);
      data = data.replace(/~localBackgroundColor~/g, transformProperties.futureOrdersObj.localBackgroundColor);
      data = data.replace(/~headerBorderColor~/g, transformProperties.futureOrdersObj.headerBorderColor);
      data = data.replace(/~headerTextColor~/g, transformProperties.futureOrdersObj.headerTextColor);
      data = data.replace(/~fontFamily~/g, transformProperties.futureOrdersObj.fontFamily);
      data = data.replace(/~primaryFontSize~/g, transformProperties.futureOrdersObj.primaryFontSize);
      data = data.replace(/~secondaryFontSize~/g, transformProperties.futureOrdersObj.secondaryFontSize);
      data = data.replace(/~neutralBorderColor~/g, transformProperties.futureOrdersObj.neutralBorderColor);
      data = data.replace(/~title~/g, transformProperties.futureOrdersObj.title);
    }
    else if (sourceFile.indexOf('order.jade') > -1) {
      data = data.replace(/~primaryBackgroundColor~/g, transformProperties.orderObj.primaryBackgroundColor);
      data = data.replace(/~primaryTextColor~/g, transformProperties.orderObj.primaryTextColor);
      data = data.replace(/~secondaryBackgroundColor~/g, transformProperties.orderObj.secondaryBackgroundColor);
      data = data.replace(/~secondaryTextColor~/g, transformProperties.orderObj.secondaryTextColor);
      data = data.replace(/~logoName~/g, transformProperties.orderObj.logoName);
      data = data.replace(/~generalBackgroundColor~/g, transformProperties.orderObj.generalBackgroundColor);
      data = data.replace(/~localBackgroundColor~/g, transformProperties.orderObj.localBackgroundColor);
      data = data.replace(/~headerBorderColor~/g, transformProperties.orderObj.headerBorderColor);
      data = data.replace(/~headerTextColor~/g, transformProperties.orderObj.headerTextColor);
      data = data.replace(/~fontFamily~/g, transformProperties.orderObj.fontFamily);
      data = data.replace(/~primaryFontSize~/g, transformProperties.orderObj.primaryFontSize);
      data = data.replace(/~secondaryFontSize~/g, transformProperties.orderObj.secondaryFontSize);
      data = data.replace(/~title~/g, transformProperties.orderObj.title);
    }
    else if (sourceFile.indexOf('order.sms.jade') > -1) {
    }
    else if (sourceFile.indexOf('reorder.jade') > -1) {
      data = data.replace(/~primaryBackgroundColor~/g, transformProperties.reorderObj.primaryBackgroundColor);
      data = data.replace(/~primaryTextColor~/g, transformProperties.reorderObj.primaryTextColor);
      data = data.replace(/~secondaryBackgroundColor~/g, transformProperties.reorderObj.secondaryBackgroundColor);
      data = data.replace(/~secondaryTextColor~/g, transformProperties.reorderObj.secondaryTextColor);
      data = data.replace(/~logoName~/g, transformProperties.reorderObj.logoName);
      data = data.replace(/~generalBackgroundColor~/g, transformProperties.reorderObj.generalBackgroundColor);
      data = data.replace(/~localBackgroundColor~/g, transformProperties.reorderObj.localBackgroundColor);
      data = data.replace(/~headerBorderColor~/g, transformProperties.reorderObj.headerBorderColor);
      data = data.replace(/~headerTextColor~/g, transformProperties.reorderObj.headerTextColor);
      data = data.replace(/~fontFamily~/g, transformProperties.reorderObj.fontFamily);
      data = data.replace(/~primaryFontSize~/g, transformProperties.reorderObj.primaryFontSize);
      data = data.replace(/~secondaryFontSize~/g, transformProperties.reorderObj.secondaryFontSize);
      data = data.replace(/~title~/g, transformProperties.reorderObj.title);
    }
    else if (sourceFile.indexOf('ticket.jade') > -1) {
      data = data.replace(/~primaryBackgroundColor~/g, transformProperties.ticketObj.primaryBackgroundColor);
      data = data.replace(/~primaryTextColor~/g, transformProperties.ticketObj.primaryTextColor);
      data = data.replace(/~secondaryBackgroundColor~/g, transformProperties.ticketObj.secondaryBackgroundColor);
      data = data.replace(/~secondaryTextColor~/g, transformProperties.ticketObj.secondaryTextColor);
      data = data.replace(/~logoName~/g, transformProperties.ticketObj.logoName);
      data = data.replace(/~generalBackgroundColor~/g, transformProperties.ticketObj.generalBackgroundColor);
      data = data.replace(/~localBackgroundColor~/g, transformProperties.ticketObj.localBackgroundColor);
      data = data.replace(/~headerBorderColor~/g, transformProperties.ticketObj.headerBorderColor);
      data = data.replace(/~headerTextColor~/g, transformProperties.ticketObj.headerTextColor);
      data = data.replace(/~fontFamily~/g, transformProperties.ticketObj.fontFamily);
      data = data.replace(/~primaryFontSize~/g, transformProperties.ticketObj.primaryFontSize);
      data = data.replace(/~secondaryFontSize~/g, transformProperties.ticketObj.secondaryFontSize);
      data = data.replace(/~title~/g, transformProperties.ticketObj.title);
    }
    else if (sourceFile.indexOf('ticket.sms.jade') > -1) {
    }

//    console.log(data);
    this.isDirectory = true;
    try
    {
      var fs = require('fs');
      if (fs.statSync(transformProperties.output_folder).isDirectory() === false){
        this.isDirectory = false;
      }
    }
    catch (err)
    {
      this.isDirectory = false;
    }

    if (this.isDirectory === false) {
      fs.mkdirSync(transformProperties.output_folder, 0766, function (err) {
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
},

/**
 * populateTransformObjects - read from config file or mongo db and populate transform objects
 * @param {Object} config object
 * @returns {Object} transformProperties
 */
populateTransformObjects: function(config){
  try {
      futureOrder.jade_language_folder = config.futureorders_jade_language_folder;
      futureOrder.primaryBackgroundColor = config.futureorders_primaryBackgroundColor;
      futureOrder.primaryTextColor = config.futureorders_primaryTextColor;
      futureOrder.secondaryBackgroundColor = config.futureorders_secondaryBackgroundColor;
      futureOrder.secondaryTextColor = config.futureorders_secondaryTextColor;
      futureOrder.logoName = config.futureorders_logoName;
      futureOrder.generalBackgroundColor = config.futureorders_generalBackgroundColor;
      futureOrder.localBackgroundColor = config.futureorders_localBackgroundColor;
      futureOrder.headerBorderColor = config.futureorders_headerBorderColor;
      futureOrder.headerTextColor = config.futureorders_headerTextColor;
      futureOrder.fontFamily = config.futureorders_fontFamily;
      futureOrder.primaryFontSize = config.futureorders_primaryFontSize;
      futureOrder.secondaryFontSize = config.futureorders_secondaryFontSize;
      futureOrder.neutralBorderColor = config.futureorders_neutralBorderColor;
      futureOrder.title = config.futureorders_title;

      order.jade_language_folder = config.order_jade_language_folder;
      order.primaryBackgroundColor = config.order_primaryBackgroundColor;
      order.primaryTextColor = config.order_primaryTextColor;
      order.secondaryBackgroundColor = config.order_secondaryBackgroundColor;
      order.secondaryTextColor = config.order_secondaryTextColor;
      order.logoName = config.order_logoName;
      order.generalBackgroundColor = config.order_generalBackgroundColor;
      order.localBackgroundColor = config.order_localBackgroundColor;
      order.headerBorderColor = config.order_headerBorderColor;
      order.headerTextColor = config.order_headerTextColor;
      order.fontFamily = config.order_fontFamily;
      order.primaryFontSize = config.order_primaryFontSize;
      order.secondaryFontSize = config.order_secondaryFontSize;
      order.title = config.order_title;

      orderSMS.jade_language_folder = config.order_sms_jade_language_folder;

      reorder.jade_language_folder = config.reorder_jade_language_folder;
      reorder.primaryBackgroundColor = config.reorder_primaryBackgroundColor;
      reorder.primaryTextColor = config.reorder_primaryTextColor;
      reorder.secondaryBackgroundColor = config.reorder_secondaryBackgroundColor;
      reorder.secondaryTextColor = config.reorder_secondaryTextColor;
      reorder.logoName = config.reorder_logoName;
      reorder.generalBackgroundColor = config.reorder_generalBackgroundColor;
      reorder.localBackgroundColor = config.reorder_localBackgroundColor;
      reorder.headerBorderColor = config.reorder_headerBorderColor;
      reorder.headerTextColor = config.reorder_headerTextColor;
      reorder.fontFamily = config.reorder_fontFamily;
      reorder.primaryFontSize = config.reorder_primaryFontSize;
      reorder.secondaryFontSize = config.reorder_secondaryFontSize;
      reorder.title = config.reorder_title;

      ticket.jade_language_folder = config.ticket_jade_language_folder;
      ticket.primaryBackgroundColor = config.ticket_primaryBackgroundColor;
      ticket.primaryTextColor = config.ticket_primaryTextColor;
      ticket.secondaryBackgroundColor = config.ticket_secondaryBackgroundColor;
      ticket.secondaryTextColor = config.ticket_secondaryTextColor;
      ticket.logoName = config.ticket_logoName;
      ticket.generalBackgroundColor = config.ticket_generalBackgroundColor;
      ticket.localBackgroundColor = config.ticket_localBackgroundColor;
      ticket.headerBorderColor = config.ticket_headerBorderColor;
      ticket.headerTextColor = config.ticket_headerTextColor;
      ticket.fontFamily = config.ticket_fontFamily;
      ticket.primaryFontSize = config.ticket_primaryFontSize;
      ticket.secondaryFontSize = config.ticket_secondaryFontSize;
      ticket.title = config.ticket_title;

      ticketSMS.jade_language_folder = config.ticket_sms_jade_language_folder;

      transformProperties.futureOrdersObj = futureOrder;
      transformProperties.orderObj = order;
      transformProperties.orderSmsObj = orderSMS;
      transformProperties.reorderObj = reorder;
      transformProperties.ticketObj = ticket;
      transformProperties.ticketSmsObj = ticketSMS;

      transformProperties.mongoHost = config.mongoHost;
      transformProperties.mongoPort = config.mongoPort;

      transformProperties.company_code = config.company_code;
      transformProperties.bucket_name = config.bucket_name;
      transformProperties.s3_userid = config.s3_userid;
      transformProperties.accessKeyId = config.accessKeyId;
      transformProperties.secretAccessKey = config.secretAccessKey;
      transformProperties.s3_folder = config.s3_folder;
      transformProperties.output_to_folder_only = config.output_to_folder_only;
      transformProperties.input_folder = config.input_folder;
      transformProperties.output_folder = config.output_folder;
      transformProperties.push_already_rendered_to_s3 = config.push_already_rendered_to_s3;
      transformProperties.new_or_existing_customer = config.new_or_existing_customer;

      return transformProperties;
  }
  catch (er)
  {
    console.log('populateTransformObjects error: ', er.stack);
    return undefined;
  }

  return undefined;
}

};

module.exports = transform;
