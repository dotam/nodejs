var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.get('/home',function(req,res){
  res.send("hello");
  io.emit('message','Hello from home');
});

io.on('connection', function(socket){
  console.log('a user connected');
   socket.broadcast.emit('message','Hi every body,i\'m ' + socket.id);
   socket.emit('message','welcome '+socket.id);

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});