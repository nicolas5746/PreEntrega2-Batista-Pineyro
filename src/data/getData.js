import { navBar } from 'data/navBar';
import { products } from 'data/products';

const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject(new Error(`No se encontraron productos!`));
        } else {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        }
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

const getNavBar = () => {
    return new Promise((resolve, reject) => {
        if (navBar.length === 0) {
            reject(new Error(`Error!`));
        } else {
            resolve(navBar);
        }
    });
}

export const getNavBarItems = async (item) => {
    try {
        const navBar = await getNavBar();
        item(navBar);
    }
    catch (error) {
        new Error(`Error!`);
    }
}