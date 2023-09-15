import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas
    