import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import CartWidget from 'components/ui/cartWidget/CartWidget';

const NavBar = ({ title, logoSrc, logoAlt, logoTitle }) => {
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ');
    }

    const [items, setItems] = React.useState([{}]);
    React.useEffect(() => {
        fetch('data/navbar.json')
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
            });
    }, []);

    return (
        <Disclosure as='nav' className='bg-gray-800'>
            {({ open }) => (
                <div>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    {open ? (
                                        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <img id='logo' src={logoSrc} alt={logoAlt} title={logoTitle} />
                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                <Link to={'/'} id='title' className='flex flex-shrink-0 items-center'>
                                    {title}
                                </Link>
                                <div className='hidden sm:ml-10 sm:block'>
                                    <div className='flex space-x-4'>
                                        {items
                                        .map((item) => (
                                            <Link
                                                key={item.name}
                                                to={`/sortBy/${item.name}`}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium md:capitalize'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                <Menu as='div' id='cart' className='relative ml-3'>
                                    <CartWidget />
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className='sm:hidden'>
                        <div className='space-y-1 px-2 pt-2 pb-3'>
                            {items.map((item) => (
                                <Link
                                    key={item.name}
                                    to={`/sortBy/${item.name}`}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}

export default NavBar;