import { Alert, AlertTitle, Button, LinearProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import './login.css'
import useAuth from '../../../hooks/useAuth'
import { Link, useLocation, useHistory } from 'react-router-dom';

const LogIn = () => {
   const { SignInWithGoogle, logInWithEmailPass, setLoading, loading, user } = useAuth();
   const [loginData, setLoginData] = useState({});
   const location = useLocation();
   const history = useHistory();
   const ridirect_url = location.state?.from


   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newProduct = { ...loginData };
      newProduct[field] = value;
      setLoginData(newProduct);
   }

   const handleSubmit = e => {
      if (user?.email) {
         alert('already Logged in')
      }
      else {
         e.preventDefault();
         logInWithEmailPass(loginData?.email, loginData?.password);
      }
   }

   const handleGoogle = () => {
      if (user?.email) {
         alert('Already Logged In .... Log Out First')
      }
      else {
         SignInWithGoogle()
            .then(result => {
               const newUser = result.user;
               const newData = { email: newUser.email, name: newUser.displayName, img: newUser.photoURL };
               fetch('http://localhost:4000/users', {
                  method: "PUT",
                  headers: {
                     "content-type": "application/json"
                  },
                  body: JSON.stringify(newData)
               })
                  .then(res => res.json())
                  .then(data => {
                     history.push(ridirect_url);
                  })
            })
            .catch(error => console.log(error.message))
            .finally(() => {
               setLoading(false)

            })
      }
   }

   return (
      <div className='py-5 background'>
         <div className='p-4 bg-shadow w-50 mx-auto' >
            {
               loading ?
                  <LinearProgress sx={{ width: '75%', mx: 'auto' }} />
                  :
                  <form onSubmit={handleSubmit}>
                     <TextField
                        onBlur={handleOnBlur}
                        sx={{ width: 1, mx: 'auto' }}
                        id='filled-basic'
                        name='email'
                        label="Email Address"
                        type='email'
                        variant="filled" />
                     <TextField
                        onBlur={handleOnBlur}
                        sx={{ width: 1, mx: 'auto' }}
                        id='filled-basic'
                        name='password'
                        type='password'
                        label="Password"
                        variant="filled" />

                     <Button
                        sx={{ width: 1, mx: 'auto' }}
                        variant='contained'
                        type='submit'
                     >Log In</Button>
                  </form>
            }
            <p>New Here..?? <Link to='/register' className='text-decoration-none' variant='text'>Create An Account</Link> </p>
            <Button
               className='my-3'
               variant='contained'
               onClick={handleGoogle}>
               <img width='22px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png' alt="" />
               <span className=''> Log in with Google</span>
            </Button>
            {
               user?.email && <Alert
                  sx={{ width: '50%', mx: 'auto' }}
                  severity="success"
               >
                  <AlertTitle>Success</AlertTitle>
                  User Logged in <strong>Successfully!</strong>
               </Alert>
            }
         </div>
      </div>
   );
};

export default LogIn;