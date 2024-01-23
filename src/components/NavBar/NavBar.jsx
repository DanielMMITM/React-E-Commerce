import { Link } from 'react-router-dom'
import './NavBar.css'
import UserContext from '/src/context/user-context';
import { useContext } from 'react';
import { Cart4 } from 'react-bootstrap-icons';

export const NavBar = () => {
    const [user, setUser] = useContext(UserContext);

    const logout = () => {
        setUser(null);
        localStorage.clear();
    };
    
    return (
        <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid">
                <button className="navbar-toggler btn-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className='nav-logo text-light'>CanteraSHOP</span>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-end me-5">
                        {user !== null ? (
                            <li className="nav-item me-3">
                                <span className='nav-link text-white'> <strong>Welcome! { user }</strong></span>
                            </li>
                        ) : ''}
                        <li className="nav-item me-3">
                            <Link className='nav-link text-white' to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className='nav-link text-white' to={"/products"}>Products</Link>
                        </li>
                        {user !== null ? (
                            <li className='nav-item me-3'>
                                <Link className='nav-link text-white' onClick={logout} to={"/"}>Logout</Link>
                            </li>
                        ) : 
                            <li className='nav-item me-3'>
                                <Link className='nav-link text-white' to={"/login"}>Login</Link>
                            </li>
                        }
                        <li className="nav-item me-3">
                            <Link className='nav-link' to={"/cart"}>
                                <Cart4 color="white" size={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
