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
               <img height='200px' width='250px' src={img} alt="" />
            </div>
            <div>
               <h3 style={{ color: '#f57f17' }}>{bikeName}</h3>
               <h5>Bike Price: <span className='fw-bold'>{price}</span></h5>
               <Button onClick={() => setShow(true)} style={{ backgroundColor: '#f57f17' }} variant='contained'>Purchase</Button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title style={{ color: '#f57f17' }}>{bikeName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button className='bg-info text-light' onClick={handleClose}>
                  Close
               </Button>
               <Button onClick={() => handleAddCart(bike._id)}>
                  <Link style={{ backgroundColor: '#f57f17' }} className='btn text-light' to='/purches'>Purchase Now</Link>
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default SingleBike;