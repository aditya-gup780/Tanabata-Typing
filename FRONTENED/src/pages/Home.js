import React from 'react';
import Navbar1 from '../components/Navbar1';
import Top from '../components/Top';
import Mid from '../components/Mid'
import Bottom from '../components/Bottom'

const Home = () => {
  return (
    <div className="home">
          <Navbar1/>
          <Top/>
          <Mid/>
          <Bottom/>
    </div>
  );
};

export default Home;