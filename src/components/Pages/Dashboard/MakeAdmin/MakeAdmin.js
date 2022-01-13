import { TextField, Button, Grid, LinearProgress, Alert, AlertTitle } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
   const [admin, setadmin] = useState({});
   const [load, setLoad] = useState(false);
   const [added, setAdded] = useState(false);

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newProduct = { ...admin };
      newProduct[field] = value;
      setadmin(newProduct);
   };
   const handleSubmit = e => {
      e.preventDefault();
      setLoad(true)
      fetch(`https://bike-website-server.herokuapp.com/users/${admin.email}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(admin)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setAdded(true);
            setLoad(false)
         })
   };
   setTimeout(function () { setAdded(false) }, 3000);

   return (
      <div>
         <h2>Add An Admin</h2>
         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
               {
                  load ?
                     <Grid item md={8} xs={12}>
                        <LinearProgress sx={{ width: '75%', mx: 'auto' }} />
                     </Grid>
                     :
                     <Grid item md={8} xs={12}>
                        <form onSubmit={handleSubmit}>
                           <TextField
                              onBlur={handleOnBlur}
                              sx={{ width: '75%', m: 1 }}
                              id='satandard-basic'
                              name='email'
                              label="Email Address"
                              type='email'
                              variant="standard" />

                           <Button
                              sx={{ width: '75%', m: 1, backgroundColor: '#f57f17' }}
                              variant='contained'
                              type='submit'
                           >Make Admin</Button>
                        </form>
                        {
                           added && <Alert
                              sx={{ width: '50%', mx: 'auto' }}
                              severity="success"
                           >
                              <AlertTitle>Success</AlertTitle>
                              This user is make admin Successfully
                           </Alert>
                        }
                     </Grid>
               }
               <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' }, pr: 4 }}>
                  <img width="100%" src="https://cdn5.vectorstock.com/i/1000x1000/34/29/man-with-inscription-admin-icon-outline-style-vector-30713429.jpg" alt="" />
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default MakeAdmin;