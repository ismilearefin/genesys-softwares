import React from 'react';
import Collection from './Collection/Collection';
import DiscountSec from './DiscountSec/DiscountSec';
import HeroSection from './HoreSection/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Collection></Collection>
            <DiscountSec></DiscountSec>
        </div>
    );
};

export default Home;