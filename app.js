var express = require('express'),
  cookieParser = require('cookie-parser'),
  expressSession = require('express-session'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  load = require('express-load'),
  error = require('./middleware/error');
  app = express(),
  server = require('http').createServer(app),
  socketIO = require('socket.io').listen(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.use(error.notFound);
app.use(error.serverError);

let listenFunc = function () {
  console.log("Ntalk started...");
};


socketIO.sockets.on('connection', function (client) {
  client.on('send-server', function (data) {
    var message = "<b>" + data.name + ":</b>" + data.message + "<br>";
    client.emit('send-client', message);
    client.broadcast.emit('send-client', message);
  });
});

app.listen(3000, listenFunc());