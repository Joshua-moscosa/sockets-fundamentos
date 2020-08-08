// Importaciones express
const express = require('express');
const app = express();

// Importacion path
const path = require('path');

//// **Importaciones para que socket.io funcione
const http = require('http'); ////// Importar http
const socketIO = require('socket.io'); /// Importar socket.io
let server = http.createServer(app);

/// Configs
let port = process.env.PORT || 3000;
let publicPath = path.resolve(__dirname, '../public');

/// Hacer publica la carpeta public
app.use(express.static(publicPath));

// IO = Esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Escuchando puerto ${ port }!`);
});