// 'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
import Cookies from 'js-cookie';


const Navbar = () => {

  const [cookie, setcook] = useState(false)

  const getCookie = async () => {
    const cook = await Cookies.get('token')
    setcook(cook)
  }


  useEffect(() => {
    getCookie()
  }, [])

  return (
    <nav className='bg-[#241834] flex sticky top-0 z-10 justify-around items-center h-24 w-full'>
      <div className='flex justify-between items-center w-full mx-8'>
        <Link href={"/shop"} className='cursor-pointer'>
          <h1 className='text-4xl font-bold text-[#E4E2EA]'>TechHive</h1>
        </Link>
        {cookie ? <div className='flex justify-end items-center w-44 mr-4'>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <Link href={'/shop/cart'}>
            <span className="material-symbols-outlined mx-4 transition hover:-translate-y-1 cursor-pointer" style={{ fontSize: '24px' }}>
              shopping_cart
            </span>
          </Link>
          <Link href={'/shop/wishlist'}>
            <span className="material-symbols-outlined mx-4 transition hover:-translate-y-1 cursor-pointer" style={{ fontSize: '24px' }}>
              favorite
            </span>
          </Link>
          <span className="material-symbols-outlined mx-4 transition hover:-translate-y-1 cursor-pointer" style={{ fontSize: '25px' }}>
            logout
          </span>
        </div> : <div className='flex justify-between items-center w-44'>
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
        </div>}

      </div>
    </nav>
  )
}

export default Navbar
