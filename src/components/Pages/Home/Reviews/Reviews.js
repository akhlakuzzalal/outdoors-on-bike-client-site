import React, { useEffect, useState } from 'react';
import ReviewHome from './Review/ReviewHome';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch('https://bike-website-server.herokuapp.com/reviews')
         .then(res => res.json())
         .then(data => setReviews(data))
   }, [])
   return (
      <div className='container'>
         <h2 style={{ color: '#f57f17', padding: '80px 0' }} className='pb-2 pt-4 fs-2 fw-bold mt-4'>Users Review</h2>
         <div className='row mb-4'>
            {
               reviews.map(review => <ReviewHome key={review._id} review={review}></ReviewHome>)
            }
         </div>
      </div>
   );
};

export default Reviews;