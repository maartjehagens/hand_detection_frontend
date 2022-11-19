import "../Styles/SingleCard.css"
import logo from "../img/cover.png";
import React from "react";

export default function SingleCard({card, handleChoice}) {
    //Set it equal to a function
    const handleClick = () => {
        handleChoice(card)
    }
    
    return(
            <div className="card" >
                <div>
                    <img className="front" src={card.src} alt="card front" />
                    <img className="back" 
                         src={logo} 
                         onClick={handleClick} 
                         alt="card back" />
                </div>
            </div>
    )
}