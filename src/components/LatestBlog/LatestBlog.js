import React, { useState } from 'react';

import classes from './LatestBlog.module.scss';
import Container from '../../hoc/Container/Container';
import { LatestCard } from '../LatestCard/LatestCard';
import { BlogCarousel } from '../BlogCarousel/BlogCarousel';
import { Waypoint } from 'react-waypoint';

export const LatestBlog = () => {
  const [isEntered, setIsEntered] = useState(false);

  const handleWaypointEnter = () => {
    setIsEntered(true);
  };
  const handleWaypointLeave = () => {
    setIsEntered(false);
  };
  return (
    <div className={classes.LatestBlog}>
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <Container>
        <div className={classes.TheLatestBlog}>
          <div
            className={`${classes.TheLatestBlogHeader} ${
              isEntered ? classes.slideInTop : ''
            }`}
          >
            <h3>Latest Blog</h3>
            <p>
              Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
              Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non
              ultrices.
            </p>
          </div>
          <div className={classes.TheLatestBlogCards}>
            <BlogCarousel>
              <LatestCard />
              <LatestCard />
              <LatestCard />
              <LatestCard />
              <LatestCard />
            </BlogCarousel>
          </div>
        </div>
      </Container>
    </div>
  );
};
