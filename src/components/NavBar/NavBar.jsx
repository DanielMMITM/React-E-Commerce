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
                    <li>
                        <Link className='navOptions' to={"/"}>Home</Link>
                    </li>
                    <li>
                        <a className='navOptions' href="/#Algorithms">Productos</a>
                    </li>
                    <li>
                        <Link className='navOptions' to={"/login"}>Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
