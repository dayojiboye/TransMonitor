import React from 'react';

import ChartBox from './chartBox';
import ProgressBox from './progressBox';
import classes from './styles.module.scss';

const chart = () => {
  return (
    <div className={classes.chart}>
      <ChartBox />
      <ProgressBox />
    </div>
  );
};

export default chart;
