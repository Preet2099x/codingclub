import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = () => {
  };

  return (
    <div id='mainContainer'>
      <div id='leftContainer'>
        <p>Challenge Your Knowledge!</p>
        <div id='nameField'>
          <input 
            type="text" 
            value={firstName} 
            onChange={handleChangeFirstName} 
            placeholder="First Name"
          />
          <input 
            type="text" 
            value={lastName} 
            onChange={handleChangeLastName} 
            placeholder="Last Name"
          />
        </div>
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
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={handleChangeConfirmPassword} 
          placeholder="Confirm Password"
        />
        <button onClick={handleSignUp}>SIGN-UP</button>
      </div>
      <div id="rightContainer">
        <img src='./src/assets/image1.png' alt="Image" />
      </div>
    </div>
  );

}

export default SignUp;