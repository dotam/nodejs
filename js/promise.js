var a = function (){
	return 'say hello';
}
var b = a();
b.then(function(str){
	console.log('---'+ str);
})