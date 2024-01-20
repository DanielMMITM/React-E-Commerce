import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '/src/views/Login/Login';
import Home from '/src/views/Home/Home';
import { Products } from '/src/views/Products/Products';
import { UserProvider } from '/src/context/user-context';

const AppRouter = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Products" element={<Products itemsPerPage={6} />}></Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

export default AppRouter;
