import React from 'react';

import Daily from './daily';
import Total from './total';
import classes from './styles.module.scss';

const transactions = (props) => {
  return (
    <div className={classes.transactions}>
      <Daily />

      <Total />
    </div>
  );
};

export default transactions;
