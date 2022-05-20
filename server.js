const express = require('express');
var http = require('http');
var app = require('./config/express')(app);
require('./config/passport')();
//require('./config/database')('mongodb://localhost:3000/contatos');

const url =
   'mongodb+srv://dswa5:dswa5@cluster0.3fuxs.mongodb.net/ifsp?retryWrites=true&w=majority';

require('./config/database.js')(url);

http.createServer(app).listen(app.get('port'), function () {
   console.log('Express Server escutando na porta ' + app.get('port'));
});