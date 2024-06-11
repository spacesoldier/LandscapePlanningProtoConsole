var express = require('express');
var app = express();
var stringReplace = require('string-replace-middleware');

var KC_URL = process.env.KC_URL || "http://localhost:8080";
var SERVICE_URL = process.env.SERVICE_URL || "http://localhost:3000/secured";

console.log("Hello there!!!");
console.log("KC_URL: "+ KC_URL);
console.log("listen port:"+process.env.PORT);
console.log("secured endpoint: "+SERVICE_URL);

app.use(stringReplace({
   'SERVICE_URL': SERVICE_URL,
   'KC_URL': KC_URL
}));
app.use(express.static('.'))

app.get('/', function(req, res) {
    console.log("user request");
    res.render('index.html');
});

app.get('/client.js', function(req, res) {
    res.render('client.js');
});

app.listen(process.env.PORT || 8080);
