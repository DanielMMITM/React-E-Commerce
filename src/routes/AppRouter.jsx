import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from '/src/views/Login';
import Home from '/src/views/Home';
import {NavBar} from '/src/components/NavBar/NavBar';

const AppRouter = () =>{
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;