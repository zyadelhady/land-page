import React from 'react';
import classes from './OpinionsCarousel.module.scss';
import { Carousel } from '../Carousel/Carousel';
import Container from '../../hoc/Container/Container';

export const OpinionsCarousel = () => {
  return (
    <div className={classes.OpinionsCarousel}>
      <Container>
        <Carousel />
      </Container>
    </div>
  );
};
