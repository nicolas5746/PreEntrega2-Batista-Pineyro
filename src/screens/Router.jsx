import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/navbar/navbar/Navbar';
import Home from 'screens/home/Home';
import Product from 'screens/product/Product';
import Cart from 'screens/cart/Cart';
import NotFound from 'screens/notFound/NotFound';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/category/:sortBy`} element={<Home />} />
                    <Route path={`/product/:id`} element={<Product />} />
                    <Route path={`/cart`} element={<Cart />} />
                    <Route path={`/*`} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;