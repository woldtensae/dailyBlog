const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();


//API for interacting with mongo db 
const api = require('./server/routes/api');

//parsing information 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Dist location
app.use(express.static(path.join(__dirname,'dist')));

//api location
app.use('/api', api);

//any other request should be handled by angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//set port
const port = process.env.port || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:  ${port}`));



