import React from 'react';
import Navbar2 from '../components/Navbar2';
import SideList from '../components/SideList';
// import Top from '../components/Top';
// import Mid from '../components/Mid'
// import Bottom from '../components/Bottom'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar2 />
            <div className='Text'>
                <SideList />
            </div>
        </div>
    );
};

export default Dashboard;