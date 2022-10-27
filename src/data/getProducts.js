import { products } from 'data/products';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject(new Error(`No se encontraron productos!`));
        }
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export const getAllProducts = async (productId) => {
    try {
        const products = await getProducts();
        productId(products);
    }
    catch (error) {
        alert(`No se encontraron productos!`);
    }
}

export const getProductById = async (id, productId) => {
    try {
        const getById = (id, i) => i.find((p) => p.id === id);
        const result = await getProducts();
        productId(getById(id, result));
    }
    catch (error) {
        alert(`No se encontró el producto!`);
    }
}