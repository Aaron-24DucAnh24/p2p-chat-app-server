
/// include express ///
const express  = require('express');
const path     = require('path')

/// create app and listen server ///
const app    = express()
const server = require("http").createServer(app);
const port   = process.env.PORT || 3000;

/// app config ///
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('trust proxy', true) // for getting direct ip address of clients

/// handle request ///
const controller = require('./controller')
controller(app)

/// listen ///
server.listen(port)


