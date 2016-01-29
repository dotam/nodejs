var request = require('request');
var fs = require('fs');
var data = {message: "hello nodejs"};
request('http://www.google.com',function(err,response, body){
	if(!err && response.statusCode == 200){
		// console.log(body);
	}
})
