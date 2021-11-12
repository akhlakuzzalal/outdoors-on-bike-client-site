import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
   const [bikes, setBIkes] = useState([]);
   useEffect(() => {
      fetch('http://localhost:4000/bikes')
         .then(res => res.json())
         .then(data => setBIkes(data))
   }, [])
   return (
      <div>
         <h2 className='review-style py-2 bg-info text-light'>Bikes Collection</h2>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <div className='row gx-4 row-cols-lg-3 row-cols-1 m-4'>
                  {
                     bikes.slice(0, 6).map(bike => <Product key={bike._id} bike={bike}></Product>)
                  }
               </div>
            </Grid>
         </Grid>

      </div>
   );
};

export default Products;