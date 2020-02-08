import React from 'react';
import classes from './LogoCarousel.module.scss';
import logo1 from '../../assets/partner-logo-1-dark.png';
import logo2 from '../../assets/partner-logo-2-dark.png';
import logo3 from '../../assets/partner-logo-3-dark.png';
import logo4 from '../../assets/partner-logo-4-dark.png';
import logo5 from '../../assets/partner-logo-5-dark.png';
import logo6 from '../../assets/partner-logo-6-dark.png';
import logo7 from '../../assets/partner-logo-7-dark.png';
import logo8 from '../../assets/partner-logo-8-dark.png';

import Slider from 'react-slick';
export const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dotsClass: 'BlackDots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={classes.Image}>
          <img src={logo1} alt="logo" />
        </div>
        <div className={classes.Image}>
          <img src={logo2} alt="logo" />
        </div>
        <div className={classes.Image}>
          <img src={logo3} alt="logo" />
        </div>
        <div className={classes.Image}>
          <img src={logo4} alt="logo" />
        </div>
        <div className={classes.Image}>
          <img src={logo5} alt="logo" />
        </div>
        <div className={classes.Image}>
          <img src={logo6} alt="logo" />
        </div>
        <div className={classes.Image}>
          <img src={logo7} alt="logo" />
        </div>
        <div className={classes.Image}>
          <img src={logo8} alt="logo" />
        </div>
      </Slider>
    </div>
  );
};
