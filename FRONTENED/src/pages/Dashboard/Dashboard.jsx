import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import SideList from "../../components/sidelist/SideList";
import {useNavigate} from 'react-router-dom'; 
// import Top from '../components/Top';
// import Mid from '../components/Mid'
// import Bottom from '../components/Bottom'

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div className="dashboard">
      <Navbar2 />
      <div className="Text">
        <SideList />
      </div>
      <div className="text-center">
        <h1>Welcome to Tanabata-typing</h1>
        <button type="button" onClick={() => navigate('/game/create')} className="btn btn-primary btn-lg mr-3"> Create Game </button>
        <button type="button" onClick={() => navigate('/game/create')} className="btn btn-primary btn-lg"> Join Game </button>
      </div>
    </div>
  );
};

export default Dashboard;
