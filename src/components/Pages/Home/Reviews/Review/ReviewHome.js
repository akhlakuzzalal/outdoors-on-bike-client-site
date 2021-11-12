import { Rating } from '@mui/material';
import React from 'react';

const ReviewHome = ({ review }) => {
   const { name, img, rate, text } = review
   return (
      <div>
         <div class="col review-style">
            <div class="card ">
               <div class="d-flex justify-content-center py-5">
                  <img class="w-25 border rounded-circle card-img-top"
                     src={img}
                     alt="..." />
               </div>
               <div class="card-body px-4 text-center">
                  <p class="card-text">{text}</p>
                  <Rating name="read-only" value={rate} readOnly />
                  <p class="text-primary">{name}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReviewHome;