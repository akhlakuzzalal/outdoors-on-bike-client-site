import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ManageProduct = ({ bike, setLoading }) => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const { bikeName, img, price, _id } = bike;

   const handleDelete = (id) => {
      setShow(false);
      setLoading(true)
      fetch(`https://outdoors-on-bike.herokuapp.com/bikes/${id}`, {
         method: 'DELETE'
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setLoading(false)
         })
   }
   return (
      <div className='w-75 mx-auto'>
         <div className='row row-cols-lg-3 row-cols-1 m-0 py-3 card-style'>
            <div>
               <img height='150px' width='300px' src={img} alt="" />
            </div>
            <div>
               <h1>{bikeName}</h1>
               <h4>Cost: {price}</h4>
            </div>
            <div>
               <Button onClick={() => setShow(true)} className='bg-danger text-light' variant='cotained'>Delete</Button>
            </div>
         </div>
         <Modal className='mt-5' show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>Confirm For Delete <span className='text-info'>{bikeName}</span> </Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-danger'>Do You want to Delete This From This shop...!</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleDelete(_id)}>
                  Remove
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default ManageProduct;