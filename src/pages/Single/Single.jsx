import React from 'react';
import Navbar from '../../componnents/navbar/Navbar';
import Sidebar from '../../componnents/sidebar/Sidebar';
import "./Single.scss";

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        Single
      </div>
    </div>
  )
}

export default Single;