// var async = require("async");


function createSensor(i){
	var mqtt    = require('mqtt');
var sleep = require('sleep');
	console.log('9999999999999999');
	var client  = mqtt.connect('mqtt://localhost:1883',{username:"admin",password:"admin"});
	client.on('connect', function () {
	  //client.subscribe('topicdemo1');
	  sleep.sleep(2);
	  for(j = 0 ; j < 1000000; j ++){
	  	 sleep.sleep(2);
	  	client.publish('topicdemo'+i, 'Hello mqtt' +Date.now());
	  }
	  
	});
	
}
function server(){
	for(i = 0 ; i < 3; i ++){
		console.log("..............................................................................")
		createSensor(i);
	}
}
function server1(){
	for(i = 3 ; i < 6; i ++){
		console.log("++++++++++++++++++++++++++++++++++++++++++")
		createSensor(i);
	}
}
server();
server1();

// // generate 5 users 
// async.times(5, function(n, next){
//     createUser(n, function(err, user) {
//       next(err, user)
//     })
// }, function(err, users) {
//   // we should now have 5 users 
// });