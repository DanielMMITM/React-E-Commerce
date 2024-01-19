import { createBrowserRouter } from "react-router-dom";
import Login from '/src/views/Login/Login';
import Home from '/src/views/Home/Home';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'Login',
        element: <Login />,
    }
]);

export default AppRouter;