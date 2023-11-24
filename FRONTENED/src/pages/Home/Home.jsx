import React from "react";
import Navbar1 from "../../components/Navbar1/Navbar1";
import Top from "../../components/topmidbottom/Top";
import Mid from "../../components/topmidbottom/Mid";
import Bottom from "../../components/topmidbottom/Bottom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar1 />
      <Top />
      <Mid />
      <Bottom />
    </div>
  );
};

export default Home;
