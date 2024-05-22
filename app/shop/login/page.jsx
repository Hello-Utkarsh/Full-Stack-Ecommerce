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
    const { email, password } = input
    const login = await fetch('/api/user/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    const res = await login.json()
    if (res.success == true) {
      router.push('/shop')
    }
    else {
      alert(res.message)
    }
  }


  return (
    <form onSubmit={handleSubmit(submit)} className='bg-[#241834] pt-16 w-full flex justify-center items-center'>
      <div className='w-2/6 bg-[#513388] flex flex-col justify-center px-14 py-10 rounded-xl
      max-[900px]:w-3/6 
      max-sm:9/12'>
        <div className='mx-auto w-5/6 flex flex-col'>
          <label htmlFor="" className='max-sm:text-sm'>Email</label>
          <input {...register('email', { required: true })} className='w-full rounded-md mt-2 px-2 text-[#241834]' type="email" />
          {errors.email && <p className='text-sm max-sm:text-xs'>Email is required.</p>}
        </div>
        <div className='mx-auto w-5/6 flex flex-col'>
          <label className='mt-4 max-sm:text-sm' htmlFor="">Password</label>
          <input {...register('password', { required: true, minLength: 5 })} className='w-full rounded-md px-2 mt-2 text-[#241834]' type="password" />
          {errors.password && <p className='text-sm max-sm:text-xs'>Password is required.</p>}
        </div>
        <button className='bg-[#241834] rounded-md px-4 py-3 mt-6 w-fit mx-auto duration-200 hover:scale-110 transition' type='submit'>Login</button>
      </div>
    </form>
  )
}

export default Page
