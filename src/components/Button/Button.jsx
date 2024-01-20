import { Link } from 'react-router-dom'
import './Button.css'

export const Button = ({ route, text }) => {
    return (
        <div>
            <Link to={route}><button className="button" type='submit'>{text}</button></Link>
        </div>
    );
};