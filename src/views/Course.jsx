import ProductDetail from '../components/productDetail2/productDetail'


export default function Course({courseData}) {
    return(
        
        /*<h1>{courseData.title}</h1>*/

        <ProductDetail photoUrl = {courseData.photo} level={courseData.level} title = {courseData.title} shortDescription = {courseData.shortDescription} price = {courseData.price} discountPrice ={courseData.discountPrice} position={courseData.owner.position} name= {courseData.owner.name} experience={courseData.experience}/>
    )
}