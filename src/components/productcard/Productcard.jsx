import "./Productcard.css"
import React from 'react'

import image1 from "../../assets/image/imagen-curso1.png"
import image2 from "../../assets/image/play pause.png"

export default function Productcard() {
    return(
        
        <div className="container-productcard">
           <div className="container-image">
           <img alt="imagen curso" src={image1}></img>
           <div className="container-text-level"><p className="level-text">principiante</p></div>
           
        </div>
        <div className="container-text"><p>Figma paso a paso</p></div>
        <div className="container-price-buy">
        <div className="container-price"><p>25,99€</p></div>
        <div className="container-buy"><p>Comprar&nbsp;&nbsp;<img alt="imagen play" src={image2}></img></p></div>
        </div></div>
        
    )
}


