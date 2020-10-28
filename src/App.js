import React from 'react';

// layout

import Layout from './layout';

// page

import Home from './pages/home';

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
