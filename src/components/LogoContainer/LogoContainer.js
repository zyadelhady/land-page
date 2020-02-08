import React from 'react';
import classes from './LogoContainer.module.scss';
import { LogoCarousel } from '../LogoCarousel/LogoCarousel';
import Container from '../../hoc/Container/Container';

export const LogoContainer = () => {
  return (
    <div className={classes.LogoContainer}>
      <Container>
        <LogoCarousel />
      </Container>
    </div>
  );
};
