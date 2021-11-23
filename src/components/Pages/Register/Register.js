import React, { useState } from 'react';
import { Alert, AlertTitle, Button, LinearProgress, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import useAuth from '../../../hooks/useAuth';

const Register = () => {
   const { registerWithEmailPass, SignInWithGoogle, setLoading, loading, user } = useAuth();

   const [registerData, setRegisterData] = useState({});
   const [error, setError] = useState(false)

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newProduct = { ...registerData };
      newProduct[field] = value;
      setRegisterData(newProduct);
   }

   const handleSubmit = e => {
      e.preventDefault();
      if (registerData.password === registerData.password2) {
         registerWithEmailPass(registerData?.email, registerData?.password);
         const newUser = { email: registerData.email, name: registerData.name, img: 'https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-profile-line-black-icon-png-image_691051.jpg' }
         fetch('https://bike-website-server.herokuapp.com/users', {
            method: "PUT",
            headers: {
               "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
         })
            .then(res => res.json())
            .then(data => console.log(data))

      }
      else {
         setError(true)
      }
   };

   const handleGoogle = () => {
      SignInWithGoogle()
         .then(result => {
            const newUser = result.user;
            const newData = { email: newUser.email, name: newUser.displayName, img: newUser.photoURL }
            fetch('https://bike-website-server.herokuapp.com/users', {
               method: "PUT",
               headers: {
                  "content-type": "application/json"
               },
               body: JSON.stringify(newData)
            })
               .then(res => res.json())
               .then(data => {

               })
         })
         .catch(error => console.log(error.message))
         .finally(() => setLoading(false))

   }

   if (error) {
      setTimeout(() => setError(false), 5000)
   }

   return (
      <div>
         <Header></Header>
         <h2>Register A New Account</h2>
         <img height='80px' width='200px' src={'https://img.freepik.com/free-vector/register-now-banner-ribbon-banner-modern-promotion-template-sale-website-banner_194782-60.jpg?size=626&ext=jpg'} alt="" />
         {
            user?.email ?
               <div>
                  <img width='200px' src="https://cdn3.vectorstock.com/i/1000x1000/77/02/registered-stamp-rubber-grunge-vector-12477702.jpg" alt="" />
               </div>
               :
               <div className='w-50 mx-auto'>
                  {
                     loading ?
                        <LinearProgress sx={{ width: '75%', mx: 'auto' }} />
                        :
                        <form onSubmit={handleSubmit}>
                           <TextField
                              onBlur={handleOnBlur}
                              sx={{ width: 1, mx: 'auto' }}
                              id='filled-basic'
                              name='name'
                              required
                              label="Your Name"
                              type='text'
                              variant="filled" />
                           <TextField
                              onBlur={handleOnBlur}
                              sx={{ width: 1, mx: 'auto' }}
                              id='filled-basic'
                              name='email'
                              required
                              label="Email Address"
                              type='email'
                              variant="filled" />
                           <TextField
                              onBlur={handleOnBlur}
                              sx={{ width: 1, mx: 'auto' }}
                              id='filled-basic'
                              name='password'
                              required
                              type='password'
                              label="Password"
                              variant="filled" />
                           <TextField
                              onBlur={handleOnBlur}
                              sx={{ width: 1, mx: 'auto' }}
                              id='filled-basic'
                              required
                              name='password2'
                              type='password'
                              label="Re Enter The Password"
                              variant="filled" />

                           <Button
                              sx={{ width: 1, mx: 'auto' }}
                              variant='contained'
                              type='submit'
                           >Create Account</Button>
                           {
                              error && <Alert severity="error">
                                 <AlertTitle>Error</AlertTitle>
                                 password mismached — <strong>check it out!</strong>
                              </Alert>
                           }
                           <Button
                              onClick={handleGoogle}
                              className='my-3'
                              variant='outlined'>
                              <img width='22px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png' alt="" />
                              <span>   Log in with Google</span>
                           </Button>
                        </form>
                  }
                  <p>Already have an account..??? <Link className='text-decoration-none' to='/login'>Log in</Link></p>

               </div>
         }
         <Footer></Footer>
      </div>
   );
};

export default Register;