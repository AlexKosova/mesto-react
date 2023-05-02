import React from "react";

export default function Card (props) {

  function handleClick() {
    props.onClick(props.card);
  }
 
 return (
    <li className="element">
        <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
        <h2 className="element__title">{props.card.name}</h2>
        <button className="element__button-like" aria-label="нравится" 
            type="button"></button>
        <p className="element__likeQuantity">{props.card.likes.length}</p>
        <button className="element__button-delete"></button>
    </li>
  )
}