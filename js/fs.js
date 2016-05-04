var fs = require('fs');
fs.readFile('config.json',
    function (ee, textd) {
        if (ee) {
            console.error('Error while reading config file');
        } else {
            try {
                const obj = JSON.parse(textd);
                //console.log(JSON.stringify(obj, null, 4));
            } catch (e) {
                //console.error('Invalid JSON in file');
            }
        }
    });
 
//console.log(p);

// import {readFile} from 'fs';
var readFile = require('fs');

function readFilePromisified(filename) {
    return new Promise(
        function (resolve, reject) {
            fs.readFile(filename, { encoding: 'utf8' },
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
}

readFilePromisified("a.js")
.then(text => {
    // console.log(text);
})
.catch(error => {
    // console.log(error);
})

var a = function(function(){
	console.log('2');
}){
	console.log('1');
}
a();