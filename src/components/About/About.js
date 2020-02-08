import React, { useState } from 'react';
import classes from './About.module.scss';
import signImg from '../../assets/about-me-signature.png';
import Container from '../../hoc/Container/Container';
import { Waypoint } from 'react-waypoint';

export const About = () => {
  const [isEntered, setIsEntered] = useState(false);
  const handleWaypointEnter = () => {
    setIsEntered(true);
  };
  const handleWaypointLeave = () => {
    setIsEntered(false);
  };
  return (
    <section id="about">
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <Container>
        <div className={`${classes.About} `}>
          <div
            className={`${classes.AboutHeader} ${
              isEntered ? classes.slideInTop : ''
            }`}
          >
            <h1>About Our Agency</h1>
          </div>
          <div
            className={`${classes.AboutParagraph} ${
              isEntered ? classes.slideInTop : ''
            }`}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptatem ab et corrupti repellat doloribus odio maxime illo.
              Quod temporibus fugit ullam suscipit animi vel ipsa, pariatur
              veritatis laudantium exercitationem?Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          <div
            className={`${classes.AboutSign} ${
              isEntered ? classes.slideInBottom : ''
            }`}
          >
            <img src={signImg} alt="sign" />
          </div>
        </div>
      </Container>
    </section>
  );
};
