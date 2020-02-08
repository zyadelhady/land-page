import React, { useState } from 'react';
import classes from './Heading.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HashLink as Link } from 'react-router-hash-link';
import { Waypoint } from 'react-waypoint';

export const Heading = () => {
  const [isEntered, setIsEntered] = useState(false);
  const handleWaypointEnter = () => {
    setIsEntered(true);
  };
  const handleWaypointLeave = () => {
    setIsEntered(false);
  };
  return (
    <div className={`${classes.Heading} `}>
      <Waypoint
        bottomOffset="15px"
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      />
      <div
        className={`${classes.HeadingContent} ${
          isEntered ? classes.slideInTop : ''
        }`}
      >
        <h1>Lorem ipsum dolor</h1>
        <h2>
          Lorem ipsum dolor sit amet consectr <br />
          <span>yorem ipsum dolor sit amet</span>
        </h2>

        <button className={classes.HeadingContentButton}>Lorem ipsum</button>
      </div>
      <div className={classes.HeadingArrow}>
        <Link to="/#about" className={classes.NavItemsItem}>
          <MdKeyboardArrowDown />
        </Link>
      </div>
    </div>
  );
};
