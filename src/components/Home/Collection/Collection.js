import React from 'react';
import image01 from '../../../assets/collection01.png'
import image02 from '../../../assets/collection02.png'
import image03 from '../../../assets/collection03.png'
import { RxDotFilled, RxDot } from 'react-icons/rx'

const Collection = () => {
    return (
        <div className='w-full h-[1022px] p-[100px]'>
             <div className='w-full h-[822px]'>
             <h1 className='text-[28px] leading-9 pb-12'>OUR COLLECTION</h1>
             <div className='flex gap-[29px]'>
                <div className='text-center w-[551px]'>
                    <img src={image01} alt='flower' className='pb-6'/>
                    <p className='text-xl pb-3'>Flower</p>
                    <p className='text-[17px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply</p>
                </div>
                <div className=' w-[551px] text-center'>
                    <img src={image02} alt='Candles' className='pb-6'/>
                    <p className='text-xl pb-3'>Candles</p>
                    <p className='text-[17px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply</p>
                </div>
                <div className=' w-[551px] text-center'>
                    <img src={image03} alt='Lamp Shade' className='pb-6'/>
                    <p className='text-xl pb-3'>Lamp Shade</p>
                    <p className='text-[17px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply</p>
                </div>
             </div>
             <div className='flex justify-center pt-[50px] text-xl'>
                <RxDotFilled/>
                <RxDot/>
                <RxDot/>
                <RxDot/>
             </div>
             </div>
        </div>
    );
};

export default Collection;