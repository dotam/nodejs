var request = require('request');
var fs = require('fs');
//get info
// request('http://www.google.com',function(err,response, body){
// 	if(!err && response.statusCode == 200){
// 		// console.log(body);
// 	}
// })


// request('http://hinhanhdep.biz/wp-content/uploads/2014/12/hinh-nen-em-be-de-thuong-nhat-7.jpg',function(err,response, body){
// 	if(!err && response.statusCode == 200){
// 		console.log(body);
// 	}
// })

//read file and put to server 
// fs.createReadStream('baby.jpg').pipe(request.put('http://localhost:80/baby.jpg'));

// fs.createReadStream('baby.jpg').pipe(fs.createWriteStream('baby2.jpg'));

// get file from server and save
// request('http://localhost:80/baby.jpg').pipe(fs.createWriteStream('baby4.jpg'));

//post data to server
request.post({url:'http://172.16.0.98:8080/registration', form: {eeee:'aaaaaaaaaa'}}, function(err,httpResponse,body){
	console.log(err + '\n' + body);
});