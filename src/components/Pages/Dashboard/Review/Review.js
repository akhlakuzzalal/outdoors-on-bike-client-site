import { Avatar, Rating, TextField, Button, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
   const [profile, setProfile] = useState({});
   const [rate, setRate] = useState(0);
   const [rateText, setRateText] = useState('');
   const [loading, setLoading] = useState(false);
   const { user } = useAuth()

   useEffect(() => {
      fetch(`https://outdoors-on-bike.herokuapp.com/users/${user?.email}`)
         .then(res => res.json())
         .then(data => {
            setProfile(data)
         })
   }, [user]);

   const reviewText = e => {
      const newText = e.target.value
      setRateText(newText)
   }

   const handleSubmit = () => {
      setLoading(true);
      const newReview = { name: profile.name, rate: rate, img: profile.img, text: rateText }
      fetch('https://outdoors-on-bike.herokuapp.com/reviews', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(newReview)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setLoading(false)
         })
   }
   return (
      <div>
         {
            loading ?
               <LinearProgress />
               :
               <div className='w-75 mx-auto bg-shadow p-4'>
                  <h3>Rate and Review Our Page</h3>
                  <div>
                     <div className='d-flex align-items-center'>
                        <Avatar sx={{ width: 32, height: 32 }}> <img className='img-fluid' src={profile.img} alt="" /> </Avatar>
                        <span className='fs-5 ms-2'>{profile.name}</span>
                     </div>
                     <p className='text-start'>Your review will be shown Publically in Home page</p>
                  </div>
                  <div>
                     <h4>Please Rate Our page</h4>
                     <Rating
                        name="simple-controlled"
                        value={rate}
                        onChange={(event, newValue) => {
                           setRate(newValue);
                        }} />
                     <TextField
                        onChange={reviewText}
                        sx={{ width: '100%' }}
                        id="outlined-multiline-static"
                        label="Say Something about our page"
                        multiline
                        rows={5}
                        placeholder='Your Openion'
                     />
                  </div>
                  <Button
                     className='mt-2'
                     variant='contained'
                     onClick={handleSubmit}
                  >SUbmit</Button>
               </div>
         }
      </div>
   );
};

export default Review;