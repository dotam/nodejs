var mqtt    = require('mqtt');
var sleep = require('sleep');
var client  = mqtt.connect('mqtt://172.16.0.69:1883',{username:"admin",password:"admin"});
//var client  = mqtt.connect('mqtt://172.16.0.69:1883',{username:"admin",password:"admin"});
 
client.on('connect', function () {
  //client.subscribe('topicdemo1');
 
  // for(i = 0 ; i < 10000; i ++){
  		  // sleep.sleep(1);
  	//client.publish('logstash', '{"name":"aaaaaaa","persion":"bbbbbbbbbbbbb"}');
  	client.publish('logstash-69', '{"macAddress":"16:dr:81:rm:13:kj","sensorType":"Gas sensor","ip":"172.11.0.15","user":"tam","group":"workplace","tenant":"free-m","title":"h2s","value":"26"}');
  // }
  
});
 
// client.on('message', function (topic, message) {
//   // message is Buffer 
//   console.log(message.toString());
//   client.end();
// });