/*
*
*   janishutz.com - Backend
*       server.js
*  
*   Developed 2023 by Janis Hutz
*
*/

const ejs = require( 'express' );
const path = require( 'path' );
const http = require( 'http' );
const fs = require( 'fs' );
const favicon = require( 'serve-favicon' );

var app = ejs();

app.use( favicon( path.join( __dirname + '/ui/assets/Logo.png' ) ) ); 

app.get( '/', ( request, response ) => { 
    response.sendFile( path.join( __dirname + '/ui/index.html' ) );
});

app.get( '/:filename', ( request, response ) => {
    let fileExtension = '';
    if ( request.params.filename.slice( request.params.filename.length - 5, request.params.filename.length ) == '.html' ) {} else {
        fileExtension = '.html'
    };
    fs.readFile( path.join(__dirname + '/ui/' + request.params.filename + fileExtension ), ( err, data ) => {
        if ( err ) {
            response.status( 404 ).sendFile( path.join( __dirname + '/ui/404.html' ) );
        } else {
            response.status( 200 ).sendFile( path.join( __dirname + '/ui/' + request.params.filename + fileExtension ) );
        };
    });
});

app.get( '/css/:filename', ( request, response ) => {
    fs.readFile( path.join( __dirname + '/ui/css/' + request.params.filename ), ( err, data ) => {
        if ( err ) {
            response.status( 404 ).sendFile( path.join( __dirname + '/ui/404.html' ) );
        } else {
            response.status( 200 ).sendFile( path.join( __dirname + '/ui/css/' + request.params.filename ) );
        };
    });
});

app.get( '/js/:filename', ( request, response ) => {
    fs.readFile(path.join(__dirname + '/ui/js/' + request.params.filename), (err, data) => {
        if (err) {
            response.status( 404 ).sendFile( path.join( __dirname + '/ui/404.html' ) );
        } else {
            response.status( 200 ).sendFile( path.join( __dirname + '/ui/js/' + request.params.filename ) );
        };
    });
});

app.get( '/projects/:filename', ( request, response ) => {
    let fileExtension = '';
    if ( request.params.filename.slice( request.params.filename.length - 5, request.params.filename.length ) == '.html' ) {} else {
        fileExtension = '.html'
    };
    fs.readFile(path.join(__dirname + '/ui/projects/' + request.params.filename + fileExtension ), (err, data) => {
        if (err) {
            response.status(404).sendFile( path.join( __dirname + '/ui/404.html' ) );
        } else {
            response.status(200).sendFile( path.join( __dirname + '/ui/projects/' + request.params.filename + fileExtension ) );
        };
    });
});

app.get( '/assets/:filename', ( request, response ) => {
    fs.readFile(path.join(__dirname + '/ui/assets/' + request.params.filename), (err, data) => {
        if (err) {
            response.status(404).sendFile( path.join( __dirname + '/ui/404.html' ) );
        } else {
            response.status(200).sendFile( path.join( __dirname + '/ui/assets/' + request.params.filename ) );
        };
    });
});


// Serve 404 pages
app.use( ( req, res, next ) => {
    if ( req.query.lang == 'en' ) {
        res.status( 404 ).sendFile( path.join( __dirname + '/ui/en/errorResponses/404.html' ) );
    } else {
        res.status( 404 ).sendFile( path.join( __dirname + '/ui/de/errorResponses/404.html' ) );
    };
});


http.createServer( app ).listen( 8080 );