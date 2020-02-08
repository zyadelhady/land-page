import React from 'react';
import classes from './ContactItem.module.scss';

export const ContactItem = (props) => {
  return (
    <p className={classes.ContactItem}>
      {props.label}:
      <span className={classes.ContactItem_Span}> {props.children}</span>
    </p>
  );
};
