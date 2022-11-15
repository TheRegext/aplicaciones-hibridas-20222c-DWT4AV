async function find() {
    return fetch('http://localhost:2022/api/productos')
        .then(response => response.json())
}

export {
    find
}