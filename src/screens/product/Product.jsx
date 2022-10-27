import React from 'react';
import { useParams, Link } from 'react-router-dom';
//import ItemDetailContainer from 'components/home/itemDetailContainer/ItemDetailContainer';
import { getProductById } from 'data/getProducts';

const Product = () => {
    const { productId } = useParams();

    const [product, setProduct] = React.useState({});

    React.useEffect(() => {
        setProduct(getProductById(productId));
    }, []);
    
    return (
        <div>
            {productId}

            <Link to='/'>Volver atrás</Link>
        </div>
    );
}

export default Product;