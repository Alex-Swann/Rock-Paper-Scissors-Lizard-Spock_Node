// jshint esversion:6
import express from 'express';
import nunjucks from 'nunjucks';
import sass from 'node-sass-middleware';
import game from './routes/game';

;(function(exports){
  'use strict';

  const app = express(),
        port = process.env.PORT || 4000;

  app.set('view engine', 'njk');

  nunjucks.configure(__dirname + '/views', {
    watch: true,
    express: app
  });

  app.use(sass({
    src: __dirname + '/sass',
    dest:__dirname + '/public',
    outputStyle: 'compressed'
  }));

  app.use(express.static('./app/public'));

  app.use('/game', game);

  app.get('*', (req, res) => {
    res.redirect('/game');
  });

  app.listen(port, () => {
    console.log("\x1b[36mServer Running\x1b[0m\nhttp://localhost:" + port + "\n");
  });

  module.exports = app;

})(this);
