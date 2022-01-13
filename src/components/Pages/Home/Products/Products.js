import { Grid, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Product from './Product/Product';

const Products = () => {
   const [bikes, setBIkes] = useState([]);
   const { loading } = useAuth();
   useEffect(() => {
      fetch('https://bike-website-server.herokuapp.com/bikes')
         .then(res => res.json())
         .then(data => setBIkes(data))
   }, [])
   return (
      <div className='container' style={{ padding: '80px 0' }}>
         <h2 style={{ color: '#f57f17' }} className='mt-4 fs-2 fw-bold'>Bikes Collection</h2>
         {
            loading ?
               <><h1 className='fw-bold'>Please wait for load the server..</h1>
                  <LinearProgress color="secondary" />
               </>
               :
               <>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <div className='row g-4 row-cols-lg-3 row-cols-1 m-4'>
                           {
                              bikes.slice(0, 6).map(bike => <Product key={bike._id} bike={bike}></Product>)
                           }
                        </div>
                     </Grid>
                  </Grid>
               </>
         }

      </div>
   );
};

export default Products;