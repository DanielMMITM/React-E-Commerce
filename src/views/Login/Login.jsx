import {
    Button,
    NavBar
} from '/src/components';
import { ScrollRestoration } from 'react-router-dom';
import './Login.css';

export function Login() {
    
    return (
        <>
            <ScrollRestoration/>
            <NavBar/>
            <div className='mainContainer'>
                <div className="containerForm">
                    <div id='content'>
                        <h1>Welcome </h1>
                        <form action='get'>
                            <div className='fields'>
                                <legend>Username</legend>
                                <input type="text" name='username' placeholder="Username"/>
                            </div>
                            <div className='fields'>
                                <legend>Password</legend>
                                <input type="password" name='password' placeholder='Password'/>
                            </div>
                        </form>
                        <a href="#" id='resetPassword'>Forgot your password?</a>
                        <div className='btnContainer'>
                            <Button
                            route="/"
                            text= "Login"
                            >
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;