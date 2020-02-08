import React, { useState } from 'react';
import classes from './Info.module.scss';
import { Waypoint } from 'react-waypoint';
import Container from '../../hoc/Container/Container';

import { FiClock, FiStar, FiHeart, FiBriefcase } from 'react-icons/fi';

export const Info = () => {
  const [isEntered, setIsEntered] = useState(false);
  const handleWaypointEnter = () => {
    setIsEntered(true);
  };
  const handleWaypointLeave = () => {
    setIsEntered(false);
  };
  return (
    <React.Fragment>
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <div className={classes.Info}>
        <Container>
          <div className={classes.TheInfo}>
            <div
              className={`${classes.TheInfoContainer} ${
                isEntered ? classes.slideInLeft : ''
              }`}
            >
              <div className={classes.TheInfoContainerImage}>
                <FiBriefcase />
              </div>
              <div className={classes.TheInfoContainerInfo}>
                <p>548</p>
                <p>projects completed</p>
              </div>
            </div>
            <div
              className={`${classes.TheInfoContainer} ${
                isEntered ? classes.slideInLeft : ''
              }`}
            >
              <div className={classes.TheInfoContainerImage}>
                <FiClock />
              </div>
              <div className={classes.TheInfoContainerInfo}>
                <p>1465</p>
                <p>working hours</p>
              </div>
            </div>
            <div
              className={`${classes.TheInfoContainer} ${
                isEntered ? classes.slideInRight : ''
              }`}
            >
              <div className={classes.TheInfoContainerImage}>
                <FiStar />
              </div>
              <div className={classes.TheInfoContainerInfo}>
                <p>612</p>
                <p>POSITIVE FEEDBACKS</p>
              </div>
            </div>
            <div
              className={`${classes.TheInfoContainer} ${
                isEntered ? classes.slideInRight : ''
              }`}
            >
              <div className={classes.TheInfoContainerImage}>
                <FiHeart />
              </div>
              <div className={classes.TheInfoContainerInfo}>
                <p>735</p>
                <p>HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
