'use client'
import CartCard from '@/components/CartCard'
import Navbar from '@/components/Navbar'
import WishCartCard from '@/components/WishCard'
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'

const page = () => {
    const [rating, setrating] = useState(1);
    const [quantity, setquan] = useState(1)
    const [orderProd, setProd] = useState(null)

    const fetchOrder = async () => {

        const response = await fetch('/api/order', {
            method: 'GET',
        })
        const resJson = await response.json()

        setProd(resJson)
    }

    useEffect(() => {
        fetchOrder()
    })

    return (
        <div className='min-h-[100vh] bg-[#241834]'>
            <Navbar />
            <div>
                <h1 className='text-3xl font-bold text-center'>Shopping Cart</h1>
                <div className='mt-8 flex h-[70vh] bg-[#d4d2d8] text-[#513388] rounded-xl justify-between mx-auto w-5/6'>
                    <div className='overflow-y-scroll flex flex-col justify-around items-center w-3/6 mx-auto text-center'>
                        {orderProd ? orderProd.map((d) => {
                            return <CartCard data={d} list={"wishlist"} />
                        }) : <p className='w-full text-center'>No Product in Wishlist</p>}
                    </div>
                    <span className='h-full bg-black w-[2px] border-1 border-black' />
                    <div className='w-2/6 mx-auto mt-20 flex-col items-center justify-center'>
                        <h2 className='text-2xl font-bold'>Order Summary</h2>
                        <div className='mt-4 font-medium'>
                            <span className='flex justify-between'>
                                <p>Subtotal</p>
                                <p>$$$</p>
                            </span>
                            <span className='flex justify-between'>
                                <p>Tax</p>
                                <p>$</p>
                            </span>
                            <span className='flex justify-between'>
                                <p>Total</p>
                                <p>$$$$$</p>
                            </span>
                        </div>
                        <button className='w-32 h-9 mt-5 rounded-lg ml-32 bg-[#241834] text-[#d4d2d8] hover:scale-110 transition'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
