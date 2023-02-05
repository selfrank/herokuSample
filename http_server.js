const express = require('express');
const app     = express();

app.get('/', function(req,res){
    res.send('hello world');
});

app.listen(3000, function(){
    console.log('Running on port 3000')
});