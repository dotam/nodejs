var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {
  if (req.url === '/baby.jpg') {
    if (req.method === 'PUT') {
    	console.log('put baby----------------');
      req.pipe(fs.createWriteStream('baby3.jpg'))
    } else if (req.method === 'GET' || req.method === 'HEAD') {
      fs.createReadStream('baby.jpg').pipe(resp)
    }
  }
});
 server.listen(80,"localhost",function(){
	console.log("listenning att http://%s:%s",this.address().address,this.address().port);
});