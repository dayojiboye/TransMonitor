import React from 'react';

import Nav from '../nav';
import { Logo } from '../../../assets/svg';
import classes from './styles.module.scss';

const header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <Nav />
    </div>
  );
};

export default header;
