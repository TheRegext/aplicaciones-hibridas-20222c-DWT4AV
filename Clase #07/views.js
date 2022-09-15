function createPage(content) {
    return `
    <html>
        <head>
            <meta charset="utf-8">
            <title>Mi Pagina Web</title>
        </head>
        <body>
            <h1>Mi espectacular pagina web!</h1>
            ${content}
        </body>
    </html>
    `
}

export {
    createPage
}

export default createPage

// CommonJS
//module.exports = {
//    createPage
//}