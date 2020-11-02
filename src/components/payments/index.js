import React from 'react';

import Table from './table';
import Dropdown from '../ui/dropdown';
import Input from '../ui/input';
import Button from '../ui/button';
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

        <Dropdown dropClass={classes.paymentsDropdown} btnText="All">
          <ul className={classes.dropdownMenu}>
            <li>All</li>
            <li>Reconcilled</li>
            <li>Un-reconcilled</li>
            <li>Settled</li>
            <li>Unsettled</li>
          </ul>
        </Dropdown>
      </div>

      <Table />

      <div className={classes.bottomPagination}>
        <span>Showing 1 to 10 of 500 entries</span>
        <div className={classes.buttonGroup}>
          <Button>Previous</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default payments;
