import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from 'data/getData';
import ItemDetailContainer from 'components/product/itemDetailContainer/ItemDetailContainer';
import './Product.sass';

const Product = () => {
    const [product, setProduct] = React.useState([]);

    let { id } = useParams();

    React.useEffect(() => {
        getProductById(parseInt(id), setProduct);
    }, [id]);

    return (
        <div>
            <ItemDetailContainer id={id} product={product} />
        </div>
    );
}

export default Product;