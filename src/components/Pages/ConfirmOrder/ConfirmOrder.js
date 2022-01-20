import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const ConfirmOrder = () => {
   const { id } = useParams();
   const [order, setOrder] = useState({})
   const navigate = useNavigate()
   const { name, img, price } = order

   useEffect(() => {
      fetch(`https://bike-website-server.herokuapp.com/orders/${id}`)
         .then(res => res.json())
         .then(data => setOrder(data[0]))
   }, [id])

   const placed = () => {
      fetch(`https://bike-website-server.herokuapp.com/payment/${id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({ price })
      })
         .then(res => res.json())
         .then(data => console.log(data))
   }
   return (
      <div>
         <h1>Confirm your payment from here</h1>
         <h2 className='fw-bold'>{name}</h2>
         <img width={'350px'} src={img} alt="" /> <br />
         <Button as={Link} to='/dashBoard'
            className='mt-2 w-25'
            style={{ backgroundColor: '#f57f17' }}
            variant='contained'
            onClick={() => placed()}
         >Placed the order</Button>
         <Footer></Footer>
      </div>
   );
};

export default ConfirmOrder;