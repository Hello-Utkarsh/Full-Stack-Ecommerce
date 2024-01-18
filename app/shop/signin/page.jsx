import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-[#241834] h-[100vh] w-full flex justify-center items-center'>
      <div className='w-2/6 bg-[#513388] flex flex-col justify-center px-14 py-10 rounded-xl'>
      <div className='mx-auto w-5/6 flex flex-col'>
          <label htmlFor="">Name</label>
          <input className='w-full rounded-md mt-2 px-2 text-[#241834]' type="text" />
        </div>
        <div className='mx-auto w-5/6 flex flex-col mt-4'>
          <label htmlFor="">Email</label>
          <input className='w-full rounded-md mt-2 px-2 text-[#241834]' type="email" />
        </div>
        <div className='mx-auto w-5/6 flex flex-col mt-4'>
          <label htmlFor="">Password</label>
          <input className='w-full rounded-md px-2 mt-2 text-[#241834]' type="password" />
        </div>
        <button className='bg-[#241834] rounded-md px-4 py-3 mt-6 w-fit mx-auto duration-200 hover:scale-110 transition'>SignIn</button>
        <p className='mx-auto mt-4'>Already have an account? <Link href={'/shop/login'} className='underline underline-offset-2 cursor-pointer'>LogIn</Link></p>
      </div>
    </div>
  )
}

export default page
