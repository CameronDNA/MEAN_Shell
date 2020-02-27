var express = require('express');
var router = express.Router()
var request = require('request');

router.get('/Trakt', function(req, res, next) {
  const type = "code";
  const clientId = '';
  const authUrl = `https://trakt.tv/oauth/authorize?response_type=${type}&client_id=${clientId}`;
  request(authUrl,
  {
    'Content-Type': 'application/json'
   }, function (error, response, body) {
    if (error){
      res.send(err);
    } else {
      res.json(body);
    }
  })
});

router.get('/', (req, res) => {
  res.send('API works');
});

module.exports = router;
