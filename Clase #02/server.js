const http = require('node:http');

let cant = 0

const server = http.createServer(function (request, response) {
    if (request.url === '/favicon.ico') {
        response.end()
        return;
    }

    if (request.url === '/') {
        response.write('Es la pagian principal');
        response.end();
    }
    else if (request.url === '/hola') {
        response.write('Hola que haces');
        response.end();
    }
    else if (request.url === '/visitas') {
        cant++
        response.write(`
            <html>
                <body>
                    <p>Hola, te has visitado <strong>${cant}</strong> veces</p>
                </body>
            </html>
        `); // Template String // Template Literals
        response.end();
    }
    else if (request.url === '/repeticiones') {

        for (let i = 0; i < 10; i++) {
            response.write('Hola');
        }
        response.end();
    }
    else {
        response.write('404 not found');
        response.end();
    }
})

server.listen(3000)