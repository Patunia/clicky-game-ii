import React from "react";
import "./Card.css";

const Card = props => (
    <div id="img" onClick={() => props.handleClick(props.id)} style={{ backgroundImage: `url("${props.image}")` }} className={`click-item${props.shake ? " shake" : ""}`}/>
);

export default Card;
