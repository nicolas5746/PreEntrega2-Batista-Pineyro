import ItemDetail from 'components/product/itemDetail/ItemDetail';
import './ItemDetailContainer.sass';

const ItemDetailContainer = ({ product }) => {
    return (
        <div className='itemDetailContainer'>
            <ItemDetail
                product={product}
                colour={`color:`}
                currency={`usd`}
                articleCode={`Código del artículo:`}
                stockAvailable={`Stock disponible:`}
                continueBuying={`continuar comprando`}
            />
        </div>
    );
}

export default ItemDetailContainer;