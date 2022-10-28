import React from 'react';
import { getProductById } from 'data/getProducts';
import ItemDetail from 'components/home/itemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        getProductById(id, setProduct);
    }, [id]);

    return (
        <div className='itemDetailContainer'>
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;