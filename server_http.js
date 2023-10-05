
// Llamamos el modulo http
const http = require('http');
const hostname = '192.168.1.105'; //ip del servidor
const port = 3000; // Buena practica del 3000 hacia arriba para no interferir 

const server = http.createServer((req,res)=> {

    res.statusCode = 200; // Codigo http 200 si todo sale bien -> mandara cabecera
    res.setHeader ('Content-Type', 'text/plain');
    res.end('Hola mundo\n');

});

server.listen(port, hostname, ()=>{

    console.log('El servidor esta corriendo en http://${hostname}:${port}/');

});

