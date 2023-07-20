import React from 'react';
import './productDetail.css'


const ProductDetail = (props) => 
{
    return (
        <div className = "productDetail-container">
    
            <div className = "productDetail-courseCard">
                <div className='leftContainer'>
                    <img src = {props.photoUrl} alt = "logotipo del curso ofrecido" className= "courseLogoImage"/>
                </div>
                <div className='rightContainer'>
                    <button className = "level-tag">{props.level}</button>
                    <div className = "texto-cursos">
                        <h3>{props.title}</h3>                   
                        <p className= "short-description">{props.shortDescription}</p>
                    
                        <h4 className = "discounted-price">{props.price}</h4>
                        <h3 className = "price">{props.discountPrice}</h3>
                    </div>
                    <div className = "teacher-info">
                        <div className = "round-photo"><img src={props.ownerPic} alt="" /></div>
                        <div className = "teacher-text-container">
                            <h4 className = "teacher-name">{props.name}</h4>
                            <h5 className = "teacher-position">{props.position}</h5>
                        </div>
                    </div>
                    <div className = "experience-text">
                        <h4 className = "titulo-experiencia">¿Que incluye la experiencia?</h4>
                        <h5 className= "experience-description">{props.experience}</h5>
                    </div>
                    <button className = "shoppingcart-button">Añadir al carrito</button>
                </div>
            </div>
        </div>
    )}
export default ProductDetail;