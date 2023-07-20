import React from 'react';
import './productDetail.css'


const ProductDetail = (props) => 
{
    
    return (
        <div className = "productDetail-container">
    
            <div className = "productDetail-courseCard">
                
                <div className = "courseCard-leftDiv">

                    <img src = {props.photoUrl} alt = "logotipo del curso ofrecido" className= "courseLogoImage"/>
                    <button className = "level-tag">{props.level}</button>
                </div>

                <h3>{props.title}</h3>                   
             <p>{props.shortDescription}</p>
                    <h4>{props.price}</h4>
                    <h4>{props.discountPrice}</h4>
            </div>
    
        </div>
    )}
export default ProductDetail;