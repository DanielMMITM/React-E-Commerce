import {
    NavBar
} from '/src/components';
import './Login.css';
import { useState } from 'react';


export function Login() {
    const [username, setUsername] = useState('mor_2314');
    const [password, setPassword] = useState('83r5^_');

    const handleSubmit = (e) => {
        e?.preventDefault();
        console.log("submit");
        console.log(username);
        console.log(password);
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json.token);
            localStorage.setItem("username", username);
            localStorage.setItem("token", json.token);
        })
            .catch(err => console.log(err))
    }
    
    
    return (
        <>
            <NavBar/>
            <div className='mainContainer'>
                <div className="containerForm">
                    <div id='content'>
                        <h1>Welcome </h1>
                        <form onSubmit={handleSubmit}>
                            <div className='fields'>
                                <legend>Username</legend>
                                <input type="text" name='username' id='username' placeholder="Username" onChange={(e) =>setUsername(e.target.value)}/>
                            </div>
                            <div className='fields'>
                                <legend>Password</legend>
                                <input type="text" name='password' id='password' placeholder='Password' onChange={(e) =>setPassword(e.target.value)}/>
                            </div>
                            <a href="#" id='resetPassword'>Forgot your password?</a>
                            <div className='btnContainer boxbtn'>
                                <button className='button' type='sumbit'>Login</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;