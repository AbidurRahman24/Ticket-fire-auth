import React from 'react';
import HomeMain from './HomeMain/HomeMain';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className='container'>
            <Navbar/>
            <HomeMain/>
        </div>
    );
};

export default Home;