import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';

const SingleBike = ({ bike }) => {
   const { bikeName, price, img } = bike;

   const { setCart } = useCart();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const handleAddCart = id => {
      setCart(id)
   };
   return (
      <div className='mt-4'>
         <div className='col card-style py-3'>
            <div>
               <img height='200px' width='300px' src={img} alt="" />
            </div>
            <div>
               <h3>{bikeName}</h3>
               <h5>Bike Price: {price}</h5>
               <Button onClick={() => setShow(true)} variant='contained'>Purches</Button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>{bikeName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button className='bg-info text-light' onClick={handleClose}>
                  Close
               </Button>
               <Button onClick={() => handleAddCart(bike._id)}>
                  <Link className='btn btn-success' to='/purches'>Purches Now</Link>
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default SingleBike;