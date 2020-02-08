import React from 'react';
import classes from '../ContactInputs.module.scss';

export const ContactTextarea = props => {
  return (
    <textarea
      {...props}
      className={classes.Input}
      style={{ height: '100%', resize: 'none' }}
    ></textarea>
  );
};
