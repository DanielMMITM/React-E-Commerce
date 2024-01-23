import { Link } from 'react-router-dom'
import './Button.css'

export const Button = ({ route, text }) => {
    return (
        <div>
            <Link to={route}><button className="button p-2" type='submit'>{text}</button></Link>
        </div>
    );
};

export default Button;
