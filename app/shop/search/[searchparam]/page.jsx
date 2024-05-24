'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

const Page = ({ params }) => {

  const [products, setProducts] = useState()
  const keywords = decodeURIComponent(params.searchparam)

  const searchProd = async () => {
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-type": "applictaion/json"
        },
        body: JSON.stringify({ keywords })
      })
      const res = await response.json()
      if (res.message == 'success') {
        setProducts(res.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchProd()
  }, [])
  return (
    <div className='bg-[#241834]'>
      <div className='flex flex-wrap mx-auto px-2'>
        {products ? products.map((data) => {
          return <ProductCard key={data.product_id} data={data} onClick={() => { setProductDetails }} />
        }) : <h2>Not Found</h2>}
      </div>
    </div>
  )
}

export default Page
