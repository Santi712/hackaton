import "./Productcard.css"
import React from 'react'
import image2 from "../../assets/image/play pause.png"

export default function Productcard(props) {
    return(
        
        <div className="container-productcard">
            <div className="container-image">
                <img alt="imagen curso" src={props.img}></img>
                <div className="container-text-level">
                        <p className="level-text">{props.level}</p>
                </div>
            </div>
            <div className="container-text">
                <p>{props.title}</p>
            </div>
            <div className="container-price-buy">
                <div className="container-price">
                    <p>{props.price}</p>
                </div>
                <div className="container-buy">
                    <p>Comprar&nbsp;&nbsp;<img alt="imagen play" src={image2}></img></p>
                </div>
            </div>
        </div>
        
    )
}


