import React from 'react';
import classes from './Card.module.scss';

export const Card = props => {
  return (
    <div
      style={{ backgroundImage: `url(${props.img})` }}
      className={classes.Card}
    >
      <div className={classes.CardText}>
        <h3>{props.label}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
