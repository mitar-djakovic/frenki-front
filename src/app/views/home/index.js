import React from 'react';
import TopNav from '../../components/molecules/topNav';
import SideNav from '../../components/molecules/sideNav';

const HomeView = () => (
  <div style={{
    backgroundColor: '#f4f7fc', width: '100%', height: '100vh', position: 'relative',
  }}
  >
    <TopNav />
    <SideNav />
  </div>
);

export default HomeView;
