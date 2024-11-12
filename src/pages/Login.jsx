import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const[token,setToken] = useState(null);
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8082/api/admin/user/login", formData);
            if (response.data.success) {
                setToken (response.data.token); // Get the token from the response
                
                toast.success(response.data.message);
                 localStorage.setItem("token", response.data.token);// Store the token in local storage
                navigate("/dashboard"); // Navigate to the dashboard
            } else {
                toast.warning(response.data.message);
            }
        } catch (error) {
            // console.error('Error during login:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    // Optional: Check local storage for the token on component mount
    // useEffect(() => {
    //     const storedToken = localStorage.getItem("token");
    //     if (storedToken) {
    //         console.log('Token found in local storage:', storedToken);
    //         // You can handle logic here if a token is found
    //     }
    // }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <label>Email</label>
                <input type="email" name='email' value={email} onChange={onChange} required />
                <label>Password</label>
                <input type="password" name='password' value={password} onChange={onChange} required />
                <button type='submit' className='btn btn-success my-3'>Login</button>
            </div>
        </form>
    );
};

export default Login;

