var ejs = require('express')
var path = require('path')
var http = require('http')

var app = ejs();

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/ui/index.html'));
});

app.get('/:filename', (request, response) => {
    response.sendFile(path.join(__dirname + "/ui/" + request.params.filename));
});

app.get('/css/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/ui/css/" + request.params.file));
});

app.get('/js/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/ui/js/" + request.params.file));
});

app.get('/projects/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/ui/projects/" + request.params.file));
});

app.get('/projects/css/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/ui/css/" + request.params.file));
});

app.get('/assets/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/ui/assets/" + request.params.file));
});


http.createServer( app ).listen( 8080 );