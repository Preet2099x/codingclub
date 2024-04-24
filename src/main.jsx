import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './SignUp'
import Navbar from './Navbar'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Signup/>
  </React.StrictMode>,
)