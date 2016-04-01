var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1883',{username:"admin",password:"admin"});
 
client.on('connect', function () {

		 client.subscribe('topicdemo1');
	 
 
  //client.publish('topicdemo1', 'Hello mqtt');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  //client.end();
});