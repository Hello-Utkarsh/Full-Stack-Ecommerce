'use client'
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'

const page = ({ params }) => {
    const [rating, setrating] = useState(3);
    const [quantity, setquan] = useState(1)

    return (
        <div className='bg-[#241834]'>
            <Navbar />
            <div className='flex bg-[#241834] px-14 w-6/12 fixed justify-center my-8'>
                <div className='flex flex-col w-full'>
                    <img className='w-full cursor-pointer mx-auto rounded-md bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                    <div className='flex justify-between w-full mt-8'>
                        <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <img className='w-[20%] rounded-md cursor-pointer bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='w-5/12 ml-[50%] fle flex-col h-full justify-around items-center'>
                <div className='flex flex-col my-6 h-fit'>
                    <h1 className='text-2xl mb-1'>MacBook Air M1 chip</h1>
                    <StarRatings
                        rating={rating}
                        starRatedColor="#9876E0"
                        changeRating={(newRating) => { setrating(newRating) }}
                        numberOfStars={5}
                        name='rating'
                        starHoverColor='#513388'
                        starDimension='17px'
                        starSpacing='1px'
                    />
                </div>
                <div className='h-[1px] w-full bg-[#d4d2d8]' />
                <div className='my-8'>
                    <h2 className='text-lg'>$549 or 99.9/month</h2>
                    <p className='text-sm mt-1'>Payment with a 6 month of EMI</p>
                </div>
                <div className='h-[1px] w-full bg-[#d4d2d8]' />
                <div className='flex flex-col my-8'>
                    <div className='flex w-32 rounded-2xl px-2 items-center text-2xl justify-around bg-[#d4d2d8] text-[#241834]'>
                        <button onClick={() => { if (quantity > 1) { setquan(quantity - 1) } }}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => setquan(quantity + 1)}>+</button>
                    </div>
                    <div className='flex w-72 justify-between mt-6'>
                        <button className='flex w-32 rounded-xl px-2 h-10 items-center text-base font-semibold justify-around bg-[#d4d2d8] text-[#241834] hover:bg-[#ffffff9e]'>Add to Cart</button>
                        <button className='flex w-36 rounded-xl px-2 h-10 items-center text-base font-semibold justify-around bg-[#d4d2d8] text-[#241834] hover:bg-[#ffffff9e]'>Add to WishList</button>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#d4d2d8]' />
                <div className='flex flex-col my-8'>
                    <h1 className='text-xl'>Available Offers</h1>
                    <div className='mt-4'>
                        <h3>Special PriceGet extra ₹46000 off (price inclusive of cashback/coupon)</h3>
                        <h3 className='mt-2'>Bank Offer10% off on ICICI Bank Credit Card and EMI Transactions, up to ₹750, on orders of ₹5,000 and above</h3>
                        <h3 className='mt-2'>Exchange Offer also available!</h3>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#d4d2d8]' />
                <div className='mt-8 flex flex-col'>
                    <h1 className='text-3xl'>Reviews</h1>
                    <div className='flex flex-col my-4'>
                        <div className='my-2'>
                            <h3>username</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non maiores voluptatem tempora qui. Laboriosam, sint? Non, in? Laborum, fuga corrupti!</p>
                            <StarRatings
                                rating={rating}
                                starRatedColor="#9876E0"
                                changeRating={(newRating) => { setrating(newRating) }}
                                numberOfStars={5}
                                name='rating'
                                starHoverColor='#513388'
                                starDimension='17px'
                                starSpacing='1px'
                            />
                        </div>
                        <div className='my-2'>
                            <h3>username</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non maiores voluptatem tempora qui. Laboriosam, sint? Non, in? Laborum, fuga corrupti!</p>
                            <StarRatings
                                rating={rating}
                                starRatedColor="#9876E0"
                                changeRating={(newRating) => { setrating(newRating) }}
                                numberOfStars={5}
                                name='rating'
                                starHoverColor='#513388'
                                starDimension='17px'
                                starSpacing='1px'
                            />
                        </div>
                        <div className='my-2'>
                            <h3>username</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non maiores voluptatem tempora qui. Laboriosam, sint? Non, in? Laborum, fuga corrupti!</p>
                            <StarRatings
                                rating={rating}
                                starRatedColor="#9876E0"
                                changeRating={(newRating) => { setrating(newRating) }}
                                numberOfStars={5}
                                name='rating'
                                starHoverColor='#513388'
                                starDimension='17px'
                                starSpacing='1px'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
