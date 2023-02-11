import React from 'react';

const Dashbord = () => {
    return (
        <div className='bg-white p-[100px]'>
            <div className='w-[1718px]'>
                <h1 className='text-[28px] leading-[38px] text-[#2D2929]'>User list</h1>
            <table className="table-fixed w-full">
            <thead>
                <tr className='border-b-2 text-left h-[75px] text-[17px] leading-6'>
                <th>First Name</th>
                <th className='text-center'>Last Name</th>
                <th className='text-center'>Email</th>
                <th className='text-right'>Password</th>
                </tr>
            </thead>
            <tbody className='text-[20px] leading-7'>
                <tr className='border-b-2 h-[75px]'>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className='text-center'>Malcolm Lockyer</td>
                <td className='text-center'>1961</td>
                <td className='text-right pr-4'>1961</td>
                </tr>
                <tr className='border-b-2 h-[75px]'>
                <td>Witchy Woman</td>
                <td className='text-center'>The Eagles</td>
                <td className='text-center'>1972</td>
                <td className='text-right pr-4'>1972</td>
                </tr>
                <tr className='border-b-2 h-[75px]'> 
                <td>Shining Star</td>
                <td className='text-center'>Earth, Wind, and Fire</td>
                <td className='text-center '>1975</td>
                <td className='text-right pr-4'>1975</td>
                </tr>
            </tbody>
            </table>
            <div className='w-full border-b-2 h-[75px] grid items-center text-2xl'>
                <h1>3 User</h1>
            </div>
            </div>
        </div>
    );
};

export default Dashbord;