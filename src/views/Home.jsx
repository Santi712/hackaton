import dummyData from '../context/dummy-data.json';
import Productcard from '../components/productcard/Productcard';
import Navbar from '../components/Header/Navbar';

import './Home.css'


export default function Home() {
    let courseData = dummyData.courses;

    return (
        <>
            <Navbar />
            <div className="container-h2">
            <h2>REGALA EXPERIENCIAS ÚNICAS DE APRENDIZAJE EN EL SECTOR TECNOLÓGICO CON CURSO DOO.</h2>
            </div><div className="container-view-curses">
            {courseData && courseData.map((course, index) => {
                return (
                    
                    <Productcard key={index}
                        img={course.photo}
                        level={course.level}
                        title={course.title}
                        price={course.price + "€"} >
                    </Productcard>
                    
                )
            })}
            </div>
        </>
    )
}

