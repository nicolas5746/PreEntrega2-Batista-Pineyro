import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from 'components/home/itemCount/ItemCount';
import './ItemDetail.sass';

const ItemDetail = ({ product }) => {
    return (
        <div className='itemDetail'>
            <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                <img
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    src={product.image}
                    alt={product.name}
                    title={product.name} 
                />
            </div>
            <div className='mt-4 flex justify-between'>
                <h2 className='text-xl md:capitalize'>{product.brand}</h2>
                <p className='text-ml md:capitalize'>{product.name}</p>
                <p className='mt-1 text-sm md:capitalize'>Color: {product.colour}</p>
                <p className='mt-2 text-sm md:capitalize'>{product.category}</p>
                <p className='text-xl'>USD {product.priceUSD}</p>
                <p className='mt-1 text-sm'>{`Código del artículo: ${product.id}`}</p>
            </div>
            <ItemCount addToCart={`agregrar al carrito`} stock={product.stock} />
            <Link to='/'>Volver</Link>
        </div>
    );
}

export default ItemDetail;