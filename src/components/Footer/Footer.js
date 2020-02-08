import React from 'react';
import classes from './Footer.module.scss';

import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import Container from '../../hoc/Container/Container';

export const Footer = () => {
  return (
    <footer className={classes.Background}>
      <Container>
        <div className={classes.Footer}>
          <div className={classes.Footer_Icons}>
            <a
              href="https://twitter.com/nkdevv"
              target="_blank"
              className={classes.Footer_Icons_Icon}
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/unvabdesign/"
              target="_blank"
              className={classes.Footer_Icons_Icon}
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/unvab/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.Footer_Icons_Icon}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/zyadelhady"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.Footer_Icons_Icon}
            >
              <FaGithub />
            </a>
          </div>
          <p>2016-2017 © Design by Unvab.</p>
        </div>
      </Container>
    </footer>
  );
};
