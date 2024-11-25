'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard';
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Page = () => {
  const [products, setProducts] = useState()

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/product', {
        method: 'GET'
      })
      const productData = await response.json()
      setProducts(productData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='bg-[#241834]'>
      <div className='flex flex-col'>
        <div className='px-12'>
          <div className="h-[50vh] rounded-lg my-6 flex items-center px-16 justify-between bg-[radial-gradient(circle,_rgba(76,53,105,1)_23%,_rgba(56,39,77,1)_50%,_rgba(30,21,43,1)_87%)]">
            <div className="text-[#E4E2EA]">
              <h1 className="text-4xl font-bold max-sm:text-2xl">Explore the Latest in Tech</h1>
              <p className="mt-4 max-w-md text-lg max-sm:text-sm">
                Discover cutting-edge laptops and accessories to elevate your work and play.
              </p>
              <button className="mt-6 px-6 py-2 bg-[#E4E2EA] text-[#241834] rounded font-semibold">Shop Now</button>
            </div>
            <img
              src="/laptop.png"
              alt="Latest Laptops"
              className="rounded-lg h-full mb-20 w-[50%] object-cover"
            />
          </div>
          <div className='flex flex-col my-6 w-full'>
            <h1 className='text-[#E4E2EA] text-2xl font-semibold
            max-sm:text-xl max-sm:mx-6 my-4'>Popular Products</h1>
            <div className=' w-full flex overflow-hidden'>
              <Marquee speed={100} pauseOnHover>
                {products ? products.map((data) => {
                  return <ProductCard key={data.product_id} bg={"d4d2d8"} data={data} onClick={() => { setProductDetails }} />
                }) : null}
              </Marquee>
            </div>
          </div>
          <div className='flex items-center justify-between bg-[#d4d2d8] my-6 px-8'>
            <h1 className='text-[#241834] text-4xl font-extrabold leading-10 mx-2
            max-sm:text-xl max-sm:mx-6'>Deals Of<br />The Day</h1>
            <div className='grid grid-cols-4'>
              {products && Array.from({ length: 4 }).map((_, index) => {
                const data = products[index]
                return <ProductCard key={data.product_id} bg={'d4d2d8'} data={data} onClick={() => { setProductDetails }} />
              })}
            </div>
          </div>
        </div>
        <div className="px-12 my-6 flex justify-between items-center">
          <div className="h-[53vh] w-[56%] rounded-lg my-6 flex items-center px-6 bg-[radial-gradient(circle,_rgba(76,53,105,1)_23%,_rgba(56,39,77,1)_50%,_rgba(30,21,43,1)_87%)]">
            <div className="text-[#E4E2EA] max-w-[50%] mr-4">
              <h1 className="text-3xl font-bold max-sm:text-2xl">Ultimate Gaming Laptop</h1>
              <p className="mt-2 max-w-md text-base max-sm:text-sm">
                Power-packed for gaming and productivity, available at an exclusive discount.
              </p>
              <button className="mt-6 px-6 py-2 bg-[#E4E2EA] text-[#241834] rounded font-semibold">Shop Now</button>
            </div>
            <img
              src="/gaming.png"
              alt="Latest Laptops"
              className="rounded-lg h-fit w-[48%] object-cover"
            />
          </div>
          <div className="bg-[rgb(76,53,105)] h-fit px-4 rounded-lg w-[42%] py-4">
            <h2 className="text-[#E4E2EA] text-2xl font-bold mb-2 px-2">New Arrivals</h2>
            <div className="grid grid-cols-2">
              {products && Array.from({ length: 2 }).map((_, index) => {
                const data = products[index];
                return (
                  <ProductCard
                    key={data.product_id}
                    bg={''}
                    data={data}
                    onClick={() => { setProductDetails(data) }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Page
