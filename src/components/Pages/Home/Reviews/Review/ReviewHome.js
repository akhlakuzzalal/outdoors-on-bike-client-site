import { Container, Rating } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const ReviewHome = ({ review }) => {
   const { name, img, rate, text } = review;
   let [displayText, setDisplay] = useState('none')
   let [btnText, setBtnTxt] = useState('read more')
   const expand = () => {
      if (displayText === 'none') {
         setDisplay('inline')
         setBtnTxt('read less')
      }
      if (displayText === 'inline') {
         setDisplay('none')
         setBtnTxt('read more')
      }
   }
   return (
      <Container className="review-style mx-1 my-2" sx={{ minHeight: '350px', marginRight: '20px' }}>
         <div class="d-flex justify-content-center pt-5">
            <img class="w-25 border rounded-circle card-img-top"
               src={img}
               alt="..." />
         </div>
         <div class="card-body px-4 text-center">
            <p class="card-text">{text.slice(0, 100)}
               <span id='more' style={{ display: `${displayText}` }}>
                  {text.slice(100, 600)}
               </span>
               {
                  text?.length > 100 &&
                  <>
                     <button className='more-btn' onClick={() => expand()}>
                        ...{btnText}
                     </button>
                  </>
               }
            </p>
            <Rating name="read-only" value={rate} readOnly />
            <p class="text-primary">{name}</p>
         </div>
      </Container >
   );
};

export default ReviewHome;