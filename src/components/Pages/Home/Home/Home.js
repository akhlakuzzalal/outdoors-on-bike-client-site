import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>
         <Products></Products>
         <Brands></Brands>
         <Reviews></Reviews>
         <Footer></Footer>
      </div>
   );
};

export default Home;