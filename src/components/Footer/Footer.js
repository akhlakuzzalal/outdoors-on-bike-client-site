import React from 'react';
import playstore from '../../img/playStore.png'

const Footer = () => {
   return (
      <div className='bg-info mt-2'>
         <h1 className='py-3 m-0'>Ride with new Bike...!!</h1>
         <div className='row row-cols-lg-3 row-cols-1 px-5 py-3'>
            <div className='col text-start ps-4'>
               <h1>Address</h1>
               <h4>Lal Mia Tower</h4>
               <h4>Road no 2</h4>
               <h4>Jomidar GOli</h4>
               <h4>Uttor Badda</h4>
               <h4>Dhaka</h4>
            </div>
            <div className='col text-start ps-4'>
               <h1>Important</h1>
               <h4>GO to Hospital</h4>
               <h4>Google map</h4>
               <h4>Need Food??</h4>
            </div>
            <div className='col'>
               <h3>Get It On</h3>
               <img width='250px' src={playstore} alt="" />
            </div>
         </div>
         <div>
            @al right reseved <span className='fs-4 fw-bold text-danger'>Outdoors on Bike</span>
         </div>
      </div>
   );
};

export default Footer;