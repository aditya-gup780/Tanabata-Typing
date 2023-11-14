import React from 'react';
import Navbar from '../components/Navbar';
import Top from '../components/Top';
import Mid from '../components/Mid'
import Bottom from '../components/Bottom'

const Home = () => {
  return (
    <div className="home">
          <Navbar/>
          <Top/>
          <Mid/>
          <Bottom/>
    </div>
  );
};

export default Home;