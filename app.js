var express = require('express'),
  cookieParser = require('cookie-parser'),
  expressSession = require('express-session'),
  bodyParser = require('body-parser'),
  load = require('express-load'),
  app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

let listenFunc = function () {
  console.log("Ntalk started...");
};

app.listen(3000, listenFunc());