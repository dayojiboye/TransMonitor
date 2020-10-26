import React from 'react';

import Nav from '../nav';
import classes from './styles.module.scss';

const header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <span>TransMonitor</span>
      </div>

      <Nav />
    </div>
  );
};

export default header;
