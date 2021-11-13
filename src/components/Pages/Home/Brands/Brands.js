import { Grid } from '@mui/material';
import React from 'react';
import BrandDB from './brandsDB';
import SingleBrand from './SingleBrand';

const Brands = () => {
   const brands = BrandDB;
   return (
      <div>
         <h2 className='py-2 bg-info'>Popular Brands</h2>
         <div className='row gx-4 row-cols-lg-4 row-cols-1 m-4'>
            {
               brands.map(p => <SingleBrand key={p.id} data={p}></SingleBrand>)
            }
         </div>
      </div>
   );
};

export default Brands;