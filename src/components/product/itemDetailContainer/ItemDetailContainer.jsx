import ItemDetail from 'components/product/itemDetail/ItemDetail';
import './ItemDetailContainer.sass';

const ItemDetailContainer = ({ product }) => {
    return (
        <div className='itemDetailContainer'>
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;