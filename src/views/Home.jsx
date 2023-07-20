import dummyData from '../context/dummy-data.json';
import Productcard from '../components/productcard/Productcard';

export default function Home() {
    let courseData = dummyData.courses;

    return(
        <>
            {courseData && courseData.map((course,index)=>{
                return(
                    <Productcard key={index}
                    img={course.photo} 
                    level={course.level} 
                    title={course.title} 
                    price={course.price} >
                    </Productcard>
                )
            })} 
        </>
    )
}

