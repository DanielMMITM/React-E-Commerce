import './Login.css';
import { useContext, useState, useMemo } from 'react';
import UserContext from '/src/context/user-context';
import { useLocation, useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const [username, setUsername] = useState('johnd');
    const [password, setPassword] = useState('m38rmF$');
    const [user, setUser] = useContext(UserContext);

    const handleSubmit = async (e) => {
        try {
            e?.preventDefault();
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            if (response.ok) {
                const json = await response.json()
                localStorage.setItem("username", username);
                localStorage.setItem("token", json.token);
                setUser(username);
                if (location.state) {
                    navigate("/" + location.state)
                }
                else {
                    navigate("/")
                }
            }
            else {
                setError("Your username or password doesn't match");
                setUsername('');
                setPassword('');
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    useMemo(() => {
        window.scrollTo({ top: 0 });
    }, []);
    
    return (
        <>
            <div className='mainContainer'>
                <div className="containerForm">
                    <div id='content'>
                        <h1>Welcome </h1>
                        <form onSubmit={handleSubmit}>
                            <div className='fields'>
                                <legend>Username</legend>
                                <input type="text" value={username} name='username' placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className='fields'>
                                <legend>Password</legend>
                                <input type="password" value={password}  name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='errorbox'>
                                <span href="#" id='errortext'>{ error }</span>
                            </div>
                            <div className='btn-container boxbtn mt-3'>
                                <button className='button' type='sumbit'>Login</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;