var express=require('express');
var routes = require('./routes/mainRoute');
var routes1 = require('./routes/movieRoute');
var routes2 = require('./routes/mappingRoute');
var routes3 = require('./routes/paymentRoute');
var routes4 = require('./routes/reviewRoute');

var bodyParser=require('body-parser');

var app=express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/api',routes);
app.use('/movieapi', routes1);
app.use('/mappingapi', routes2);
app.use('/paymentapi', routes3);
app.use('/reviewapi', routes4);

if (app.get('env')==='development') {
var webpackMiddleware=require("webpack-dev-middleware");
var webpack=require('webpack');
var config = require('./webpack.config');
app.use(webpackMiddleware(webpack(config),
{
  publicPath: "/build",
  headers: {"X-Custom-Webpack-Header":"yes"},
  stats: {
    colors: true
  }
}));
}

app.listen(8000,function()
{
  console.log('server is listening on port 8000');
});
