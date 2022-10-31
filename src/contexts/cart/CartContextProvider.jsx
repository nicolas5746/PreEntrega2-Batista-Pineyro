import React from 'react';
import CartContext from './CartContext';

export const CartContextProvider = ({ defaultValue = [], children }) => {

    const [cache, setCache] = React.useState(defaultValue);

    const getFromCache = (id) => {
        return cache.find(p => p.id === id);
    }

    const isInCache = (id) => {
        return id === undefined ? undefined : getFromCache !== undefined;
    }

    const addToCache = (p) => {
        if (isInCache(p && p.id)) {
            return;
        }
        setCache(...[cache, p]);
    }

    const value = { cache, addToCache, isInCache, cacheSize: cache.length };

    return (
        <CartContext.Provider
            value={value}
        >
            {children}
        </CartContext.Provider>
    );
}