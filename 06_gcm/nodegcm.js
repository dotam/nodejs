var gcm = require('node-gcm');
 
var message = new gcm.Message();
 
message.addData('key1', 'msg1');
message.addData('message', 'hello android wwww');
 
var regTokens = ['eWHQyEbyKb0:APA91bH6kg00pQu526UD7xFc5Xw10Nzpzr2hT93jlImjmjEggUtCfZiJeTCU7NbXQbQRwqDpCy3R8PxJw6dR_fJKFKcjViOuHQRmcrMUGYjcvhzsrdTDy44T2jGMMNN2-QPezXrgukDU'];
 
// Set up the sender with you API key 
var sender = new gcm.Sender('AIzaSyAeBoTOvbfy8s5QWnVbN5lefCp3PnIy6oU');
 
// Now the sender can be used to send messages 
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
	if(err) console.error(err);
	else 	console.log(response);
});
 
// Send to a topic, with no retry this time 
// sender.sendNoRetry(message, { topic: '/topics/tam' }, function (err, response) {
// 	if(err) console.error(err);
// 	else 	console.log(response);
// });