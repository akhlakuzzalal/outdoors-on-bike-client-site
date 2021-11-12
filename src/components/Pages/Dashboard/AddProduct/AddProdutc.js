import { TextField, Button, Grid, LinearProgress, Alert, AlertTitle } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddProdutc = () => {
   const [productData, setProductData] = useState({});
   const [load, setLoad] = useState(false);
   const [bike, setBike] = useState(false);

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newProduct = { ...productData };
      newProduct[field] = value;
      setProductData(newProduct);
   }


   const handleSubmit = e => {
      e.preventDefault();
      fetch('http://localhost:4000/bikes', {
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(productData)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setBike(data.acknowledged)
            setLoad(false)
         })
      setLoad(true)
   };
   console.log(load)

   if (bike) {
      setTimeout(() => setBike(false), 6000)
   }

   return (
      <div>
         <h2>Add A Bike</h2>
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
                              sx={{ width: '50%', m: 1 }}
                              id='satandard-basic'
                              name='bikeName'
                              label="Bike Name"
                              type='text'
                              variant="standard" />
                           <TextField
                              onBlur={handleOnBlur}
                              sx={{ width: '50%', m: 1 }}
                              id='satandard-basic'
                              name='price'
                              label="Price"
                              variant="standard" />
                           <TextField
                              onBlur={handleOnBlur}
                              sx={{ width: '50%', m: 1 }}
                              id='satandard-basic'
                              name='img'
                              type='url'
                              label="Photo Url"
                              variant="standard" />
                           <Button
                              sx={{ width: '50%', m: 1 }}
                              variant='contained'
                              type='submit'
                           >Add Your Bike</Button>
                        </form>
                        {
                           bike && <Alert
                              sx={{ width: '50%', mx: 'auto' }}
                              severity="success"
                           >
                              <AlertTitle>Success</AlertTitle>
                              This Bike is Successfully <strong>Added!</strong>
                           </Alert>
                        }
                     </Grid>
               }
               <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' }, pr: 4 }}>
                  <img width="100%" src="https://booster.io/wp-content/uploads/product-add-to-cart-e1438362099361.png" alt="" />
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default AddProdutc;