async function find() {
    return fetch('http://localhost:2022/api/categorias')
        .then(response => response.json())
}

export {
    find
}