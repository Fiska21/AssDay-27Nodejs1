var express = require('express')
var app = express()

app.get('/name', function(req,res){
res.send("Fiska Hendiyaningsih");
console.log(req.query);
})
app.listen(3000)
