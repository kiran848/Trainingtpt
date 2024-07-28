import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

import user_icon from './Assests/person.png';
import email_icon from './Assests/email.png';
import password_icon from './Assests/password.png';

const Signup = () => {
  const [action, setAction] = useState("Sign Up");
const navigate=useNavigate()

 const handleSubmit=(e)=>{
e.preventDefault()
alert("signup successfully")
navigate("/Home")

}

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder='Name' />
          </div>
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input type="email" placeholder='Email Id' />
          </div>
          <div className="input">
            <img src={password_icon} alt="password icon" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
