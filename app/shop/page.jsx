'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/productCard';
import Navbar from '@/components/Navbar';
import Marquee from "react-fast-marquee";

const Page = () => {
  const [products, setProducts] = useState()

  const fetchProducts = async () => {
    const response = await fetch('/api/product', {
      method: 'GET'
    })
    const productData = await response.json()
    setProducts(productData)
  }

  const toggle = (e) => {
    e.target.nextSibling.classList.toggle("hidden")
  }

  function abc() {
    let a = document.getElementById('slider').classList
    console.log(a)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='bg-[#241834]'>
      <Navbar />
      <div className='flex flex-col'>
        <div className='flex justify-between mr-16 ml-5'>
          <div className='flex w-2/5 justify-around'>
            <span className='flex flex-col items-center'>
              <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Company</button>
              <div className='hidden absolute w-24 z-10 mt-8'>
                <ul id='dropdown1' className='flex flex-col bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>Apple</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>Hp</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>Dell</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>Lenovo</li>
                </ul>
              </div>
            </span>
            <span className='flex flex-col items-center'>
              <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Processor</button>
              <div className='hidden absolute w-24 z-10 mt-8'>
                <ul id='dropdown1' className='flex flex-col bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>intel i5</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>intel i7</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>intel i9</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>M1 chip</li>
                </ul>
              </div>
            </span>
            <span className='flex flex-col items-center'>
              <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Ram</button>
              <div className='hidden absolute w-24 z-10 mt-8' id='togglebtn'>
                <ul id='dropdown1' className='flex flex-col mx-auto bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>8GB</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>12GB</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>16GB</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>32GB</li>
                </ul>
              </div>
            </span>
            <span className='flex flex-col items-center'>
              <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Storage</button>
              <div className='hidden absolute w-24 z-10 mt-8'>
                <ul id='dropdown1' className='flex flex-col bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>256GB</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>512GB</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>1TB</li>
                  <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>2TB</li>
                </ul>
              </div>
            </span>
          </div>
          <span className='flex flex-col items-center'>
            <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Sort By</button>
            <div className='hidden absolute w-24 z-10 mt-8'>
              <ul id='dropdown1' className='flex flex-col bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>High Price</li>
                <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>Popularity</li>
                <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>Latest</li>
                <li className='mt-1 cursor-pointer hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>Low Price</li>
              </ul>
            </div>
          </span>
        </div>
        <div className='flex'>
          <div className='flex flex-col mt-10 w-full'>
            <h1 className='text-[#E4E2EA] text-2xl font-semibold mx-12'>Top Deals</h1>
            <div className=' w-full flex overflow-hidden'>
              <Marquee speed={100} pauseOnHover>
                {products ? products.map((data) => {
                  return <ProductCard key={data.product_id} data={data} onClick={() => { setProductDetails }} />
                }) : null}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Page
