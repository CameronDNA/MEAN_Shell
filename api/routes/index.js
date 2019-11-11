// Tables/Schemas
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var BooksDb = require('../models/db.js');
var Books = require('../models/Books.js');

router.get('/', (req, res) => {
  res.send('API works');
});

/* Get All Books */
router.get('/Books', function(req, res, next){
  Books.find({DeletedDate : null},function(err, post){
      if (err){
         res.send(err);
      } else {
         res.json(post);
      }
  }).sort({ Name : 1 });
});

/* GET SINGLE Book BY ID */
router.get('/Books/:id', function(req, res, next) {
  Books.findById(req.params.id, function (err, post) {
  if (err) return next(err);
  res.json(post);
});
});

/* SAVE Books */
router.post('/Books/', function(req, res, next) {
  Books.create(req.body, function (err, post) {
  if (err) return next(err);
  res.json(post);
});
});

/* UPDATE Books full */
router.put('/Books/:id', function(req, res, next) {
  Books.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
  if (err) return next(err);
  res.json(post);
});
});

/* DELETE Books */
router.delete('/Books/:id', function(req, res, next) {
  Books.findByIdAndRemove(req.params.id, req.body, function (err, post) {
  if (err) return next(err);
  res.json(post);
});
});

module.exports = router;
