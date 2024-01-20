import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from '/src/views/Login/Login';
import Home from '/src/views/Home/Home';
import { Products } from '/src/views/Products/Products';
import UserContext from "/src/context/user-context";

const username = localStorage.getItem('username');

const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Products" element={<Products itemsPerPage={6} />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
