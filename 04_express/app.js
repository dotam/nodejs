var express = require('express');
var fs = require('fs');
var app = express();

app.post('/',function(req, res){
	// res.write("<h1>aaaaaaaa</h1>");
	// res.end();
	res.send("Hello pst World!");
});

app.get('/home',function(req, res){
	res.setHeader('Content-Type', 'text/html');
	res.send(fs.readFileSync('./index.html'))
});
app.use(express.static(__dirname));

var server = app.listen(8080,"localhost",function(){
	console.log("listenning att http://%s:%s",this.address().address,this.address().port);
});