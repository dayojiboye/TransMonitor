import React from 'react';

import { Layout, Menu, Button } from 'antd';
import {
  Overview,
  AllPayments,
  ReconciledPayments,
  UnReconciledPayments,
  ManualSettlements,
  AllOrders,
  PendingOrders,
  ReconciledOrders,
  MerchantProfile,
} from '../../../assets/svg';
import classes from './styles.module.scss';

const { Sider } = Layout;

const siderComponent = (props) => {
  return (
    <Sider width={300} className={classes.sider} theme="light">
      <div className={classes.generateInvoice}>
        <Button type="primary">GENERATE INVOICE</Button>
      </div>

      <Menu mode="inline" className={classes.menu} defaultSelectedKeys="1">
        <Menu.ItemGroup key="g1" title="Main" className={classes.itemGroup}>
          <Menu.Item key="1" className={classes.menuItems}>
            <Overview />
            <span>Overview</span>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g2" title="Payments" className={classes.itemGroup}>
          <Menu.Item key="2" className={classes.menuItems}>
            <AllPayments />
            <span>All Payments</span>
          </Menu.Item>

          <Menu.Item key="3" className={classes.menuItems}>
            <ReconciledPayments />
            <span>Reconciled Payments</span>
          </Menu.Item>

          <Menu.Item key="4" className={classes.menuItems}>
            <UnReconciledPayments />
            <span>Un - Reconciled Payments</span>
          </Menu.Item>

          <Menu.Item key="5" className={classes.menuItems}>
            <ManualSettlements />
            <span>Manual Settlement</span>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g3" title="Orders" className={classes.itemGroup}>
          <Menu.Item key="6" className={classes.menuItems}>
            <AllOrders />
            <span>All Orders</span>
          </Menu.Item>

          <Menu.Item key="7" className={classes.menuItems}>
            <PendingOrders />
            <span>Pending Orders</span>
          </Menu.Item>

          <Menu.Item key="8" className={classes.menuItems}>
            <ReconciledOrders />
            <span>Reconciled Orders</span>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g4" className={classes.itemGroup}>
          <Menu.Item key="9" className={classes.menuItems}>
            <MerchantProfile />
            <span>Merchant Profile</span>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default siderComponent;
