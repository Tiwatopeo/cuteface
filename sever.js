process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
const { Client } = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const client = new Client({
  connectionString: "postgres://jnllxhyrgazyey:3dc84e638e10c1ca9e7baf88149b0bfd979acbe4f0ea7dd2b02fddf6402b0273@ec2-54-226-18-238.compute-1.amazonaws.com:5432/d2m6n3gvn9u6u4",
  ssl: true,
});

client.connect();	

var myapp = express();
const path = require('path');
const router = express.Router();

myapp.use(function(req, res, next){ 
req.headers['content-type'] = "application/json"; 
next();
});

myapp.get('/', function(req, res) {
   res.sendFile( __dirname);
   res.sendFile(path.join(__dirname + '/school/home/index.html'));
});
const portr = process.env.PORT || 3000;

myapp.listen(portr);
