import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../../../../hooks/useCart';

const Product = ({ bike }) => {
   const { img, bikeName } = bike;

   const { setCart } = useCart();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const handlePurches = () => {
      setShow(true);
   };

   const handleAddCart = id => {
      setCart(id)
   };
   return (
      <div class="col">
         <div class="card-style single h-100">
            <img width={'80%'} height={'250px'} className='p-4 mx-auto' src={img} alt="" />
            <div class="card-body">
               <h5 style={{ color: '#f57f17' }} class="card-title fw-bold">{bikeName}</h5>
               <p class="card-text"> Honda has a total of 22 bikes of which 4 models are upcoming which
                  include CBR1000RR-R Fireblade, CBR500R, CBR300R and CB500F.The Honda Goldwing is the
                  most expensive bike </p>

            </div>
            <div style={{ paddingBottom: '30px' }}>
               <Button onClick={handlePurches} className='w-75 text-darkv btn-clr' style={{ backgroundColor: '#f57f17' }} variant='contained' >Purchase</Button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title style={{ color: '#f57f17' }}>{bikeName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button className='bg-info' variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleAddCart(bike._id)}>
                  <Link style={{ backgroundColor: '#f57f17' }} className='btn text-light fw-bold' to='/purches'>Purchase Now</Link>
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default Product;