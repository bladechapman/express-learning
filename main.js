
const express = require('express');
const expressApp = express();

const http = require('http').Server(expressApp);

expressApp.get('/foo', (req, res) => {

    console.log('I received a request a at the /foo endpoint')

    res.status(200).json({
        message: 'Foo endpoint!'
    });
});

expressApp.get('/bar', (req, res) => {

    console.log('I received a request a at the /bar endpoint')

    res.status(200).json({
        message: 'Bar endpoint!'
    });
});


http.listen(9000, '127.0.0.1', () => {

    console.log('My test server has started!');

});
