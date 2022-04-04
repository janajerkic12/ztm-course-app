import { Component } from 'react';
import "./card.styles.css";

const Card = (monsterCard) => {
  const { name, email, id } = monsterCard;

    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${name}?set=set2&size=180x180`} alt={`monster ${name}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;