import React from 'react';
import playstore from '../../img/playStore.png'

const Footer = () => {
   return (
      <div className='bg-info mt-2'>
         <h1 className='py-3 m-0 fs-3'>Ride with new Bike...!!</h1>
         <div className='row row-cols-lg-3 row-cols-1 px-5 py-3'>
            <div className='col text-start ps-4'>
               <h4>Address</h4>
               <h6>Lal Mia Tower, Road no 2, Jomidar GOli, Uttor Badda, Dhaka</h6>
            </div>
            <div className='col text-start ps-4'>
               <h6>Important</h6>
               <h6>GO to Hospital</h6>
               <h6>Google map</h6>
               <h6>Need Food??</h6>
            </div>
            <div className='col'>
               <h4>Get It On</h4>
               <img width='200px' src={playstore} alt="" />
            </div>
         </div>
         <div>
            @al right reseved <span className='fs-5 fw-bold text-light'>Outdoors on Bike</span>
         </div>
      </div>
   );
};

export default Footer;