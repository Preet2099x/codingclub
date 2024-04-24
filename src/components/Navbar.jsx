import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [count, setCount] = useState(0);

  const handleSignUp = () => {
    
    console.log('Sign Up clicked');
  };

  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <div id='mainNavbar'>
      <div id='leftElements'>
        <img src="./src/assets/navlogo.png" alt="image" />
        <p>Qezee</p>
      </div>
      <div id='rightElements'>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleSignUp}>SIGN-UP</button>
      </div>
    </div>
  );
}

export default Navbar;