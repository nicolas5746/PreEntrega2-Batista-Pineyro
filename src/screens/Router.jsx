import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'screens/home/Home';
import Product from 'screens/product/Product';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/category/:sortBy' element={<Home />}></Route>
                    <Route path='/product/:productId' element={<Product />}></Route>
                    <Route path='/*' element={<div>404 Not Found</div>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;