var http = require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');
var index = fs.readFileSync('./index.html', 'utf8');

var server = http.createServer(function(request, response) {
	// read request and response request data
    response.write(index);
  var value = {};
 	     if(request.method=='POST') {
            var body='';
            request.on('data', function (data) {
                body +=data;
            });
            request.on('end',function(){
                var POST =  qs.parse(body);
                value = POST
                console.log(POST);
            });
	    }
	    else if(request.method=='GET') {
	        var url_parts = url.parse(request.url,true);
	        value = url_parts.query;
	        console.log(url_parts.query);
	    }
	    response.end(value.a)

});
server.listen(8081, 'localhost');

// // create a server with no callback bound to 'request'
// var server = http.createServer().listen(8080, 'localhost');
// // bind a listener to the 'request' event
// server.on('request', function(req, res) {
//   // do something with the request
// });