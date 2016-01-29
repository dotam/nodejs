var express = require('express');
var fs = require('fs');
var app = express();
var multer = require('multer');
var upload = multer({dest: './uploads/'});
var bodyParser  = require("body-parser");
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//   	console.log(__dirname + '/uploads/');
//     callback(null, __dirname + '/uploads');
//   },
//   filename: function (req, file, callback) {
//   	console.log(file.fieldname);
//     callback(null, file.fieldname + '-' + Date.now());
//   }
// });
// var upload = multer({ storage : storage}).single('userPhoto');
app.post('/',function(req, res){
	console.log(req);
	// req.pipe(fs.createWriteStream('baby.jpg'));
	// res.write("<h1>aaaaaaaa</h1>");
	// res.end();
	// res.sendFile("index.html");

});
// app.post('/uploads', upload,function(req, res){
	// upload(req,res,function(err) {
 //        if(err) {
 //        	console.log("Error uploading file.")
 //            return res.end("Error uploading file.");
 //        }
 //        console.log("File is uploaded");
 //        console.log(req.file);
 //        res.end("File is uploaded");
 //    });

// 	console.log(req.body) // form fields
//     console.log(req.files) // form files

// });

app.post('/registration',function(req, res){
	console.log(req.body.registration) // form fields
	res.end('success');
});

app.get('/home',function(req, res){
	res.setHeader('Content-Type', 'text/html');
	res.send(fs.readFileSync('./index.html'))
});
// app.use(express.static(__dirname));

var server = app.listen(8080,"172.16.0.98",function(){
	console.log("listenning att http://%s:%s",this.address().address,this.address().port);
});