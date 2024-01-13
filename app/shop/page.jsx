'use client'
import React from 'react'
import { motion } from "framer-motion";
import ProductCard from '@/components/ProductCard';
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <nav className='bg-[#513388] flex justify-around items-center h-24 w-full'>
        <div className='flex justify-between items-center w-full mx-8'>
          <Link href={"/"} className='cursor-pointer'>
            <h1 className='text-2xl font-bold'>TechHive</h1>
          </Link>
          <div className='flex justify-between items-center w-44'>
            <Link href={"/shop/login"} className='mx-auto'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="cursor-pointer text-lg text-slate-300 bg-[#241834] rounded-lg w-fit px-3 py-2 mx-auto">Login</motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="cursor-pointer text-lg text-slate-300 bg-[#241834] rounded-lg w-fit px-3 py-2 mx-auto">SignIn</motion.button>
          </div>
        </div>
      </nav>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div >
  )
}

export default page
