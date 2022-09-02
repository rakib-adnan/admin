import React from 'react';
import Chart from '../../componnents/chart/Chart';
import Featured from '../../componnents/featured/Featured';
import Navbar from '../../componnents/navbar/Navbar';
import Sidebar from '../../componnents/sidebar/Sidebar';
import Table from '../../componnents/table/Table';
import Widget from '../../componnents/widget/Widget';
import './Home.scss';

const Home = () => {
  return (
    <>
    <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="erarning"/>
          <Widget type="balance"/>
        </div>
        {/* <div className="charts">
          <Featured/>
          <Chart/>
        </div> */}
        <div className="listContainer">
          <div className="listTitle">
            <Table/>
          </div>
        </div>
        
       </div>
    </div>
    </>
  )
}

export default Home;