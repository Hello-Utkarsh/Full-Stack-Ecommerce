import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className='bg-[#241834] flex sticky top-0 z-10 justify-around items-center h-24 w-full'>
      <div className='flex justify-between items-center w-full mx-8'>
        <Link href={"/shop"} className='cursor-pointer'>
          <h1 className='text-4xl font-bold text-[#E4E2EA]'>TechHive</h1>
        </Link>
        <div className='flex justify-between items-center w-44'>
          <Link href={"/shop/login"} className='mx-auto'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="cursor-pointer text-lg text-[#241834] bg-[#E4E2EA] font-medium rounded-lg w-fit px-3 py-2 mx-auto">Login</motion.button>
          </Link>
          <Link href={"/shop/signin"} className='mx-auto'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="cursor-pointer text-lg text-[#241834] bg-[#E4E2EA] font-medium rounded-lg w-fit px-3 py-2 mx-auto">SignIn</motion.button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
