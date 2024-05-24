'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

const Page = ({ params }) => {

  const [products, setProducts] = useState([])
  const [extraProducts, setExtraProd] = useState()
  const [filters, setFilters] = useState()
  const keywords = decodeURIComponent(params.searchparam)

  const searchProd = async () => {
    try {
      const prodFilters = {
        ram: [],
        storage: [],
        processor: []
      }
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-type": "applictaion/json"
        },
        body: JSON.stringify({ keywords })
      })
      const res = await response.json()
      if (res.message == 'success' && (res.products.length > 0 || res.extraProducts.length > 0)) {
        res.extraProducts.forEach(element => {
          if (!prodFilters.processor.includes(element.processor)) {
            prodFilters.processor.push(element.processor)
          }
          if (!prodFilters.storage.includes(element.storage)) {
            prodFilters.storage.push(element.storage)
          }
          if (!prodFilters.ram.includes(element.ram)) {
            prodFilters.ram.push(element.ram)
          }
        });
        setProducts(res.products)
        setExtraProd(res.extraProducts)
        setFilters(prodFilters)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const toggle = (e) => {
    e.target.nextSibling.classList.toggle("hidden")
  }

  useEffect(() => {
    searchProd()
  }, [])

  return (
    <div className='bg-[#241834]'>
      <div className=''>
        <div className='flex justify-between mr-16 ml-5'>
          <div className='flex w-2/5 justify-around'>
            <span className='flex flex-col items-center'>
              <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Processor</button>
              <div className='hidden absolute w-24 z-10 mt-8'>
                <ul id='dropdown1' className='flex flex-col bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                  {filters ? filters.processor.map((e) => {
                    return <li className='mt-1 cursor-pointer text-sm hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>{e}</li>
                  }) : null}
                </ul>
              </div>
            </span>
            <span className='flex flex-col items-center'>
              <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Ram</button>
              <div className='hidden absolute w-24 z-10 mt-8' id='togglebtn'>
                <ul id='dropdown1' className='flex flex-col mx-auto bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                  {filters ? filters.ram.map((e) => {
                    return <li className='mt-1 cursor-pointer text-sm hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>{e}</li>
                  }) : null}
                </ul>
              </div>
            </span>
            <span className='flex flex-col items-center'>
              <button className='border px-3 py-1 rounded-3xl' onClick={toggle}>Storage</button>
              <div className='hidden absolute w-24 z-10 mt-8'>
                <ul id='dropdown1' className='flex flex-col bg-[#E4E2EA] rounded-md text-[#241834] p-1 text-center mt-2'>
                  {filters ? filters.storage.map((e) => {
                    return <li className='mt-1 cursor-pointer text-sm hover:text-[#E4E2EA] rounded-md hover:bg-[#241834]'>{e}</li>
                  }) : null}
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
      </div>
      <div className='flex flex-wrap mx-auto px-2'>
        {products.length>0 ? products.map((data) => {
          return <ProductCard key={data.product_id} data={data} onClick={() => { setProductDetails }} />
        }) : <h2 className='w-[100vw] text-center my-6'>Sorry, we don't have those currently</h2>}
      </div>
      <h1 className='mx-auto text-center text-3xl font-medium'>More Like This</h1>
      <div className='flex flex-wrap mx-auto px-2'>
        {extraProducts ? extraProducts.map((data) => {
          return <ProductCard key={data.product_id} data={data} onClick={() => { setProductDetails }} />
        }) : <h2 className='my-6'>Not Found</h2>}
      </div>
    </div>
  )
}

export default Page
