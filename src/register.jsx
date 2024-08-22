import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css'; 

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();

        if (email.trim() === '') {
            alert("Email cannot be blank");
            return;
        }

        if (password.trim() === '') {
            alert("Password cannot be blank");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        axios.post('http://127.0.0.1:8000/register', {
            email: email,
            password: password
        })
        .then(function (response) {
            alert("Registration successful");
            navigate('/login');
            console.log(response.data);
        })
        .catch(function (error) {
            alert("Registration failed");
            console.log(error.response.data);
        });
    }

    return (
        <div className="container">
            <div className="form-wrapper">
                <h2 className="form-title">Register</h2>
                <form onSubmit={registerUser}>
                <div className="input-group">
                    <label htmlFor="email" className="label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required autoComplete="email" className="input" />
                </div>

                <div className="input-group">
                    <label htmlFor="password" className="label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required autoComplete="new-password" className="input" />
                </div>

                <div className="input-group">
                    <label htmlFor="confirm-password" className="label">Confirm Password</label>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirm_password" required autoComplete="new-password" className="input" />
                </div>

                <div className="button-group">
                    <button type="submit" className="submit-button">Register</button>
                </div>
                </form>

                <div className="text-center">
                    Already have an account? <a href="/login" className="register-link">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Register;
