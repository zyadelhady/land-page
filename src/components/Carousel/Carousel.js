import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import classes from './Carousel.module.scss';
export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'Carousel',
    dotsClass: 'Dots',
    arrows: false,
    initialSlide: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={classes.Carousell}>
          <p>
            Outstanding job and exceeded all expectations. It was a pleasure to
            work with them on a sizable first project and am looking forward to
            start the next one asap.
          </p>
          <span>Michael Hopkins</span>
        </div>
        <div className={classes.Carousell}>
          <p>
            Outstanding job and exceeded all expectations. It was a pleasure to
            work with them on a sizable first project and am looking forward to
            start the next one asap.
          </p>
          <span>Michael Hopkins</span>
        </div>
        <div className={classes.Carousell}>
          <p>
            Outstanding job and exceeded all expectations. It was a pleasure to
            work with them on a sizable first project and am looking forward to
            start the next one asap.
          </p>
          <span>Michael Hopkins</span>
        </div>
      </Slider>
    </div>
  );
};
