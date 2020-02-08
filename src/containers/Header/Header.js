import React, { useState } from 'react';
import classes from './Header.module.scss';
import { Nav } from '../../components/Nav/Nav';
import { Heading } from '../../components/Heading/Heading';
import { Waypoint } from 'react-waypoint';
export const Header = () => {
  const [isFixed, setIsFixed] = useState(true);

  const handleWaypointEnter = () => {
    setIsFixed(prev => !prev);
  };

  return (
    <section className={classes.TheHeader} id="header">
      <Nav isFixed={isFixed} />
      <Waypoint
        bottomOffset="15px"
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointEnter}
      />
      <Heading />
    </section>
  );
};
