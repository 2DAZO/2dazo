import productos from '../data/productos.json'

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(mockData)
        }, time)
    })
}

const productosApi = {
    getProductos() {
        return fetch(productos, 500)
    }
}

export {productosApi};