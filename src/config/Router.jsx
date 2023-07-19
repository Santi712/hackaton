import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} ></Route>
                <Route path="/curso" element={<Course/>}></Route>
            </Routes>
       </BrowserRouter>
    )
}