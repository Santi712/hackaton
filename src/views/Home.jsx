import dummyData from '../context/dummy-data.json';
import { Link } from 'react-router-dom';
// import Productcard from '../components/productcard/Productcard';

export default function Home() {
    let courseData = dummyData.courses;
    console.log(courseData)
    return(
        <>
            {courseData && courseData.map((course,index)=>{
                return(
                    <Link to={`/curso/${index}`} key={index}>
                        <p>{course.title}</p>
                    </Link>
                )
            })}
            
            
        </>
    )
}

