import { Link } from 'react-router-dom'
import './NavBar.css'
import UserContext from '/src/context/user-context';
import { useContext } from 'react';
import cart from "/src/assets/icons/cartIcon.png";


export const NavBar = () => {
    const [user, setUser] = useContext(UserContext);

    const logout = () => {
        setUser(null);
        localStorage.clear();
    };
    
    return (
        <div className="nav">
            <div className="nav-logo">
                <span>CanteraSHOP</span>
            </div>
            <div className="nav-menu">
                <ul>
                    {user !== null ? (
                        <li>
                            <span className='navOptions'> <strong>Welcome! { user }</strong></span>
                        </li>
                    ) : ''}
                    <li>
                        <Link className='navOptions' to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className='navOptions' to={'/products'}>Productos</Link>
                    </li>
                    {user !== null ? (
                        <li>
                            <span className='navOptions' onClick={logout}>Logout</span>
                        </li>
                    ) : 
                        <li>
                            <Link className='navOptions' to={"/login"}>Login</Link>
                        </li>
                    }
                    <li >
                        <Link className='navOptions' to={"/cart"}><img src={cart} className='cartIcon' icon="fa-sharp fa-solid fa-cart-shopping" /></Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
