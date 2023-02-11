import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Contextprovidor/Contextprovidor';

const SignUp = () => {
    const {signup,updateUserProfile} = useContext(Authcontext);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const password = form.password.value;
        const fullName = firstName + ' ' + lastName;
        console.log(email, firstName, lastName, password);
        
        signup(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            updateUserProfile(fullName)
            saveUserInfo(firstName, lastName, email, password)
            
            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            form.reset()
            // ..
          });

    }

    const saveUserInfo = (firstName,lastName,email,password ) => {
        const userInfo = {
          firstName,
          lastName,
          email,
          password
        };
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('User information saved successfully')
                navigate('/')
            }
        });

    };


    return (
        <div className='w-full bg-white h-[750px]'>
            <div className='w-full h-full grid justify-center items-center'>
            <form onSubmit={(e) => handleSubmit(e)} className='w-[686px]'>
                <h1 className='text-[32px] text-[#2D2929] text-center pb-[16px]'>CREATE ACCOUNT</h1>
                <p className='pb-12 text-[17px] text-center text-[#2D2929]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <input type="text" name='firstName' placeholder='First name' className='w-full py-3 px-6 border mb-[24px]'/>
                <input type="text" name='lastName' placeholder='Last Name' className='w-full py-3 px-6 border mb-[24px]'/>
                <input type="email" name='email' placeholder='Email' className='w-full py-3 px-6 border mb-[24px]'/>
                <input type="password" name='password' placeholder='Password' className='w-full py-3 px-6 border mb-[48px]'/>
                <button className='w-full py-3 px-6 border bg-[#4E4534] text-white text-xl mb-4'>CREATE</button>
                <p className='text-[17px] text-[#2D2929]'>Already have an account?  <Link to='/login' className='underline'>Back to Login</Link></p>
            </form>
            </div>
        </div>
    );
};

export default SignUp;