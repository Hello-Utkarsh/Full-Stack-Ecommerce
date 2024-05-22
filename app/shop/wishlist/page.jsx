'use client'
import Navbar from '@/components/Navbar'
import WishCard from '@/components/WishCard';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [wishlistProd, setProd] = useState(null)

    const checkDel = (id) => {
        let products = wishlistProd.filter(p => p.wishlist_id !== id)
        setProd(products)
    }

    const fetchWishlist = async () => {

        const response = await fetch('/api/wishlist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const resJson = await response.json()

        if (resJson.message === "Success") {
            setProd(resJson.wishlistProducts)
        }
    }

    useEffect(() => {
        fetchWishlist()
    }, [])

    return (
        <div className='min-h-[100vh] bg-[#241834] py-4'>
            <div className='min-h-[70vh] flex-col items-center justify-center bg-[#d4d2d8] text-[#513388] rounded-xl mx-auto w-5/6'>
                <h1 className='text-3xl font-bold text-center py-4'>My Wishlist</h1>
                <div className='justify-between flex flex-wrap h-fit max-sm:flex-col max-sm:items-center'>
                    {wishlistProd ? wishlistProd.map((d) => {
                        return <WishCard key = {d.products.product_id} checkDel = {checkDel} data={d.products} list={"cart"} wishlistId={d.wishlist_id} />
                    }) : <p className='w-full text-center'>No Product in Wishlist</p>}
                </div>
            </div>
        </div>
    )
}

export default Page
