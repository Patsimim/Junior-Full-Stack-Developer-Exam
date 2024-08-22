import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authentication } from './components/authentication.jsx';
import axios from 'axios';
import './login.css'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const { login } = useContext(authentication);

    const loginUser = (e) => {
        e.preventDefault();

        

        if (email.trim() === '') {
            alert("Email cannot be blank");
            return;
        }

        if (password.trim() === '') {
            alert("Password cannot be blank");
            return;
        }

        axios.post('http://127.0.0.1:8000/login', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response.data);
            login()
            navigate('/mangatable');
        })
        .catch(function (error) {
            console.log(error.response.data);
            alert("Login failed");
        });
    }

    return(
        <div className="container">
            <div className="form-wrapper">
                <h2 className="form-title">Login</h2>
                <form onSubmit={loginUser}>
                <div className="input-group">
                    <label htmlFor="email" className="label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email"  autoComplete="email" className="input" />
                </div>

                <div className="input-group">
                    <label htmlFor="password" className="label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" autoComplete="current-password" className="input" />
                </div>

                <div className="button-group">
                    <button type="submit" className="submit-button">Login</button>
                </div>
                </form>

                <div className="text-center">
                    Don't have an account? <a href="/register" className="register-link">Register</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
