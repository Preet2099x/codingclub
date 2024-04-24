import React, { useState } from 'react';
import './Login.css';
import Navbar from '../components/Navbar';
import image1 from '../assets/images/image1.png'; // Import the image

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
          <img src={image1} alt="Image" /> {/* Use imported image */}
        </div>
      </div>
    </>
  );
}

export default Login;
