var socket = io();

// on: Escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

/// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'joshua',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});