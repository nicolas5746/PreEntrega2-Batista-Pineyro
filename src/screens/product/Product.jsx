import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from 'components/home/itemDetailContainer/ItemDetailContainer';


const Product = () => {  
    return (
        <div>
            <ItemDetailContainer />

            <Link to='/'>Volver atrás</Link>
        </div>
    );
}

export default Product;