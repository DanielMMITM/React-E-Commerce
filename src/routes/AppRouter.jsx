import { createBrowserRouter } from "react-router-dom";
import Login from '/src/views/Login/Login';
import Home from '/src/views/Home/Home';
import {Products} from '/src/views/Products/Products';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'Login',
        element: <Login />,
    },
    {
        path: 'products',
        element: <Products />,
    }
]);

export default AppRouter;