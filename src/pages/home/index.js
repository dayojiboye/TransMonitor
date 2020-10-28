import React from 'react';

import Transaction from '../../components/transactions';
import classes from './styles.module.scss';

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Transaction />
    </div>
  );
};

export default Home;
