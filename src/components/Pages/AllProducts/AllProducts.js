import { Grid, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SingleBike from './SingleBike/SingleBike';
import Footer from '../../Footer/Footer';
import useAuth from '../../../hooks/useAuth';

const AllProducts = () => {
   const [bikes, setBIkes] = useState([]);
   const { loading } = useAuth();
   useEffect(() => {
      fetch('https://bike-website-server.herokuapp.com/bikes')
         .then(res => res.json())
         .then(data => setBIkes(data))
   }, [])
   return (
      <div className='mt-4'>
         <h2 style={{ color: '#f57f17' }}>All Bikes</h2>
         <Grid container spacing={2}>
            {
               loading ?
                  <>
                     <Grid item xs={12} md={9}>
                        <h1 className='fw-bold'>Please wait for load the server..</h1>
                        <LinearProgress color="secondary" />
                     </Grid>

                  </>
                  :
                  <>
                     <Grid item xs={12} md={9}>
                        <div className='row gx-4 row-cols-lg-3 row-cols-1 m-4'>
                           {
                              bikes.map(bike => <SingleBike key={bike._id} bike={bike}></SingleBike>)
                           }
                        </div>
                     </Grid>
                  </>
            }
            <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
               <Carousel className='mt-5'>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://media.zigcdn.com/media/model/2021/Aug/suzuki-hayabusa-2021-right-side-view_360x240.jpg"
                        alt="First slide"
                     />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://s3-ap-south-1.amazonaws.com/bike-blog-content-dev/2021/05/ktm-duke-125-new.jpg"
                        alt="Second slide"
                     />
                  </Carousel.Item>
               </Carousel>
               <Carousel className='mt-5'>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://www.indiacarnews.com/wp-content/uploads/2020/12/Royal-Enfield-Electric-Bike-Rendering-.jpg"
                        alt="First slide"
                     />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://static.autox.com/uploads/bikes/2021/08/indian-chief-bobber-dark-horse.jpg"
                        alt="Second slide"
                     />
                  </Carousel.Item>
               </Carousel>
            </Grid>
         </Grid>
         <Footer></Footer>
      </div>
   );
};

export default AllProducts;