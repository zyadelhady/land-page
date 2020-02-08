import React, { useState } from 'react';
import classes from './Projects.module.scss';
import Container from '../../hoc/Container/Container';
import Card1 from '../../assets/portfolio-2-sm.jpg';
import Card2 from '../../assets/portfolio-3-sm.jpg';
import Card3 from '../../assets/portfolio-4-sm.jpg';
import Card4 from '../../assets/portfolio-5-sm.jpg';
import Card5 from '../../assets/portfolio-6-sm.jpg';
import Card6 from '../../assets/portfolio-7-sm.jpg';
import Card7 from '../../assets/portfolio-8-sm.jpg';
import Card8 from '../../assets/portfolio-9-sm.jpg';
import Card9 from '../../assets/portfolio-12-sm.jpg';
import { Card } from '../Card/Card';
import { Waypoint } from 'react-waypoint';

export const Projects = props => {
  const [isEntered, setIsEntered] = useState(false);
  const cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9];
  const handleWaypointEnter = () => {
    setIsEntered(true);
  };
  const handleWaypointLeave = () => {
    setIsEntered(false);
  };
  return (
    <div className={classes.Projects}>
      <Container>
        <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
        <div className={classes.TheProjects}>
          <div
            className={`${classes.TheProjectsHeader} ${
              isEntered ? classes.slideInTop : ''
            }`}
          >
            <h1>best projects</h1>
            <p>
              Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
              Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non
              ultrices.
            </p>
          </div>
          <div className={classes.TheProjectsCards}>
            {cards.map(i => {
              return <Card img={i} key={i} text="ipsum" label="lorem ipsum" />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
