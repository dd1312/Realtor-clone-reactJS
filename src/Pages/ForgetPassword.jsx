
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route, Link, NavLink } from "react-router-dom";
import OAth from '../Components/OAth';
export default function ForgetPassword() {

    const[email,setEmail]=useState("");

  function onChange(e){
    setEmail(e.target.value)
  }

  return (
    <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Forget Password</h1>
        <div className='flex justify-center flex-wrap items-center max-w-6xl px-6 py-12 mx-auto'>
            <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6' >
                <img className='w-full rounded-3xl' src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
            </div>
            <div className='w-full  md:w-[67%] lg:w-[40%]  lg:ml-20 '>
            <form action="">
                    <input className=' w-full mb-6 px-4 py-2 text-x; text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' placeholder='Enter your email'  type="email" id='email' value={email} onChange={onChange} />
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                        <p className='mb-6'>Don't have a account?
                        <Link to={"/sign-up"} className='text-red-600 hover:text-red-700 transition-duration-200 easy-in-out ml-1'>Register</Link>
                        </p>
                        <p>
                        <Link to={"/sign-in"} className='text-blue-600 hover:text-blue-700 transition duration-200 easy-in-out ml-1'>Sign in instead</Link>
                        </p>
                    </div>
                    <button className='w-full bg-blue-600 text-white px-7 py-3 rounded text-sm fount-medium uppercase shadow-md hover:bg-blue-700 transition duration-150 ease-in-out'>send email password</button>
          <div className='flex my-4 items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>

          </div>
                        <OAth/>
            
                </form>
            </div>
            
        </div>
    </section>
  )
  }
