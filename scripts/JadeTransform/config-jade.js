var path = require('path');

var config = {};

config.mongoHost = 'localhost';
config.mongoPort = 27017;

config.company_code = 'newco';
config.bucket_name = 'mobileconnect';
config.s3_userid = 'developer';
config.accessKeyId = 'AKIAII6JK7U6MK6LUVCA';
config.secretAccessKey = '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';
config.s3_folder = './asset_test/';
config.output_to_folder_only = 'y';
config.input_folder = 'jade_english';
config.output_folder = 'jade_english_out';
config.push_already_rendered_to_s3 = 'n';

config.products='y'
config.ticketsection='n'

config.futureorders_jade_language_folder = 'jade_english';
var curDir = config.jadePath = path.join(__dirname, config.futureorders_jade_language_folder);
config.futureorders_primaryBackgroundColor = '#FF0000';
config.futureorders_primaryTextColor = '#000000';
config.futureorders_secondaryBackgroundColor = '#393C45';
config.futureorders_secondaryTextColor = '#';
config.futureorders_logoName = 'cid:concrite.png';
config.futureorders_generalBackgroundColor = '#ffffff';
config.futureorders_localBackgroundColor = '#ffffff';
config.futureorders_headerBorderColor = '#eee';
config.futureorders_headerTextColor = '#393C45';
config.futureorders_fontFamily = 'Arial';
config.futureorders_primaryFontSize = '14px';
config.futureorders_secondaryFontSize = '11px';
config.futureorders_neutralBorderColor = 'gray';
config.futureorders_title = 'Upcoming Orders';

config.order_jade_language_folder = 'jade_english';
config.order_primaryBackgroundColor = '#FF0000';
config.order_primaryTextColor = '#000000';
config.order_secondaryBackgroundColor = '#393C45';
config.order_secondaryTextColor = '#';
config.order_logoName = 'cid:concrite.png';
config.order_generalBackgroundColor = '#ffffff';
config.order_localBackgroundColor = '#ffffff';
config.order_headerBorderColor = '#eee';
config.order_headerTextColor = '#393C45';
config.order_fontFamily = 'Arial';
config.order_primaryFontSize = '14px';
config.order_secondaryFontSize = '11px';
config.order_title = 'Order: ';

config.order_sms_jade_language_folder = 'jade_english';

config.reorder_jade_language_folder = 'jade_english';
config.reorder_primaryBackgroundColor = '#FF0000';
config.reorder_primaryTextColor = '#000000';
config.reorder_secondaryBackgroundColor = '#393C45';
config.reorder_secondaryTextColor = '#';
config.reorder_logoName = 'cid:concrite.png';
config.reorder_generalBackgroundColor = '#ffffff';
config.reorder_localBackgroundColor = '#ffffff';
config.reorder_headerBorderColor = '#eee';
config.reorder_headerTextColor = '#393C45';
config.reorder_fontFamily = 'Arial';
config.reorder_primaryFontSize = '14px';
config.reorder_secondaryFontSize = '11px';
config.reorder_title = 'Order Request: '

config.ticket_jade_language_folder = 'jade_english';
config.ticket_primaryBackgroundColor = '#FF0000';
config.ticket_primaryTextColor = '#000000';
config.ticket_secondaryBackgroundColor = '#393C45';
config.ticket_secondaryTextColor = '#';
config.ticket_logoName = 'cid:concrite.png';
config.ticket_generalBackgroundColor = '#ffffff';
config.ticket_localBackgroundColor = '#ffffff';
config.ticket_headerBorderColor = '#eee';
config.ticket_headerTextColor = '#393C45';
config.ticket_fontFamily = 'Arial';
config.ticket_primaryFontSize = '14px';
config.ticket_secondaryFontSize = '11px';
config.ticket_title = 'Ticket: '

config.ticket_sms_jade_language_folder = 'jade_english';

module.exports = config;