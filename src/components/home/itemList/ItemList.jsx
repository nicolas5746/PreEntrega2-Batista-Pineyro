import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from 'data/getData';
import Greeting from 'components/home/greeting/Greeting';
import Item from 'components/home/item/Item';
import Search from '../search/Search';
import './ItemList.sass';

const ItemList = () => {
    const [products, setProducts] = React.useState([]);
    const [filter, setFilter] = React.useState('');
    const { sortBy } = useParams();

    React.useEffect(() => {
        getAllProducts(setProducts);
    }, []);

    return (
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <Greeting greeting={`Bienvenidos a Tienda Americana de Calzados`} />
            <Search filter={filter} setFilter={setFilter}/>
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {sortBy
                    ?
                    products
                        .filter((p) => p.category === sortBy)
                        .filter((p) => p.brand.toLowerCase().match(filter.toLowerCase()))
                        .map((product, i) =>
                            <Item
                                key={i}
                                id={product.id}
                                brand={product.brand}
                                name={product.name}
                                imageSrc={product.image}
                                price={product.priceUSD}
                            />)
                    :
                    products
                        .filter((p) => p.brand.toLowerCase().match(filter.toLowerCase()))
                        .map((product, i) =>
                            <Item
                                key={i}
                                id={product.id}
                                brand={product.brand}
                                name={product.name}
                                imageSrc={product.image}
                                price={product.priceUSD}
                            />)
                }
            </div>
        </div>
    );
}

export default ItemList;