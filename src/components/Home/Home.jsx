import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import Footer from './Footer';

import './Home.scss';



const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <Footer />
        </>
    )
}

export default Home
