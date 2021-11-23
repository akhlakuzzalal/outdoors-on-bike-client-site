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
   return (
      <div>
         <h3>Payment for Name id:{order?.name}</h3>
         <h2>Pay TK : {order?.price}</h2>
         <Payment order={order}></Payment>
      </div>
   );
};

export default Pay;