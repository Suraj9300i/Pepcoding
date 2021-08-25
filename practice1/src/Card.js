import React from "react";
import "./Card.css";

let Card = (props) => {
  return (
    <div className="Card">
      <p>{props.value}</p>
      <div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </div>
    </div>
  );
};

export default Card;
