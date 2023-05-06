
/// import express
const express  = require('express');

/// create app and listen server
const app    = express()
const server = require("http").createServer(app);
const port   = 3000;

/// app config
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/// handle request
const controller = require('./controller')
controller(app)

/// listen
server.listen(port)
