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
         <div class="card h-100">
            <img className='img-fluid p-4 border rounded' src={img} alt="" />
            <div class="card-body">
               <h5 class="card-title">{bikeName}</h5>
               <p class="card-text"> Honda has a total of 22 bikes of which 4 models are upcoming which
                  include CBR1000RR-R Fireblade, CBR500R, CBR300R and CB500F.The Honda Goldwing is the
                  most expensive bike </p>

            </div>
            <div class="card-footer">
               <Button onClick={handlePurches} className='bg-info' variant='contained' >Purches</Button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>{bikeName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleAddCart(bike._id)}>
                  <Link to='/purches'>Purches Now</Link>
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default Product;