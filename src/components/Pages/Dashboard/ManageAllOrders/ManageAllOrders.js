import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const ManageAllOrders = () => {
   const [orders, setOrders] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      fetch('https://outdoors-on-bike.herokuapp.com/orders')
         .then(res => res.json())
         .then(data => setOrders(data))
   }, [loading]);

   const handleAction = (id, stutus) => {
      setLoading(true);
      const update = { stutus }
      fetch(`https://outdoors-on-bike.herokuapp.com/orders/${id}`, {
         method: 'PUT',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(update)
      })
         .then(res => res.json())
         .then(data => {
            setLoading(false)
         })

   }
   return (
      <div className='mx-auto review-style'>
         <h2 className='bg-info'>Manage All Orders</h2>
         <TableContainer className='review-style mx-auto' sx={{ width: { md: '80%', xs: '450px' } }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Bike Name</TableCell>
                     <TableCell align="right">User</TableCell>
                     <TableCell align="right">Stutus</TableCell>
                     <TableCell align="right">Action</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {orders.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="right">{row.user}</TableCell>
                        {
                           loading ?
                              <CircularProgress color="success" />
                              :
                              <TableCell align="right">{row.stutus}</TableCell>
                        }
                        <TableCell align="right">
                           {
                              !row.payment && <DropdownButton>
                                 <ButtonGroup
                                    className='bg-info'
                                    id={`dropdown-button-drop`}
                                    size="sm"
                                    variant="secondary"
                                    title="Drop small"
                                 >
                                    <Dropdown.Item onClick={() => handleAction(row._id, 'Approved')} eventKey="1">Approve</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleAction(row._id, 'Declined')} eventKey="2">Declined</Dropdown.Item>
                                 </ButtonGroup>
                              </DropdownButton>
                           }
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default ManageAllOrders;