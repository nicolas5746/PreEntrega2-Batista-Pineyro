import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'screens/home/Home';
import NavBar from 'components/ui/navbar/NavBar';
import Product from 'screens/product/Product';
import NotFound from './notFound/NotFound';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar
                    title={`Tienda Americana`}
                    logoSrc={`https://raw.githubusercontent.com/nicolas5746/PreEntrega1-Batista-Pineyro/master/public/images/logo.png`}
                    logoAlt={`Tienda Americana`}
                    logoTitle={`Tienda Americana`}
                />
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/category/:sortBy`} element={<Home />} />
                    <Route path={`/product/:id`} element={<Product />} />
                    <Route path={`/*`} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;