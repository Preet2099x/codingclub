import React, { useState } from 'react';
import './Login.css';
import Navbar from '../components/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  return (
    <>
      <Navbar />
      <div id='mainContainer'>
        <div id='leftContainer'>
          <p id='heading'>Back in the Game! Let's Quiz!</p>
          <input 
            type="email" 
            value={email} 
            onChange={handleChangeEmail} 
            placeholder="Email Address"
          />
          <input 
            type="password" 
            value={password} 
            onChange={handleChangePassword} 
            placeholder="Password"
          />

          <button onClick={handleSignUp}>LOGIN</button>
          <p id='smallLink'>forgot? <a href=''>click here</a></p>
        </div>
        <div id="rightContainer">
          <img src='./src/assets/image1.png' alt="Image" />
        </div>
      </div>
    </>
  );
}

export default Login;
