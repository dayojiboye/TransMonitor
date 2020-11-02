import React from 'react';

import Transaction from '../../components/transactions';
import Chart from '../../components/chart';
import Payments from '../../components/payments';
import classes from './styles.module.scss';

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Transaction />
      <Chart />
      <Payments />
    </div>
  );
};

export default Home;
