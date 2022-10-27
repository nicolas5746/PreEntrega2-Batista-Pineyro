import { Link } from 'react-router-dom';

const Item = ({ id, brand, name, imageSrc, category, price, colour }) => {
    return (
        <div className='group relative'>
            <Link to={`/product/${id}`}>
                <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                    <img
                        src={imageSrc}
                        alt={name}
                        title={name}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                </div>
            </Link >
            <div className='mt-4 flex justify-between'>
                <h2 className='text-xl md:capitalize'>{brand}</h2>
                <p className='text-ml md:capitalize'>{name}</p>
                <p className='mt-1 text-sm md:capitalize'>Color: {colour}</p>
                <p className='mt-2 text-sm md:capitalize'>{category}</p>
                <p className='text-xl'>USD {price}</p>
                <p className='mt-1 text-sm'>{`Código del artículo: ${id}`}</p>
            </div>
        </div>
    );
}

export default Item;