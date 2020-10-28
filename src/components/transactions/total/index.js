import React from 'react';

import Card from '../../ui/card';
import { Stats } from '../../../assets/svg';
import classes from './styles.module.scss';

const totalTransaction = (props) => {
  return (
    <div className={classes.total}>
      <Card cardClass={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.text}>
            <span>Total Transaction Volume</span>
            <span>452,000</span>
          </div>
          <div>
            <Stats />
          </div>
        </div>
      </Card>

      <Card cardClass={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.text}>
            <span>Total Transaction Value</span>
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

export default totalTransaction;
