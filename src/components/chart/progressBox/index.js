import React from 'react';

import Card from '../../ui/card';
import ProgressBar from '../../ui/progressBar';
import classes from './styles.module.scss';

const progressBox = () => {
  return (
    <div className={classes.progressBox}>
      <Card cardClass={classes.progressCard}>
        <span className={classes.cardHeader}>Orders</span>
        <ProgressBar pgClass={classes.progressBar}>
          <span></span>
        </ProgressBar>
        <ul className={classes.progressStats}>
          <li>
            Pending Orders: <span style={{ color: 'gold' }}>20</span>
          </li>
          <li>
            Reconciled Orders: <span style={{ color: '#27ae60' }}>80</span>
          </li>
          <li>
            Total Orders: <span style={{ color: '#1875F0' }}>100</span>
          </li>
        </ul>
      </Card>

      <Card cardClass={classes.progressCard}>
        <span className={classes.cardHeader}>Payments</span>
        <ProgressBar pgClass={classes.progressBar}>
          <span></span>
        </ProgressBar>
        <ul className={classes.progressStats}>
          <li>
            Un-reconciled Payments: <span style={{ color: 'gold' }}>20</span>
          </li>
          <li>
            Reconciled Payments: <span style={{ color: '#27ae60' }}>80</span>
          </li>
          <li>
            Total Payments: <span style={{ color: '#1875F0' }}>100</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default progressBox;
