var fs = require('fs');
var sleep = require('sleep');
var data = fs.readFileSync('./http.js', 'utf8');
// wait for the result, then use it
var data2 = fs.readFile('./filesystem.js','utf8',function(err,data){
	console.log('---');
	data3 = data;
});
// console.log(data2);
// console.log(data);
fs.readFile('./http.js','utf8',function(err,data){
	sleep.sleep(3)
	console.log(data3);
});