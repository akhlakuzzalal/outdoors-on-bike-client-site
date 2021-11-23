import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';
import { CircularProgress } from '@mui/material';


const ManageProducts = () => {
   const [bikes, setBIkes] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      fetch('https://bike-website-server.herokuapp.com/bikes')
         .then(res => res.json())
         .then(data => setBIkes(data))
   }, [loading])
   return (
      <div>
         {
            loading ?
               <CircularProgress color="success" />


               :
               <div>
                  <h2 className='bg-info py-2 text-light'>Manage All Products</h2>
                  {
                     bikes.map(bike => <ManageProduct key={bike._id} bike={bike} setLoading={setLoading}></ManageProduct>)
                  }
               </div>
         }
      </div>
   );
};

export default ManageProducts;