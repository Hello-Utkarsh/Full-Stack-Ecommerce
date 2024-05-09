'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submit = async (input) => {
    const { name, email, password, address } = input
    const signin = await fetch('/api/user/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password, address })
    })
    if (signin.status == 200) {
      router.push('/shop')
    } else {
      alert("There was some problem signing up, please try again")
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='bg-[#241834] h-[100vh] w-full flex justify-center items-center'>
      <div className='w-2/6 bg-[#513388] flex flex-col justify-center px-14 py-10 rounded-xl'>
        <div className='mx-auto w-5/6 flex flex-col'>
          <label htmlFor="">Name</label>
          <input {...register('name', { required: true })} className='w-full rounded-md mt-2 px-2 text-[#241834]' type="text" />
          {errors.name && <p className='text-sm'>Name is required.</p>}
        </div>
        <div className='mx-auto w-5/6 flex flex-col mt-4'>
          <label htmlFor="">Email</label>
          <input {...register('email', { required: true })} className='w-full rounded-md mt-2 px-2 text-[#241834]' type="email" />
          {errors.email && <p className='text-sm'>Email is required.</p>}
        </div>
        <div className='mx-auto w-5/6 flex flex-col mt-4'>
          <label htmlFor="">Password</label>
          <input {...register('password', { required: true })} className='w-full rounded-md px-2 mt-2 text-[#241834]' type="password" />
          {errors.password && <p className='text-sm'>Password is required.</p>}
        </div>
        <div className='mx-auto w-5/6 flex flex-col mt-4'>
          <label htmlFor="">Address</label>
          <input {...register('address', { required: true })} className='w-full rounded-md px-2 mt-2 text-[#241834]' type="text" />
          {errors.address && <p className='text-sm'>Address is required.</p>}
        </div>
        <button className='bg-[#241834] rounded-md px-4 py-3 mt-6 w-fit mx-auto duration-200 hover:scale-110 transition' type='submit'>SignIn</button>
        <p className='mx-auto mt-4'>Already have an account? <Link href={'/shop/login'} className='underline underline-offset-2 cursor-pointer'>LogIn</Link></p>
      </div>
    </form>
  )
}

export default Page
