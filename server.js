'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({dest: 'uploads/'});

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse',upload.single('upfile'), function(req, res){
  let { originalname, mimetype, size} = req.file;
  res.json({
    name: originalname,
    type: mimetype,
    size: size
  })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
