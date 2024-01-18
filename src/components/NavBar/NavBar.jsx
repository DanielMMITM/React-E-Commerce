import { Link } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <span>CanteraSHOP</span>
            </div>
            <div className="nav-menu">
                <ul>
                    <Link className='navOptions' to={"/"}><li>Home</li></Link>
                    <a className='navOptions' href="/#Algorithms"><li>Productos</li></a>
                    <Link className='navOptions' to={"/login"}><li>Login</li></Link>
                </ul>
            </div>
        </div>
    )
}
