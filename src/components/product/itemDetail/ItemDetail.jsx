import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from 'components/home/itemCount/ItemCount';
import './ItemDetail.sass';

const ItemDetail = ({ product, colour, currency, articleCode, stockAvailable, continueBuying }) => {
    return (
        <div className='itemDetail'>
            <div className='card'>
                <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                    <img
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                        src={product.image}
                        alt={product.name}
                        title={product.name}
                    />
                </div>
                <div className='mt-4 flex justify-between'>
                    <h2 className='brand'>{product.brand}</h2>
                    <p className='name'>{product.name}</p>
                    <p className='category'>{product.category}</p>
                    <p className='colour'>{colour} {product.colour}</p>
                    <p className='price'>{currency} {product.priceUSD}</p>
                    <p className='code'>{articleCode} {`${product.id}`}</p>
                    <p className='stock'>{stockAvailable} {product.stock}</p>
                </div>
                <ItemCount addToCart={`agregrar al carrito`} stock={product.stock} />
                <div className='continueBuying'>
                    <Link to='/'>{continueBuying}</Link>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;