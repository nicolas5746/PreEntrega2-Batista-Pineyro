import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetailContainer from 'components/home/itemDetailContainer/ItemDetailContainer';

const Product = () => {
    let { id } = useParams();
    id = parseInt(id);

    return (
        <div>
            <ItemDetailContainer id={id} />
            <Link to='/'>Volver</Link>
        </div>
    );
}

export default Product;