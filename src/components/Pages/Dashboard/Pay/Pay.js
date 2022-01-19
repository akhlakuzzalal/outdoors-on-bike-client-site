import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Payment from './Payment';

const Pay = () => {
   const { id } = useParams();
   const [order, setOrders] = useState({});
   useEffect(() => {
      fetch(`https://bike-website-server.herokuapp.com/orders/${id}`)
         .then(res => res.json())
         .then(data => setOrders(data[0]))
   }, [id])
   // console.log(order)
   return (
      <div>
         <h2 style={{ color: '#f57f17' }}>{order?.name}</h2>
         <h3>Payable amount $<span className='fw-bold' style={{ color: '#5469d4' }}>{order?.price}</span></h3>
         <Payment order={order}></Payment>
      </div>
   );
};

export default Pay;