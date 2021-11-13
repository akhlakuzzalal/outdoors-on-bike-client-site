import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress } from '@mui/material';
import { Modal } from 'react-bootstrap';


const MyOrders = () => {
   const { user } = useAuth();
   const [loading, setLoading] = useState(false);
   const [order, setOrder] = useState([]);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);


   const email = user.email
   useEffect(() => {
      fetch(`http://localhost:4000/orders/${email}`, {
         method: 'POST'
      })
         .then(res => res.json())
         .then(data => {
            setOrder(data);
            setLoading(false)
         })
   }, [loading]);

   const handleModal = (id) => {
      setShow(false);
      handleDelete(id)
   }

   const handleDelete = (id) => {
      fetch(`http://localhost:4000/orders/${id}`, {
         method: 'DELETE'
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.deletedCount === 1) {
               setLoading(true)
            }
         })
   }

   return (
      <div>
         <h3 className='bg-info py-2'>My Orders</h3>
         <TableContainer className='review-style mx-auto' sx={{ width: { md: '80%', xs: '450px' } }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Bike Name</TableCell>
                     <TableCell align="right">Image</TableCell>
                     <TableCell align="right">User</TableCell>
                     <TableCell align="right">Stutus</TableCell>
                     <TableCell align="right">Action</TableCell>
                  </TableRow>
               </TableHead>
               {
                  loading ?
                     <LinearProgress />
                     :
                     <TableBody>
                        {order.map((row) => (
                           <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                              <TableCell component="th" scope="row">
                                 {row.name}
                              </TableCell>
                              <TableCell align="right">
                                 <img width='120px' height='80px' src={row.img} alt='' />
                              </TableCell>
                              <TableCell align="right">{row.user}</TableCell>
                              <TableCell align="right">{row.stutus}</TableCell>
                              <TableCell align="right">
                                 <Button onClick={() => setShow(true)} className='bg-danger' variant='contained'>Delete</Button>
                              </TableCell>
                              <Modal className='mt-5' show={show} onHide={handleClose} animation={false}>
                                 <Modal.Header closeButton>
                                    <Modal.Title className='text-danger'>Do you want to Delete this Item</Modal.Title>
                                 </Modal.Header>
                                 <Modal.Body>Are you Sure...?</Modal.Body>
                                 <Modal.Footer>
                                    <Button className='bg-info' variant="contained" onClick={handleClose}>
                                       Close
                                    </Button>
                                    <Button variant='contained' onClick={() => handleModal(row._id)} className='bg-danger' >
                                       OK
                                    </Button>
                                 </Modal.Footer>
                              </Modal>
                           </TableRow>
                        ))}
                     </TableBody>
               }
            </Table>

         </TableContainer>

      </div >
   );
};

export default MyOrders;