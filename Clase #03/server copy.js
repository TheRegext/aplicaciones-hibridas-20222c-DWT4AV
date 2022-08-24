const http = require('node:http');
const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Mi Pagina Web</title>
                </head>
                <body>
                    <h1>Mi espectacular pagina web!</h1>
                    
                </body>
            </html>
        `)
        res.end();
    }
    else if (req.url === '/materia') {
        res.write('<html><head><title>Mi Pagina Web</title></head><body><h1>Mi espectacular pagina web!</h1>')
        res.write('<p>Materia: Aplicaciones Hibridas</p>');
        res.write('</body></html>');
        res.end();
    }
    else if (req.url === '/profesor') {
        res.write(`
        <html>
            <head>
                <title>Mi Pagina Web</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                <p>Profesor: Brian Lara</p>
            </body>
        </html>
    `)
        res.end();
    }
    else if (req.url === '/productos') {
        res.write(`
        <html>
            <head>
                <meta charset="utf-8">
                <title>Mi Pagina Web</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                <ul>
                    <li> 1 - Café Expreso - $ 200 </li>
                    <li> 2 - Café Americano - $ 250 </li>
                    <li> 3 - Café Cortado - $ 200 </li>
                    <li> 4 - Café Doble - $ 250 </li>
                    <li> 5 - Café Lagrima - $ 200 </li>
                </ul>
            </body>
        </html>
    `)
        res.end();
    }
    else {
        res.write(`
        <html>
            <head>
                <title>Mi Pagina Web</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                <p>404 not found</p>
            </body>
        </html>
    `)
        res.end();
    }
})

server.listen(2022);