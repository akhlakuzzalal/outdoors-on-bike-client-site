import React from 'react';
import playstore from '../../img/playStore.png'
import bikeLogo from '../../img/20220113_124217__01.png'

const Footer = () => {
   return (
      <div className='bg-dark text-light'>
         <div className="container">
            <div className='mt-5 pt-5'>
               <div className='row row-cols-lg-3 row-cols-1 px-5 py-3'>
                  <div className='col text-start ps-4'>
                     <div>
                        <img width={'120px'} height={'80px'} src={bikeLogo} alt="" />
                        <h2 className='fw-bold'>Outdoors on Bike</h2>
                     </div>
                     <h6>Lal Mia Tower, Road no 2, Jomidar GOli, Uttor Badda, Dhaka</h6>
                  </div>
                  <div className='col text-start ps-4'>
                     <h4 className='fw-bold'>Important</h4>
                     <h6>GO to Hospital</h6>
                     <h6>Google map</h6>
                     <h6>Need Food??</h6>
                  </div>
                  <div className='col'>
                     <h4>Get It On</h4>
                     <img width='200px' src={playstore} alt="" />
                  </div>
               </div>
               <div className='row'>
                  <div className="col">
                     <p>@All right reseved Outdoors on Bike</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;