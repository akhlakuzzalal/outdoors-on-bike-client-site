import React from 'react';
import BrandDB from './brandsDB';
import SingleBrand from './SingleBrand';

const Brands = () => {
   const brands = BrandDB;
   return (
      <div className='container'>
         <h2 style={{ color: '#f57f17' }} className='py-2 fs-2 fw-bold mt-4'>Popular Brands</h2>
         <div className='row gx-4 row-cols-lg-4 row-cols-1 m-4'>
            {
               brands.map(p => <SingleBrand key={p.id} data={p}></SingleBrand>)
            }
         </div>
      </div>
   );
};

export default Brands;