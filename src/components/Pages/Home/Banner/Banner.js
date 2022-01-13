import React from 'react';
import headerImg from './images/header-bike.png'

const Banner = () => {
   return (
      <div style={{ backgroundColor: '#e3dcd6', padding: '80px 0' }}>
         <div className="container">
            <div className="row justify-content-center align-items-center">
               <div className="col-lg-6 text-dark text-start ps-5">
                  <h1 style={{ color: '#f57f17' }}>Honda CBR 300R</h1>
                  <p className="w-75">The Honda CBR models are a
                     series of Honda sport bikes first introduced in
                     1983. With the exception of the single-cylinder
                     CBR125R, CBR150R, CBR250R and CBR300R, all CBR
                     motorbikes have inline engines. Less
                     sporting/general models make up CB series. </p>
               </div>
               <div className="col-lg-6">
                  <img className="img-fluid" src={headerImg} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;