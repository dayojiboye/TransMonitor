import React from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { dataSource } from '../../../util/dataSource';

import Card from '../../ui/card';
import Dropdown from '../../ui/dropdown';
import Button from '../../ui/button';
import classes from './styles.module.scss';

ReactFusioncharts.fcRoot(FusionCharts, Charts, FusionTheme);

const chartBox = () => {
  return (
    <Card cardClass={classes.chartBox}>
      <div className={classes.chartHeader}>
        <span className={classes.date}>Today: 5, Aug 2018</span>
        <div className={classes.datePicker}>
          <Dropdown
            dropClass={classes.dropdown}
            dropBtn={classes.dropBtn}
            btnText="1 Jan - 1 Jun"
          />
          <div className={classes.navButtons}>
            <Button buttonClass={classes.navBtn}>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </Button>
            <Button buttonClass={classes.navBtn}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Button>
          </div>
        </div>
      </div>
      <ReactFusioncharts
        type="area2d"
        width="100%"
        height="265"
        dataFormat="JSON"
        dataSource={dataSource}
        className={classes.chartArea}
      />
    </Card>
  );
};

export default chartBox;
