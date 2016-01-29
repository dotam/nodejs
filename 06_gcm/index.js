var GCM = require('gcm').GCM;

var apiKey = 'AIzaSyAeBoTOvbfy8s5QWnVbN5lefCp3PnIy6oU';
var gcm = new GCM(apiKey);

var message = {
    // registration_id: 'Device registration id', // required
    // collapse_key: 'Collapse key', 
    // 'data.key1': 'value1',
    // 'data.key2': 'value2'
    message: 'hello wviet'
};

gcm.send(message, function(err, messageId){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Sent with message ID: ", messageId);
    }
})