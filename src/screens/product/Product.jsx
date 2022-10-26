import ItemDetailContainer from 'components/home/itemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    return (
        <div className='product'>
            {id}
            <ItemDetailContainer />
        </div>
    );
}

export default Product;