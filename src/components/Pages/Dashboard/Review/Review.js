import { Avatar, Rating, TextField, Button, LinearProgress, Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
   const [profile, setProfile] = useState({});
   const [rate, setRate] = useState(0);
   const [rateText, setRateText] = useState('');
   const [alertText, setAlert] = useState(false);
   const [loading, setLoading] = useState(false);
   const { user } = useAuth()

   useEffect(() => {
      fetch(`https://bike-website-server.herokuapp.com/users/${user?.email}`)
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
      fetch('https://bike-website-server.herokuapp.com/reviews', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(newReview)
      })
         .then(res => res.json())
         .then(data => {
            if (data.insertedId) {
               setAlert(true)
            }
            setLoading(false)
         })
   }

   setTimeout(() => {
      setAlert(false)
   }, 10000)
   return (
      <div>
         {
            loading ?
               <LinearProgress />
               :
               <div className='mx-auto p-4 text-start'>
                  <h3 style={{ color: '#f57f17' }} className='text-center pb-2'>Rate and Review Our Page</h3>
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
                     style={{ backgroundColor: '#f57f17' }}
                     variant='contained'
                     onClick={handleSubmit}
                  >Submit</Button>
               </div>
         }
         {alertText && <Alert
            sx={{ width: '50%', mx: 'auto', position: 'absolute' }}
            severity="success"
         >
            <AlertTitle>Success</AlertTitle>
            Thank you for your <strong>FeedBack !</strong>
         </Alert>}
      </div>
   );
};

export default Review;