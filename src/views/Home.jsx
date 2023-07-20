import dummyData from '../context/dummy-data.json';
import Productcard from '../components/productcard/Productcard';
import Navbar from '../components/Header/Navbar';


export default function Home() {
    let courseData = dummyData.courses;

    return (
        <>
            <Navbar />
            {courseData && courseData.map((course, index) => {
                return (
                    <Productcard key={index}
                        id={course.id}
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

