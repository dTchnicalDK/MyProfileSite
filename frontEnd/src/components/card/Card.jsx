import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-details">
        <h3>title</h3>
        <p>
          descriptions: Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Vel corrupti aut, obcaecati quasi fugiat, nesciunt soluta beatae
          error nulla eos architecto ipsa cupiditate atque, dolorum quod eveniet
          maiores autem rerum.
        </p>
        <button className="solid-button">preview</button>
      </div>
    </div>
  );
}

export default Card;
