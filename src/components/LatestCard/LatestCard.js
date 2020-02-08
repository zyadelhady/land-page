import React from 'react';
import classes from './LatestCard.module.scss';

export const LatestCard = () => {
  return (
    <div>
      <div className={classes.LatestCard}>
        <div className={classes.LatestCardImage}>
          <div className={classes.LatestCardPhoto}></div>
          <span>Lorem</span>
        </div>
        <div className={classes.LatestCardContent}>
          <h3>Lorem ipsum dolor sit amet consectetur elit ?</h3>
          <span>AUGUST 14, 2016</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum unde
            sequi qui. Vero iusto pariatur aliquid nihil tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};
