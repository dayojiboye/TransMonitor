import React from 'react';

import Card from '../../ui/card';
import { Stats } from '../../../assets/svg';
import classes from './styles.module.scss';

const dailyTransactions = (props) => {
  return (
    <div className={classes.daily}>
      <Card cardClass={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.text}>
            <span>Daily Transaction Volume</span>
            <span>2,342</span>
          </div>
          <div>
            <Stats />
          </div>
        </div>
      </Card>

      <Card cardClass={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.text}>
            <span>Daily Transaction Value</span>
            <span>&#8358; 4,000,000</span>
          </div>
          <div>
            <Stats />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default dailyTransactions;
