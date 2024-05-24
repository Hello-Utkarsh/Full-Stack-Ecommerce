'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard';
import Marquee from "react-fast-marquee";
import Link from 'next/link';

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
        <div className='flex'>
          <div className='flex flex-col mt-10 w-full'>
            <h1 className='text-[#E4E2EA] text-2xl font-semibold mx-12'>Top Deals</h1>
            <div className=' w-full flex overflow-hidden'>
              <Marquee speed={100} pauseOnHover>
                {products ? products.map((data) => {
                  return <Link href={`/shop/product_details/${data.product_id}`}>
                    <ProductCard key={data.product_id} data={data} onClick={() => { setProductDetails }} />
                  </Link>
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
