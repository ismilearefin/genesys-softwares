import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full bg-white h-[614px]'>
            <div className='w-full h-full grid justify-center items-center'>
            <from className='w-[686px]'>
                <h1 className='text-[32px] text-[#2D2929] text-center pb-[48px]'>LOGIN</h1>
                <input type="email" name='email' placeholder='Email' className='w-full py-3 px-6 border mb-[24px]'/>
                <input type="password" name='password' placeholder='Password' className='w-full py-3 px-6 border mb-[48px]'/>
                <button className='w-full py-3 px-6 border bg-[#4E4534] text-white text-xl mb-4'>LOGIN</button>
                <p className='text-center text-[17px] text-[#2D2929]'><Link to='/signup'>Create account</Link> / <Link to='/resetpassword'>Forgot your password?</Link></p>
            </from>
            </div>
        </div>
    );
};

export default Login;