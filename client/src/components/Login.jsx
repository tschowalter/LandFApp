import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
        role
      });
      if (res.data.login) {
        if (res.data.role === 'admin') {
          navigate('/dashboard');
        } else if (res.data.role === 'client') {
          navigate('/');
        }
      } else {
        console.error('Login failed:', res.data.message);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>Login</h2><br />
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input type='text' placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select name="role" id='role'
            onChange={(e) => setRole(e.target.value)}>
            <option value='client'>Client</option>
            <option value='admin'>Admin</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
