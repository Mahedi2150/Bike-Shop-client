import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Footer from './../Shared/Footer/Footer';
import Reviews from '../Dashboard/Dashboard/Review/Reviews/Reviews';
import About from './About/About';
import Brand from './Brand/Brand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <About></About>
            <Brand></Brand>
            <Footer></Footer>
        </div>
    );
};

export default Home;