import React from 'react';

const SingleBrand = ({ data }) => {
   const { name, img } = data
   return (
      <div className=' p-2 col'>
         <div className=''>
            <img width='200px' src={img} alt='' />
            <h3>{name}</h3>
         </div>
      </div>
   );
};

export default SingleBrand;