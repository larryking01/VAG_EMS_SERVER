"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var port = 8000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Welcome to typescript');
});
app.listen(port, function () {
    console.log('server running on port ' + port);
});
