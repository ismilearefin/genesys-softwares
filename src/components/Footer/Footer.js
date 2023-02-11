import React from 'react';
import logo from '../../assets/Frame.png'
import payment from '../../assets/payment.png'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='w-full h-[646px]'>
            <div className='px-24 pt-[95px]'>
                <div className='grid grid-cols-3'>
                    <div className=''>
                        <img src={logo} alt='Logo' className='w-[111px] pb-12'/>
                        <p className='text-[17px]'>By completing this form you're signing<br/> up to receive our emails and can<br/> unsubscribe at any time</p>
                    </div>
                    <div className=' grid grid-cols-3'>
                        <div className='text-[15px] text-[#2D2929] leading-[22px] '>
                            <p className='text-[16px] font-semibold pb-[28px]'>MENU</p>
                            <p className='pb-4'>Home</p>
                            <p className='pb-4'>Gift Card</p>
                            <p className='pb-4'>Seasonal</p>
                            <p className='pb-4'>Kid & Nursery</p>
                            <p className='pb-4'>Pet</p>
                            <p className='pb-4'>Gift Registry</p>
                        </div>
                        <div className='text-[15px] text-[#2D2929] leading-[22px] '>
                            <p className='text-[16px] font-semibold pb-[28px]'>CUSTOMER CARE</p>
                            <p className='pb-4'>Contact Us</p>
                            <p className='pb-4'>Shipping policy</p>
                            <p className='pb-4'>Returns policy</p>
                            <p className='pb-4'>Privacy policy</p>
                        </div>
                        <div className='text-[15px] text-[#2D2929] leading-[22px] '>
                            <p className='text-[16px] font-semibold pb-[28px]'>ABOUT US</p>
                            <p className='pb-4'>Our Story</p>
                            <p className='pb-4'>ABOUT US</p>
                            <p className='pb-4'>ABOUT US</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-[16px] font-semibold pb-6'>SUBSCRIBE TO OUR NEWSLETTER</p>
                        <p className='text-sm pb-6'>Signup for our newsletter to stay up to date on sales and events.</p>
                        <div className='w-[500px] pb-[16px]'>
                            <input type='email' placeholder='Email' className='border p-3 w-4/6'/>
                            <button  className='btn rounded-none py-3 px-[38px]' >Join</button>
                        </div>
                        <p className='text-sm'>By completing this form you're signing up to receive our emails and can unsubscribe at any time</p>
                    </div>
                </div>
                <div className='relative w-full pt-[160px] mb-[20px]'>
                <select className="absolute right-0 bottom-1 rounded-none border py-3 px-4 border-[#989795]  w-[222px] ">
                    <option disabled className='text-[15px]'>United States (USD $)</option>
                    <option>Bangladesh(TAKA)</option>
                    <option>India(RUPI)</option>
                </select>
                </div>
                <div className='flex justify-between border-b-2 border-[#989795]'>
                    <div className='flex gap-4'>
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                    </div>
                    <div className='pb-[14px]'>
                        <img src={payment} alt='payment'/>
                    </div>
                </div>
            </div>
            <p className='text-center pt-[14px]'>© Copyright 2022 by Cole & Son. All rights reserved.</p>
        </div>
    );
};

export default Footer;