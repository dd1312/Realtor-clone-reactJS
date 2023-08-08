import React from 'react'
import {FcGoogle} from "react-icons/fc"
export default function OAth() {
  return (
    <button className='flex rounded items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-m font-medium hover:bg-red-800 active:bg-red-900 transition duration-50 ease-in-out'>
      <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
       Continue with Google
    </button>
  )
}
