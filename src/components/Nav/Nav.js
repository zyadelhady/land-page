import React, { useState } from 'react';
import classes from './Nav.module.scss';
import Container from '../../hoc/Container/Container';
import logoImgWhite from '../../assets/logo-light.svg';
import logoImgBlack from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Waypoint } from 'react-waypoint';

export const Nav = props => {
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
      <div className={`${classes.Nav} ${props.isFixed ? classes.bgWhite : ''}`}>
        <Container>
          <div className={classes.flex}>
            <div
              className={`${classes.NavLogo} ${
                isEntered ? classes.slideInLeft : ''
              }`}
            >
              <NavLink to="/" className={classes.NavItemsItem}>
                {props.isFixed ? (
                  <img
                    className={classes.NavLogoImg}
                    src={logoImgBlack}
                    alt="logo"
                  />
                ) : (
                  <img
                    className={classes.NavLogoImg}
                    src={logoImgWhite}
                    alt="logo"
                  />
                )}
              </NavLink>
            </div>
            <div
              className={`${classes.NavItems} ${
                isEntered ? classes.slideInRight : ''
              }`}
            >
              <Link
                to="/#about"
                className={`${classes.NavItemsItem} ${
                  props.isFixed
                    ? classes.ItemColorBlack
                    : classes.ItemColorWhite
                }`}
              >
                about
              </Link>
              <Link
                to="/#contact"
                className={`${classes.NavItemsItem} ${
                  props.isFixed
                    ? classes.ItemColorBlack
                    : classes.ItemColorWhite
                }`}
              >
                contact
              </Link>
              <NavLink
                to="/portfolio"
                className={`${classes.NavItemsItem} ${
                  props.isFixed
                    ? classes.ItemColorBlack
                    : classes.ItemColorWhite
                }`}
              >
                portfolio
              </NavLink>
              <NavLink
                to="/blog"
                className={`${classes.NavItemsItem} ${
                  props.isFixed
                    ? classes.ItemColorBlack
                    : classes.ItemColorWhite
                }`}
              >
                blog
              </NavLink>
              <a
                href="https://github.com/zyadelhady"
                target="blank"
                className={`${classes.NavItemsItem} ${
                  props.isFixed
                    ? classes.ItemColorBlack
                    : classes.ItemColorWhite
                }`}
              >
                github
              </a>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
