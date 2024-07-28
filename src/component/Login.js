import React from 'react';
import './Login.css';  
import { useNavigate } from 'react-router-dom';

import email_icon from './Assests/email.png';
import password_icon from './Assests/password.png';

export const Login =()=>{
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("login successfully")
        navigate('/Home');
      };
  
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div className="forget-password">Lost Password ?<span>Click Here!</span></div>
      <div className="submit-container">
      <button type="submit" className="submit">Login</button>
      </div>
      </form>
    </div>
  );
}

export default Login;
