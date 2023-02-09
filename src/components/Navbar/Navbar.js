import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame.png'
import { BiSearch, BiUser } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'


const Navbar = () => {
    return (
        <div className='w-full h-[100px] border grid items-center px-[91px]'>
            <div className="navbar bg-transparent">
            <div className="navbar-start lg:flex gap-6 text-sm leading-5">
                <ul className="menu menu-horizontal px-1">
                <li><Link>HOME</Link></li>
                <li>
                    <Link>SHOP</Link>
                </li>
                <li><Link>ABOUT US</Link></li>
                <li><Link>CONTACT US</Link></li>
                </ul>
            </div>
            <div className="navbar-center">
                
                    <img src={logo} alt='logo' className='w-[52px]'/>
            </div>
            <div className="navbar-end gap-[18px] text-xl">
                <p><BiSearch></BiSearch></p>
                <p><BiUser></BiUser></p>
                <p><BsCart></BsCart></p>
            </div>
            </div>
        </div>
    );
};

export default Navbar;