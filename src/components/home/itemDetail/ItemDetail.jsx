import React from 'react';
import ItemCount from 'components/home/itemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ stock }) => {
    const { brand } = useParams();
    return (
        <div className='itemDetail'>
            {brand}
            <ItemCount addToCart={`agregrar al carrito`} stock={stock} />
        </div>
    );
}

export default ItemDetail;