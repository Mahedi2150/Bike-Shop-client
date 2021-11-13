import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Footer from './../Shared/Footer/Footer';
import Reviews from '../Dashboard/Dashboard/Review/Reviews/Reviews';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <About></About>

            <Footer></Footer>
        </div>
    );
};

export default Home;