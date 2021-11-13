import { Button, Grid, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';

const Purches = () => {
   const { user } = useAuth();
   const [load, setLoad] = useState(false);
   const [done, setDone] = useState(false);
   const [bike, setBike] = useState({})
   const { getSavedCart, deleteDB } = useCart();
   const id = getSavedCart();
   const cart = Object.keys(id);
   const bikeId = cart[0]


   useEffect(() => {
      if (cart.length !== 0) {
         fetch(`https://outdoors-on-bike.herokuapp.com/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => {
               setBike(data);
            })
      }
   }, []);


   const order = { user: user.email, name: bike.bikeName, img: bike.img, stutus: 'pending' }

   const handelConfirm = () => {
      setLoad(true)
      fetch('https://outdoors-on-bike.herokuapp.com/orders', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(order)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            deleteDB(bikeId);
            setLoad(false)
            setDone(true)
         })
   }
   return (
      <div>
         <h2 className='bg-info py-2'>Confirm Your Order</h2>
         {
            bike?.img ?
               <div className='mt-4'>
                  {
                     load ?
                        <LinearProgress />
                        :
                        <div>
                           {
                              done ?
                                 <div>
                                    <h3 className='bg-success text-light w-75 p-4 mx-auto'>Order send Successfully</h3>
                                    <div className='my-5 py-5'>
                                       <Link to='/home' className='text-decoration-none btn btn-info text-light'>Go To The Home Page</Link>
                                    </div>
                                 </div>
                                 :
                                 <Grid className='review-style w-50 mx-auto align-items-center' container>
                                    <Grid sx={{ width: { md: '500px', xs: '200px' } }} item xs={12} md={8}>
                                       <img className='img-fluid' src={bike?.img} alt="" />
                                    </Grid>
                                    <Grid className='pb-2 mx-auto' item xm={12} md={4}>
                                       <h3 className='text-info'>{bike?.bikeName}</h3>
                                       <h4>Price: <span className='fw-bold text-success'>{bike.price}</span></h4>
                                       <Button onClick={handelConfirm} variant='contained'>Confirm Order</Button>
                                    </Grid>
                                 </Grid>
                           }
                        </div>
                  }
               </div>
               :
               <div className='my-5 py-5'>
                  <Link to='/home' className='text-decoration-none btn btn-info text-light'>Go To The Home Page</Link>
               </div>
         }
      </div >
   );
};

export default Purches;