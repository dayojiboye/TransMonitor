import React from 'react';

import Transaction from '../../components/transactions';
import Chart from '../../components/chart';
import classes from './styles.module.scss';

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Transaction />
      <Chart />
    </div>
  );
};

export default Home;
