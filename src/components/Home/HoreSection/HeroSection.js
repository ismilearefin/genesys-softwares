import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx'

const HeroSection = () => {
    const slides = [
        {
            url:'https://i.ibb.co/kKLpmSS/herosection01.jpg',
        },
        {
            url: 'https://i.ibb.co/M6HD0jL/hero-Section2.jpg'
        },
        {
            url: 'https://i.ibb.co/3SkpPdV/herosection3.jpg'
        }
    ];

const [currentSlide, setCurrentSlide] = useState(0)

const goToSlide = (slideIndex) =>{
    setCurrentSlide(slideIndex)
}
    return (
        <div className='w-full relative h-[792px]'>
            <div style={{backgroundImage: `url(${slides[currentSlide].url})`}} className='w-full h-full bg-center bg-cover duration-500 '>
            <div className='bg-black w-full h-full opacity-30'></div>
            </div>
               <div className='absolute top-0'>
               <div className='pt-[450px] pl-[99px]'>
               <h1 className='text-[40px] leading-[54px] pb-6 text-white'>Lorem Ipsum is simply<br/> dummy text of the printing</h1>
                <p className='text-xl font-semibold text-white pb-[48px]'>Lorem Ipsum is simply dummy text of the.</p>
                <button className='bg-[#BCB2A0] text-[#2D2929] text-xl px-14 py-3'>SHOP NOW</button>
               </div>
               </div>
               <div className='absolute bottom-4 left-[50%] flex justify-center gap-3.5 font-bold text-white text-[32px] cursor-pointer'>
                    {
                        slides.map((slide, i) => (
                            <div key={i}>
                                <RxDotFilled onClick={()=> goToSlide(i)}></RxDotFilled>
                            </div> 
                        ))
                    }
               </div>
        </div>
    );
};

export default HeroSection;