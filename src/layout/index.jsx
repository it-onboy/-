
import { Layout } from 'antd';
import React from 'react';
import { SideBar, AppHeader, AppContent } from './components'

const App = () => {
  
  return (
    <Layout id='components-layout-demo-custom-trigger'>
      <SideBar></SideBar>
      <Layout >
        <AppHeader></AppHeader>
        <AppContent></AppContent>
      </Layout>
    </Layout>
  )
};

export default App;