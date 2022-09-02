import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.scss'


const rows = [
  {
    id :1,
    product : " asus",
    customar: "Harold",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    date : "1 March",
    amount : 2000,
    method : "Online",
    status : "Approved"
  },
  {
    id :2,
    product : " asus",
    customar: "Harold",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    date : "1 March",
    amount : 2000,
    method : "Online",
    status : "Pending"
  },
  {
    id :3,
    product : " asus",
    customar: "Harold",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    date : "1 March",
    amount : 2000,
    method : "Online",
    status : "Approved"
  },
  {
    id :4,
    product : " asus",
    customar: "Harold",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    date : "1 March",
    amount : 2000,
    method : "Online",
    status : "Pending"
  },
  {
    id :5,
    product : " asus",
    customar: "Harold",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    date : "1 March",
    amount : 2000,
    method : "Online",
    status : "Cancelled"
  },
  {
    id :5,
    product : " asus",
    customar: "Harold",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    date : "1 March",
    amount : 2000,
    method : "Online",
    status : "Cancelled"
  },
];

const List=() =>{
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customar</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            <TableCell className='tableCell'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={row.image} className='image' alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customar}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className='tableCell'>
                  <div className="cellAction">
                    <div className="viewButton">Edit</div>
                    <div className="deleteButton">Delete</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default List;

