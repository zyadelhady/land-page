import React, { useState } from 'react';
import classes from './Contact.module.scss';
import { Waypoint } from 'react-waypoint';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactInput } from '../ContactInputs/ContactInput/ContactInput';
import { ContactTextarea } from '../ContactInputs/ContactTextarea/ContactTextarea';

import Container from '../../hoc/Container/Container';

export const Contact = () => {
  const [isEntered, setIsEntered] = useState(false);
  const handleWaypointEnter = () => {
    setIsEntered(true);
  };
  const handleWaypointLeave = () => {
    setIsEntered(false);
  };
  return (
    <section id="contact" className={classes.Background}>
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <Container>
        <div className={classes.Contact}>
          <div
            className={`${classes.Contact_Details} ${
              isEntered ? classes.slideInLeft : ''
            }`}
          >
            <h4>Contact Info:</h4>
            <p className={classes.Contact_Details_Desciption}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              magnam quod culpa exercitationem odio repellendus adipisci
              possimus, fugit quia animi? Esse pariatur non asperiores totam
              architecto necessitatibus quas laborum doloremque.
            </p>
            <ContactItem label="Address">1725 Slough Avenue</ContactItem>
            <ContactItem label="Phone">(252) 969-0311</ContactItem>
            <ContactItem label="Email">dummy@mail.com</ContactItem>
            <ContactItem label="Fax">(252) 969-0311</ContactItem>
          </div>
          <form
            action=""
            className={`${classes.Contact_Form} ${
              isEntered ? classes.slideInRight : ''
            }`}
          >
            <div className={classes.Contact_Form_TwoCol}>
              <ContactInput placeholder="Your Name" />
              <ContactInput placeholder="Your Email" />
            </div>
            <ContactInput placeholder="Your Title" />
            <ContactTextarea placeholder="Your Comment" />
            <button>send massage</button>
          </form>
        </div>
      </Container>
    </section>
  );
};
