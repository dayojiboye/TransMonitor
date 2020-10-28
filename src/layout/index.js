import React from 'react';

import Header from '../components/ui/header';
import Sider from '../components/ui/sider';
import classes from './styles.module.scss';

const LayoutContainer = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />

      <Sider />

      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default LayoutContainer;
