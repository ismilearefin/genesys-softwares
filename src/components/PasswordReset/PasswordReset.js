import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Contextprovidor/Contextprovidor';

const PasswordReset = () => {
    const {recoverPassword} = useContext(Authcontext);
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        recoverPassword(email)
        .then(() => {
            // Password reset email sent!
            // ..
            alert('reset email sent')
            form.reset()
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });

    }
    return (
        <div className='w-full bg-white h-[614px]'>
            <div className='w-full h-full grid justify-center items-center'>
            <form onSubmit={(e) => handleSubmit(e)} className='w-[686px]'>
                <h1 className='text-[32px] text-[#2D2929] text-center pb-[16px]'>RECOVER PASSWORD</h1>
                <p className='text-[17px] pb-12 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <input type="email" name='email' placeholder='Email' className='w-full py-3 px-6 border mb-[24px]'/>
                <input type="password" name='password' placeholder='Password' className='w-full py-3 px-6 border mb-[48px]'/>
                <button className='w-full py-3 px-6 border bg-[#4E4534] text-white text-xl mb-4'>SUBMIT</button>
                <p className='text-[17px] text-[#2D2929]'>Remember Password? <Link to='/login' className='underline'>Back to Login</Link></p>
            </form>
            </div>
        </div> 
    );
};

export default PasswordReset;