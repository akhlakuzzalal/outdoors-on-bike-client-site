import React from 'react';

const SingleBike = ({ bike }) => {
   const { bikeName, price, img } = bike;
   return (
      <div className='mt-4'>
         <div className='col card-style py-3'>
            <div>
               <img height='200px' width='300px' src={img} alt="" />
            </div>
            <div>
               <h3>{bikeName}</h3>
               <h5>Bike Price: {price}</h5>
            </div>
         </div>
      </div>
   );
};

export default SingleBike;