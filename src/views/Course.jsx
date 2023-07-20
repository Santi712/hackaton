import ProductDetail from '../components/productDetail2/productDetail';
import { Link } from "react-router-dom";
import './course.css';


export default function Course({courseData}) {
    return(
        <>
            <Link to="/">
                <button className='returnButton'>Volver</button>
            </Link>
        
            <ProductDetail 
                photoUrl = {courseData.photo} 
                level={courseData.level} 
                title = {courseData.title} 
                shortDescription = {courseData.shortDescription} 
                price = {courseData.price} 
                discountPrice ={courseData.discountPrice} 
                position={courseData.owner.position} 
                name= {courseData.owner.name} 
                experience={courseData.experience}
                ownerPic={courseData.owner.profilePic}/>
        </> 
   )
}