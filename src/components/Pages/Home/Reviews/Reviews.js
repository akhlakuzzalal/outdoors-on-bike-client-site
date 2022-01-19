import React, { useEffect, useState } from 'react';
import ReviewHome from './Review/ReviewHome';
import { Carousel } from '@trendyol-js/react-carousel';
import { Spinner } from 'react-bootstrap';
import { Rating } from '@mui/material';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   let ret = 0

   useEffect(() => {
      fetch('https://bike-website-server.herokuapp.com/reviews')
         .then(res => res.json())
         .then(data => setReviews(data))
   }, []);

   if (reviews.length > 0) {
      for (let r of reviews) {
         ret += r.rate
      }
   }

   console.log((ret / reviews.length).toFixed(1))
   return (
      <div className='container'>
         <h2 style={{ color: '#f57f17', padding: '80px 0' }} className='pb-2 pt-4 fs-2 fw-bold mt-4'>Users Review</h2>
         <div className='d-flex justify-content-center'>
            <Rating name="read-only" value={(ret / reviews.length).toFixed(1)} readOnly /> <p>  ({(ret / reviews.length).toFixed(1)})</p>
         </div>
         {reviews.length > 0 ?
            <Carousel className='review-carosel' show={3.3} slide={1} swiping={true}>
               {
                  reviews.map(review => <ReviewHome key={review._id} review={review}></ReviewHome>)
               }
            </Carousel>
            :
            <>
               <Spinner></Spinner>
            </>
         }
      </div>
   );
};

export default Reviews;