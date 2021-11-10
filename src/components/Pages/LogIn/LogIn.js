import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth'

const LogIn = () => {
   const { SignInWithGoogle } = useAuth();
   return (
      <div className='my-5'>
         <Button variant='contained' onClick={SignInWithGoogle}>Log in with Google</Button>
      </div>
   );
};

export default LogIn;