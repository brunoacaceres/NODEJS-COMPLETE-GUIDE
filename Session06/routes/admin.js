const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();


//add-request => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  });
  
  //add-request => GET
  router.post('/add-product', (req, res, next) =>  {
      console.log(req.body);
      res.redirect('/');
  });
  
module.exports = router;