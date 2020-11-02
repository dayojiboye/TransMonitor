import React from 'react';

import Table from './table';
import Dropdown from '../ui/dropdown';
import Input from '../ui/input';
import classes from './styles.module.scss';

const payments = () => {
  return (
    <div className={classes.payments}>
      <h2>Payments</h2>

      <div className={classes.topPagination}>
        <span>Showing</span>

        <Dropdown dropClass={classes.dropdown} btnText="20" />

        <span>out of 500 payments</span>

        <div className={classes.search}>
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Search payments"
            autoComplete="off"
          />
        </div>

        <span>Show</span>

        <Dropdown dropClass={classes.paymentsDropdown} btnText="All" />
      </div>

      <Table />
    </div>
  );
};

export default payments;
