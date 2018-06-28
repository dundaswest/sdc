/*const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const pool = new pg.Pool({
  user: 'jo-eunbyeol',
  host: 'localhost',
  database: 'jamie',
  port: '5432'
});


pool.query(`select from house where id < 10`, (err, res) => {
  console.log(res.rows[0])
  console.log(JSON.stringify(res.rows));
  pool.end();
});
*/

var express = require('express');
var router = express.Router();

var db = require('./queries');


router.get('/api/puppies', db.getAllPuppies);
//router.get('/api/puppies/:id', db.getSinglePuppy);
//router.post('/api/puppies', db.createPuppy);
//router.put('/api/puppies/:id', db.updatePuppy);
//router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
