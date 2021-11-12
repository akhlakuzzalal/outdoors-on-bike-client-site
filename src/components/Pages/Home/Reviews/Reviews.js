import React, { useEffect, useState } from 'react';
import ReviewHome from './Review/ReviewHome';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch('http://localhost:4000/reviews')
         .then(res => res.json())
         .then(data => setReviews(data))
   }, [])
   return (
      <div>
         <h2 className='review-style py-2 bg-info'>Users Review</h2>
         <div style={{ minHeight: "100px" }} className='row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4'>
            {
               reviews.map(review => <ReviewHome key={review._id} review={review}></ReviewHome>)
            }
         </div>
      </div>
   );
};

export default Reviews;