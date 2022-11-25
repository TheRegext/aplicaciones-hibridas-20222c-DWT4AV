async function find() {
    return fetch('http://localhost:2022/api/productos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener los productos')
            }
        })
}

async function findById(id) {
    return fetch(`http://localhost:2022/api/productos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener los productos')
            }
        })
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