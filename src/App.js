import React from 'react';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import { Link, Route ,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="Container">
      <nav>
        <ul>
          <Link to="/" class="list">
          Login
          </Link>
          <Link to="signup" class="list">
          Signup
          </Link>
          <Link to="/home" class="list">
          Home
          </Link>
        </ul>
      </nav>
  
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      </Routes>

      </div>
  );
}

export default App;
