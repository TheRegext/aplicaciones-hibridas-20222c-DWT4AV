async function find() {
    return fetch('http://localhost:2022/api/productos')
        .then(response => response.json())
}

async function findById(id) {
    return fetch(`http://localhost:2022/api/productos/${id}`)
        .then(response => response.json())
}

async function create(product) {
    return fetch('http://localhost:2022/api/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
}

export {
    find,
    findById,
    create
}