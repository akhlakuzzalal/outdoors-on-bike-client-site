import { Button } from '@mui/material';
import React from 'react';

const Product = ({ bike }) => {
   const { img, bikeName } = bike;
   console.log(bike)
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
               <Button className='bg-info' variant='contained' >Purches</Button>
            </div>
         </div>
      </div>
   );
};

export default Product;