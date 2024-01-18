import { createBrowserRouter } from "react-router-dom";

import Login from '/src/views/Login';

const AppRouter = createBrowserRouter([
    {
        path: 'Login',
        element: <Login />,
    }
]);

export default AppRouter;