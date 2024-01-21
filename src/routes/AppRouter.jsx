import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '/src/views/Login/Login';
import Home from '/src/views/Home/Home';
import { Products } from '/src/views/Products/Products';
import { UserProvider } from '/src/context/user-context';
import { NavBar } from '/src/components/NavBar/NavBar';
import { Footer } from '/src/components/Footer/Footer';
import { Cart } from '/src/views/Cart/Cart';

const AppRouter = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Products" element={<Products itemsPerPage={6} />}></Route>
                    <Route path="/Cart" element={<Cart />}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </UserProvider>
    );
};

export default AppRouter;
