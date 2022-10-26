import React from 'react';
import Greeting from 'components/ui/greeting/Greeting';
import Item from 'components/home/item/Item';

const ItemList = () => {
    const [products, setProducts] = React.useState([{}]);
    const [filter, setFilter] = React.useState('');
    React.useEffect(() => {
        fetch('data/products.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            });
    }, []);

    return (
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <Greeting greeting={`Bienvenidos a Tienda Americana de Calzados`} />
            <div>
                <label for='filter'>Buscar</label>
                <input
                    id='filter'
                    name='filter'
                    type='text'
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)} />
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {products
                    .map((product, i) =>
                        <Item
                            key={i}
                            id={product.id}
                            brand={product.brand}
                            name={product.name}
                            imageSrc={product.image}
                            currency='USD'
                            price={product.price_usd}
                            colour={product.colour}
                            gender={product.gender}
                            stock={product.stock}
                        />)}
            </div>
        </div>
    );
}

export default ItemList;