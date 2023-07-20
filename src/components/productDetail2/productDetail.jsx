import React from 'react';
import './productDetail.css'


const ProductDetail = (props) => 
{
    
    return (
        <div className = "productDetail-container">
    
            <div className = "productDetail-courseCard">
                    <img src = {props.photoUrl} alt = "logotipo del curso ofrecido" className= "courseLogoImage"/>
                    <button className = "level-tag">{props.level}</button>
                
                <h3>{props.title}</h3>                   
                <p>{props.shortDescription}</p>
                
                    <h4 className = "discounted-price">{props.price}</h4>
                    <h3 className = "price">{props.discountPrice}</h3>

<div className = "teacher-info">
    <div className = "round-photo"></div>
                    <h4 className = "teacher-name">{props.name}</h4>
                    <h5 classNname = "teacher-position">{props.position}</h5>
                    </div>
            </div>

<h4>¿Que incluye la experiencia?</h4>
<h5>Lorem Ipsum dolor sit amet Lorem ipsum dolor sit amet.</h5>

            <button className = "cart-button">Añadir al carrito</button>
    
        </div>
    )}
export default ProductDetail;