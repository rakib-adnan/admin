import React from 'react';
import DataTable from '../../componnents/dataTable/DataTable';
import Navbar from '../../componnents/navbar/Navbar';
import Sidebar from '../../componnents/sidebar/Sidebar';
import './List.scss';

const List = () => {
  return (
    <div className='list'>
         <Sidebar/>
    <div className="listContainer">
        <Navbar/>
        <DataTable/>
     
      </div>
    </div>

  )
}

export default List;