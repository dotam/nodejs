var http = require('http');
var http_post = require('http-post');

// var options2 = {
//   host: 'http://127.0.0.1',
//   port: 8081,
//   path: '/listUsers'
// };

// http.post("http://172.16.0.115:3000/api/statistics", function(res) {
//   console.log("Got response: " + res.statusCode);

//   res.on("data", function(chunk) {
//     console.log("BODY: " + chunk);
//   });
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });


var options = {
  // host: '127.0.0.1',
  host: 'nodejs-tam123.rhcloud.com',
  // port: 80,
  path: '/api/statistics',
  method: 'POST',
  headers: {
          'Content-Type': 'application/json'
      }
   
};
var data = {ip:"172.16.0.111",title:"h2s",value:2};
var body = JSON.stringify(data);
var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
// req.write('data\n');
// req.write('data\n');
 // req.send(data);
 console.log(body);
req.end(body);
 

// http_post('http://127.0.0.1:3000/api/statistics/', data, function(res){
// 	res.setEncoding('utf8');
// 	res.on('data', function(chunk) {
// 		console.log(chunk);
// 	});
// });