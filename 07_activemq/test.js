var async = require("async");

// create a queue object with concurrency 2 


var q = async.queue(function (task, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);
 
 
// assign a callback 
q.drain = function() {
    console.log('all items have been processed');
}
 
// add some items to the queue 
var aa = [{name:'hello'}];
function createaa(){
	for(i = 0; i<50; i ++){
		aa.push({name:'bar'+i});
	}
}
createaa();

// q.push({name: 'foo'}, function (err) {
//     console.log('finished processing foo');
// });
// q.push({name: 'bar'}, function (err) {
//     console.log('finished processing bar');
// });
 
// add some items to the queue (batch-wise) 
 
q.push(aa, function (err) {
	 var mqtt    = require('mqtt');
 var sleep = require('sleep');
	var client  = mqtt.connect('mqtt://localhost:1883',{username:"admin",password:"admin"});
	client.on('connect', function () {
	  //client.subscribe('topicdemo1');
	  sleep.sleep(2);
	  for(j = 0 ; j < 100; j ++){
	  	 sleep.sleep(1);
	  	client.publish('topicdemo'+i, 'Hello mqtt' +Date.now());
	  }
	  
	});
    console.log('finished processing item');
});
 
// add some items to the front of the queue 
 
q.unshift({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});