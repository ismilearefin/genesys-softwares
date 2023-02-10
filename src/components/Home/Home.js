import React from 'react';
import Blog from './Blog/Blog';
import Collection from './Collection/Collection';
import DiscountSec from './DiscountSec/DiscountSec';
import HeroSection from './HoreSection/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Collection></Collection>
            <DiscountSec></DiscountSec>
            <Blog></Blog>
        </div>
    );
};

export default Home;