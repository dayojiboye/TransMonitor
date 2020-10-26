import React from 'react';

import { Layout } from 'antd';
import Header from '../components/ui/header';
import Sider from '../components/ui/sider';
// import classes from './styles.module.scss';

// const { SubMenu } = Menu;
const { Content } = Layout;

const LayoutContainer = (props) => {
  return (
    <Layout>
      <Header />
      <Layout style={{ height: '100vh' }}>
        <Sider />
        <Layout style={{ padding: '0 24px 24px', background: '#f7f8fa' }}>
          <Content>...</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
