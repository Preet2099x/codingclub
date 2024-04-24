import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><SignUp/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login/></>
    },
    {
      path: "/signup",
      element: <><Navbar /><SignUp /></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App


