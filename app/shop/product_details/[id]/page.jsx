'use client'
import Navbar from '@/components/Navbar';
import { userId, useSSR } from '@/states/state';
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'
import { productDetails } from '@/states/state';
import { useRouter } from 'next/navigation'
const Cookies = require('js-cookie')

const page = () => {
    const [reviewed, setReviewed] = useState(false)
    const [reviewStar, setReviewStar] = useState(0)
    const [comment, setcomment] = useState("")
    const [quantity, setquan] = useState(1)
    const [product_details, setProductDetails] = useSSR(productDetails);
    const router = useRouter()

    const addToWish = async () => {
        const key = process.env.NEXT_PUBLIC_API_SECRET;
        const cookie = Cookies.get("token") || "";
        if (!cookie) {
            return router.push('/shop/login')
        }

        const data = await fetch("http://localhost:3000/api/mid-auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cookie, key }),
        });
        const id = await data.json()

        const productId = product_details.product_id
        const response = await fetch('/api/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: id, productId })
        })
        const responseMessage = await response.json()
        if (response.message == 'success') {
            alert("Successfully added to wishlist")
        } else {
            alert(responseMessage.message)
        }
    }

    const addToCart = async () => {
        const key = process.env.NEXT_PUBLIC_API_SECRET;
        const cookie = Cookies.get("token") || "";
        if (!cookie) {
            return router.push('/shop/login')
        }
        const data = await fetch("http://localhost:3000/api/mid-auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cookie, key }),
        });
        const id = await data.json()

        const productId = product_details.product_id
        const response = await fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: id, productId })
        })
        const responseMessage = await response.json()
        console.log(responseMessage)
        if (response.status == 200) {
            alert("Successfully added to wishlist")
        } else {
            alert(responseMessage.message)
        }
    }

    const addReview = async () => {
        setReviewed(!reviewed)
        const key = process.env.NEXT_PUBLIC_API_SECRET;
        const cookie = Cookies.get("token") || "";
        if (!cookie) {
            return router.push('/shop/login')
        }
        const data = await fetch("http://localhost:3000/api/mid-auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cookie, key }),
        });
        const id = await data.json()

        const response = await fetch('/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: id,
                product_id: product_details.product_id,
                review_content: comment,
                stars: reviewStar
            })
        })
        const resData = await response.json()
        if (resData.message == "success") {
            alert('Thank you for your review')
        }
    }

    return (
        <div className='bg-[#241834]'>
            <Navbar />
            <div className='max-sm:flex flex-col items-center'>
                <div className='flex bg-[#241834] px-14 w-6/12 fixed justify-center my-8 max-md:w-7/12 max-sm:static max-sm:w-10/12'>
                    <div className='flex flex-col w-full'>
                        <img className='w-full cursor-pointer mx-auto rounded-md bg-[#d4d2d8] max-sm:w-10/12' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='flex justify-between w-full mt-8'>
                            <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                            <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                            <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                            <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-5/12 ml-[50%] flex flex-col h-full justify-around max-md:w-4/12 max-md:ml-[60%] max-sm:ml-0 max-sm:w-10/12 max-sm:items-center'>
                    <div className='flex flex-col my-6 h-fit max-sm:items-center'>
                        <h1 className='text-2xl mb-1 max-md:text-[1.5rem] max-sm:text-center'>{product_details.name}</h1>
                        <StarRatings
                            rating={product_details.stars}
                            starRatedColor="#9876E0"
                            numberOfStars={5}
                            name='rating'
                            starHoverColor='#513388'
                            starDimension='17px'
                            starSpacing='1px'
                        />
                    </div>
                    <div className='h-[1px] w-full bg-[#d4d2d8] max-sm:w-10/12' />
                    <div className='my-8'>
                        <h2 className='text-xl max-sm:text-center'>${product_details.price}</h2>
                        <p className='text-base mt-1'>Payment with a 6 month of EMI</p>
                    </div>
                    <div className='h-[1px] w-full bg-[#d4d2d8] max-sm:w-10/12' />
                    <div className='flex flex-col my-8 max-sm:items-center'>
                        <div className='flex w-32 rounded-2xl px-2 items-center text-2xl justify-around bg-[#d4d2d8] text-[#241834] max-md:w-24 max-md:text-2xl'>
                            <button onClick={() => { if (quantity > 1) { setquan(quantity - 1) } }}>-</button>
                            <p>{quantity}</p>
                            <button onClick={() => setquan(quantity + 1)}>+</button>
                        </div>
                        <div className='flex w-72 max-md:w-64 justify-between mt-6'>
                            <button onClick={addToCart} className='flex w-32  rounded-xl px-2  h-10 items-center text-base  font-semibold justify-around bg-[#d4d2d8] text-[#241834] hover:bg-[#ffffff9e] max-md:px-0 max-md:w-28 max-md:text-sm' >Add to Cart</button>
                            <button onClick={addToWish} className='flex w-36  rounded-xl px-2 h-10 items-center text-base font-semibold justify-around bg-[#d4d2d8] text-[#241834] hover:bg-[#ffffff9e] max-md:w-32 max-md:text-sm max-md:px-0'>Add to WishList</button>
                        </div>
                    </div>
                    <div className='h-[1px] w-full bg-[#d4d2d8] max-sm:w-10/12' />
                    <div className='flex flex-col my-8 max-sm:items-center max-sm:w-10/12'>
                        <h1 className='text-3xl max-md:text-[1.67rem]'>Available Offers</h1>
                        <div className='mt-4 max-md:text-base'>
                            <h3>Special PriceGet extra ₹46000 off (price inclusive of cashback/coupon)</h3>
                            <h3 className='mt-2'>Bank Offer10% off on ICICI Bank Credit Card and EMI Transactions, up to ₹750, on orders of ₹5,000 and above</h3>
                            <h3 className='mt-2'>Exchange Offer also available!</h3>
                        </div>
                    </div>
                    <div className='h-[1px] w-full bg-[#d4d2d8] max-sm:w-10/12' />
                    <div className='flex flex-col my-8 w-full max-sm:w-10/12 max-sm:items-center'>
                        <h2 className='text-3xl mb-2 max-md:text-[1.67rem]'>Rate the product</h2>
                        <StarRatings
                            rating={reviewStar}
                            starRatedColor="#9876E0"
                            changeRating={(newRating) => { setReviewStar(newRating) }}
                            numberOfStars={5}
                            name='rating'
                            starHoverColor='#513388'
                            starDimension='17px'
                            starSpacing='5px'
                        />
                        <div className='flex flex-col w-full mt-2 max-sm:items-center'>
                            <input type="text" className='w-10/12 text-[#241834] px-1 rounded-sm' onChange={() => { setcomment(event.target.value) }} />
                            <button onClick={addReview} type="button" className='mt-2 flex w-20 rounded-xl items-center text-xl justify-around bg-[#d4d2d8] text-[#241834] max-md:w-24 max-md:text-2xl'>Rate</button>
                        </div>
                    </div>
                    <div className='h-[1px] w-full bg-[#d4d2d8] max-sm:w-10/12' />
                    <div className='flex flex-col mt-8 max-sm:items-center max-sm:w-10/12'>
                        <h1 className='text-3xl max-md:text-[1.67rem]'>Reviews</h1>
                        <div className='flex flex-col my-4'>
                            <div className='my-2'>
                                <h3>username</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non maiores voluptatem tempora qui. Laboriosam, sint? Non, in? Laborum, fuga corrupti!</p>
                            </div>
                            <div className='my-2'>
                                <h3>username</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non maiores voluptatem tempora qui. Laboriosam, sint? Non, in? Laborum, fuga corrupti!</p>
                            </div>
                            <div className='my-2'>
                                <h3>username</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non maiores voluptatem tempora qui. Laboriosam, sint? Non, in? Laborum, fuga corrupti!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
