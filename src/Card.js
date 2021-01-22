import React from 'react';
import "./Card.css"

function Card({obj, handleClick}){

    return(
        <div onClick={handleClick}>
            <div className="item">
                <img src={obj.image} alt="" width="200"/>
            </div>
        </div>
    );
}

export default Card;
