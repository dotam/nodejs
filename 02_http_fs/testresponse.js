var express = require("express");
var ap = express();
var router = ap.Router();

// admin.get('http://172.16.0.115:3000/api/statistics/', function (req, res) {
//   console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
//   res.send('Admin Homepage');
// })

router.post("http://127.0.0.1:3000/api/statistics/",function(req,res){

        console.log('sssssssssssss');
        console.log(res.status);
        console.log(res.body);
        //console.log(req.body.ip, req.body.title, req.body.value);
         
    });