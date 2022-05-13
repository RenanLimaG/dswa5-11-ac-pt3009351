var http = require('http');
var app = require('./config/express')();
require('./config/express')(app);
require('./config/passport')();
require('./config/database')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server escutando na porta ' +
    app.get('port'));
});
const url = 'mongodb+srv://dswa5:dswa5@cluster0.3fuxs.mongodb.net/Cluster0?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});