
////////////////////////////////////////////////
//////////////////*~  Setup ~*//////////////////
////////////////////////////////////////////////

// You don't need to mess with this

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev'); // change for production

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/src', express.static('src'));

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
