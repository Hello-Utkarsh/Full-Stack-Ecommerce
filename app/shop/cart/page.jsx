'use client'
import { productQuantity } from '@/states/state';
import CartCard from '@/components/CartCard'
import Navbar from '@/components/Navbar'
import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'

const Page = () => {
    const [singleProductQuantity, setSingleProductQuantity] = useRecoilState(productQuantity)
    const [orderProd, setProd] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)



    const fetchOrder = async () => {

        const response = await fetch('/api/order', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const resJson = await response.json()

        if (resJson.message === "Success") {
            resJson.orderProducts.forEach((d) => {
                const product_id = d.products.product_id
                const product_quantity = d.quantity
                setSingleProductQuantity((oldquan) => [...oldquan, { product_id, product_quantity }])
            })
            setProd(resJson.orderProducts)
        }
    }

    const totalvalue = useMemo(() => {
        if (orderProd !== "") {
            let totalPrice = 0
            Array.from(orderProd).forEach(d => {
                totalPrice += singleProductQuantity.find(e => e.product_id === d.products.product_id).product_quantity * d.products.price
            })
            setTotalPrice(totalPrice)
        }
    }, [singleProductQuantity])

    useEffect(() => {
        fetchOrder()
    }, [])

    return (
        <div className='min-h-[100vh] bg-[#241834]'>
            <Navbar />
            <div>
                <h1 className='text-3xl font-bold text-center'>Shopping Cart</h1>
                <div className='mt-8 flex h-[70vh] bg-[#d4d2d8] text-[#513388] rounded-xl mx-auto w-5/6 max-lg:flex-col'>
                    <div className='overflow-y-scroll flex flex-col justify-around h-fit items-center w-3/6 mx-auto text-center max-lg:h-7/12 max-lg:w-5/6 max-lg:items-start max-sm:w-full'>
                        {orderProd ? orderProd.map((d) => {
                            return <CartCard data={d.products} orderId={d.orderId} list={"wishlist"} />
                        }) : <p className='w-full text-center'>No Product in Wishlist</p>}
                    </div>
                    <span className='h-full bg-black w-[2px] border-1 border-black max-lg:h-[2px] max-lg:w-full' />
                    <div className='w-4/12 mx-auto my-4 flex flex-col justify-center max-lg:w-5/6'>
                        <h2 className='text-2xl my-2 font-bold text-center max-[550px]:text-xl'>Order Summary</h2>
                        <div className='mt-4 font-medium max-[425px]:text-sm'>
                            <span className='flex justify-between'>
                                <p>Subtotal</p>
                                <p>${totalPrice}</p>
                            </span>
                            <span className='flex justify-between'>
                                <p>Tax</p>
                                <p>$</p>
                            </span>
                            <span className='flex justify-between'>
                                <p>Total</p>
                                <p>${totalPrice}</p>
                            </span>
                        </div>
                        <div className='w-full flex justify-center mt-5'>
                            <button className='w-32 h-9 rounded-lg bg-[#241834] text-[#d4d2d8] hover:scale-110 transition max-[550px]:w-24 max-[550px]:text-sm'>Checkout</button>
                        </div>
                        <div className='w-full flex justify-center mt-5'>
                            <button className='w-32 h-9 rounded-lg bg-[#241834] text-[#d4d2d8] hover:scale-110 transition max-[550px]:w-24 max-[550px]:text-sm'>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
