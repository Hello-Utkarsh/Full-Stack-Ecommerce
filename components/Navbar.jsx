import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import 'material-icons/iconfont/outlined.css';
import { motion } from "framer-motion";
import Cookies from 'js-cookie';


const Navbar = () => {

  const [cookie, setcook] = useState(false)

  const getCookie = async () => {
    const cook = await Cookies.get('token')
    setcook(cook)
  }

  const logout = async () => {
    Cookies.remove('token')
  }

  useEffect(() => {
    getCookie()
  }, [])

  return (
    <nav className='bg-[#241834] flex sticky top-0 z-10 justify-around items-center h-24 w-full'>
      <div className='flex justify-between items-center w-full mx-8 max-[450px]:mx-4'>
        <Link href={"/shop"} className='cursor-pointer'>
          <h1 className='text-4xl font-bold text-[#E4E2EA] max-md:text-3xl'>TechHive</h1>
        </Link>
        {cookie ? <div className='flex justify-end items-center w-44 mr-4 max-sm:w-32 max-sm:mr-0'>
          <Link href={'/shop/cart'}>
            <span className="material-icons-outlined mx-4 transition hover:-translate-y-1 cursor-pointer max-sm:mx-2" style={{ fontSize: '24px' }}>
              shopping_cart
            </span>
          </Link>
          <Link href={'/shop/wishlist'}>
            <span className="material-icons-outlined mx-4 transition hover:-translate-y-1 cursor-pointer max-sm:mx-2" style={{ fontSize: '24px' }}>
              favorite_border
            </span>
          </Link>
          <Link href={'/shop'}>
            <span onClick={logout} className="material-icons-outlined mx-4 transition hover:-translate-y-1 cursor-pointer max-sm:mx-2 mb-1" style={{ fontSize: '24px' }}>
              logout
            </span>
          </Link>
        </div> : <div className='flex justify-between items-center w-44 max-md:w-40'>
          <Link href={"/shop/login"} className='mx-auto'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="cursor-pointer text-lg text-[#241834] bg-[#E4E2EA] font-medium rounded-xl w-fit px-3 py-2 mx-auto max-md:text-base">Login</motion.button>
          </Link>
          <Link href={"/shop/signin"} className='mx-auto'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="cursor-pointer text-lg text-[#241834] bg-[#E4E2EA] font-medium rounded-xl w-fit px-3 py-2 mx-auto max-md:text-base">SignIn</motion.button>
          </Link>
        </div>}

      </div>
    </nav>
  )
}

export default Navbar
