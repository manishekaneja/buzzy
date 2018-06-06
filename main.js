const express = require('express');
const path = require('path');

const app = express();

//===========================================================================================================
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const port = process.env.PORT || "4000";
app.listen(port, function () {
    console.log("Server Running at :" + port);
});
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
});
 


