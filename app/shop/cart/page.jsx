'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'

const page = () => {
    const [rating, setrating] = useState(1);
    const [quantity, setquan] = useState(1)

    return (
        <div className='min-h-[100vh] bg-[#241834]'>
            <Navbar />
            <div>
                <h1 className='text-3xl font-bold text-center'>Shopping Cart</h1>
                <div className='mt-8 flex h-[70vh] bg-[#d4d2d8] text-[#513388] rounded-xl justify-between mx-auto w-5/6'>
                    <div className='overflow-y-auto w-3/6 mx-auto text-center'>
                        <div className='w-11/12 mx-auto flex items-center'>
                            <img className='w-3/6' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                            <div className='w-3/6'>
                                <span className='flex w-full justify-between'>
                                    <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                    <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium">
                                        delete
                                    </span>
                                </span>
                                <span className='flex w-full justify-between mt-1'>
                                    <StarRatings
                                        starEmptyColor='#241834'
                                        rating={rating}
                                        starRatedColor="#513388"
                                        changeRating={(newRating) => { setrating(newRating) }}
                                        numberOfStars={5}
                                        name='rating'
                                        starHoverColor='#513388'
                                        starDimension='20px'
                                        starSpacing='1px'
                                    />
                                    <div className='flex w-24 mt-2 rounded-2xl items-center text-2xl justify-around bg-[#d4d2d8] text-[#241834] border-2 border-black'>
                                        <button onClick={() => { if (quantity > 1) { setquan(quantity - 1) } }}>-</button>
                                        <p>{quantity}</p>
                                        <button onClick={() => setquan(quantity + 1)}>+</button>
                                    </div>
                                </span>
                                <span className='flex w-full justify-between mt-3'>
                                    <p className='underline cursor-pointer'>Move to Favorite</p>
                                    <p className='font-semibold mr-3'>Total</p>
                                </span>
                            </div>
                        </div>
                        <div className='w-11/12 mx-auto flex items-center'>
                            <img className='w-3/6' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                            <div className='w-3/6'>
                                <span className='flex w-full justify-between'>
                                    <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                    <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium">
                                        delete
                                    </span>
                                </span>
                                <span className='flex w-full justify-between mt-1'>
                                    <StarRatings
                                        starEmptyColor='#241834'
                                        rating={rating}
                                        starRatedColor="#513388"
                                        changeRating={(newRating) => { setrating(newRating) }}
                                        numberOfStars={5}
                                        name='rating'
                                        starHoverColor='#513388'
                                        starDimension='20px'
                                        starSpacing='1px'
                                    />
                                    <div className='flex w-24 mt-2 rounded-2xl items-center text-2xl justify-around bg-[#d4d2d8] text-[#241834] border-2 border-black'>
                                        <button onClick={() => { if (quantity > 1) { setquan(quantity - 1) } }}>-</button>
                                        <p>{quantity}</p>
                                        <button onClick={() => setquan(quantity + 1)}>+</button>
                                    </div>
                                </span>
                                <span className='flex w-full justify-between mt-3'>
                                    <p className='underline cursor-pointer'>Move to Favorite</p>
                                    <p className='font-semibold mr-3'>Total</p>
                                </span>
                            </div>
                        </div>
                        <div className='w-11/12 mx-auto flex items-center'>
                            <img className='w-3/6' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                            <div className='w-3/6'>
                                <span className='flex w-full justify-between'>
                                    <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                    <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium">
                                        delete
                                    </span>
                                </span>
                                <span className='flex w-full justify-between mt-1'>
                                    <StarRatings
                                        starEmptyColor='#241834'
                                        rating={rating}
                                        starRatedColor="#513388"
                                        changeRating={(newRating) => { setrating(newRating) }}
                                        numberOfStars={5}
                                        name='rating'
                                        starHoverColor='#513388'
                                        starDimension='20px'
                                        starSpacing='1px'
                                    />
                                    <div className='flex w-24 mt-2 rounded-2xl items-center text-2xl justify-around bg-[#d4d2d8] text-[#241834] border-2 border-black'>
                                        <button onClick={() => { if (quantity > 1) { setquan(quantity - 1) } }}>-</button>
                                        <p>{quantity}</p>
                                        <button onClick={() => setquan(quantity + 1)}>+</button>
                                    </div>
                                </span>
                                <span className='flex w-full justify-between mt-3'>
                                    <p className='underline cursor-pointer'>Move to Favorite</p>
                                    <p className='font-semibold mr-3'>Total</p>
                                </span>
                            </div>
                        </div>
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
