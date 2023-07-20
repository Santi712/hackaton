import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Course from '../views/Course';

export const Router = () => {


    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="Courses/:id" element={<Course/>}></Route>
            </Routes>
       </BrowserRouter>
    )
}