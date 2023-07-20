import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Course from '../views/Course';
import dummyData from '../context/dummy-data.json';

export const Router = () => {
    let courseData = dummyData.courses;

    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                {courseData.map(course => (
                    <Route
                        key={course.id}
                        path={`courses/${course.id}`}
                        element={<Course courseData={course} />}
                    />
                ))}
            </Routes>
       </BrowserRouter>
    )
}