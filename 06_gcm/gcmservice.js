var gcm = require('node-gcm-service');
var message = new gcm.Message();
 
// set data with another object 
message.setDataWithObject({
	key1: 'value1'
});
 
// add new key-value to data if key does not exists 
// message.addDataWithKeyValue('key2','value2');
 
// set collapse key 
message.setCollapseKey('string');
 
// set dry run 
message.setDryRun(false);
 
// set delay while idle 
message.setDelayWhileIdle(true);

var sender = new gcm.Sender();
 
// set api key 
sender.setAPIKey('AIzaSyAeBoTOvbfy8s5QWnVbN5lefCp3PnIy6oU');

sender.sendMessage(message.toJSON(), registration_ids, true, function(err, data) {
	if (!err) {
		// do something 
		console.log("sucess \n" + data );
	} else {
		// handle error 
		console.log(err);
	}
});