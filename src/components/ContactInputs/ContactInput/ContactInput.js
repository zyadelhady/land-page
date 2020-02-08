import React from 'react';
import classes from '../ContactInputs.module.scss';

export const ContactInput = props => {
  return <input type="text" required {...props} className={classes.Input} />;
};
