import React from 'react';
import blog01 from '../../../assets/blog01.png'
import blog02 from '../../../assets/blog02.png'
import blog03 from '../../../assets/blog03.png'
import blog04 from '../../../assets/blog04.png'

const Blog = () => {
    return (
        <div className='py-[100px] bg-white'>
            <h1 className='text-center text-[28px] leading-10 pb-12'>OUR BLOG</h1>
            <div className='px-[177px] flex gap-6'>
                <div className='w-1/2 text-[17px] border-r-[1px] border-[#C3C3C3]'>
                   <img src={blog01} alt='' className='w-[743px] pb-6'/> 
                   <p className='font-normal pb-3'>16 may, 2022</p>
                   <p className='font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='w-1/2 grid gap-6'>
                    <div className='flex gap-6'>
                        <img src={blog02} alt='blog02'/>
                        <div>
                        <p className='font-normal pb-3'>16 may, 2022</p>
                        <p className='font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <img src={blog03} alt='blog02'/>
                        <div>
                        <p className='font-normal pb-3'>16 may, 2022</p>
                        <p className='font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <img src={blog04} alt='blog02'/>
                        <div>
                        <p className='font-normal pb-3'>16 may, 2022</p>
                        <p className='font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;