import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'screens/home/Home';
import NavBar from 'components/ui/navbar/NavBar';
import Product from 'screens/product/Product';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar
                    title='Tienda Americana'
                    logoSrc={`https://raw.githubusercontent.com/nicolas5746/PreEntrega1-Batista-Pineyro/master/public/images/logo.png`}
                    logoAlt='Tienda Americana'
                    logoTitle='Tienda Americana' />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/category/:sortBy' element={<Home />}></Route>
                    <Route path='/product/:id' element={<Product />}></Route>
                    <Route path='/*' element={<div>404 Not Found</div>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;