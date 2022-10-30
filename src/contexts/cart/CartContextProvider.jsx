import React from 'react';
import CartContext from './CartContext';

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    const addProduct = (itemCount) => {
        if (cart.find((product) => product.id === itemCount.id)) {
            const newCartItem = cart
                .map((product) => {
                    if (product.id === itemCount.id) {
                        return { ...product, count: itemCount.count + product.count }
                    }
                    return product;
                });
            setCart(newCartItem);
        } else {
            setCart((count) => {
                return [...count, itemCount];
            })
        }
    }

    const removeProduct = (itemCount) => {
        const newItems = cart
            .filter((product) => product.id !== itemCount.id);
        setCart(newItems);
    }

    const fillCart = () => {
        return cart.reduce((increase, product) => increase + product.count, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const cartCost = () => {
        const cost = cart
            .reduce((increase, product) => increase + product.price * product.count, 0);
        return cost;
    }

    const value = { cart, addProduct, removeProduct, fillCart, emptyCart , cartCost };

    return (
        <CartContext.Provider
            value={value}
        >
            {children}
        </CartContext.Provider>
    );
}