import { BrowserRouter, Routes,Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export default function App() {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element={<SignUp/>}/>
                <Route path ="/SignUp" element ={<SignUp/>}/>
                <Route path ="/Login" element ={<Login/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}