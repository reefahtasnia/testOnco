import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting login form:', formData); // Debug
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            console.log('Login API response:', response.data); // Debug
            if (response.data) {
                localStorage.setItem('loggedInUser', formData.username);
                navigate('/dashboard');

                navigate('/dashboard'); // Navigate to Dashboard
            } else {
                
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error); // Debug
            alert('Login failed');
        }
    };
    
    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
