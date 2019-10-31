
var express = require('express');
var path = require("path")

var app = express();

app.use('/start',express.static(path.join(__dirname, 'start')));
app.use('/dist',express.static(path.join(__dirname, 'dist')));
app.use('/src',express.static(path.join(__dirname, 'src')));
app.use('/test',express.static(path.join(__dirname,"start/json/")));
app.listen(8080,function(){
    console.log("listen 8080")
})
module.exports = app;
