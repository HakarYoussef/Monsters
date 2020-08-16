import React from 'react';
import './card-style.css';

export const Card = (props) => (
  <div className="card-container">
    <img
      src={'https://robohash.org/${props.monster.id}?set2=set3&size=150x150'}
    />
    <h2> {props.monster.name} </h2>
    <p>{props.monster.email}</p>
  </div>
);
