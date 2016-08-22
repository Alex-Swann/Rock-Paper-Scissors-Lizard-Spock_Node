// jshint esversion:6
import express from 'express';

(function(exports) {
  'use strict';

  var router = express.Router();

  router.get('/', (req, res) => {
    res.render('game/index', {

    });
  });

  module.exports = router;

})(this);
