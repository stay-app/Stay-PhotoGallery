var os = require('os');
var exec = require('child_process').exec;

console.log("Creating PhotoGallery schema in postgresql...")
exec(`psql -U ${os.userInfo().username} -d photogallery -a -f './database/schema.sql'`);
