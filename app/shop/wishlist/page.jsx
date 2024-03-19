'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'

const page = () => {
    const [rating, setrating] = useState(1);
    const [quantity, setquan] = useState(1)

    return (
        <div className='min-h-[100vh] bg-[#241834] pb-4'>
            <Navbar />
            <div className='my-4 min-h-[70vh] bg-[#d4d2d8] text-[#513388] rounded-xl mx-auto w-5/6'>
                <h1 className='text-3xl font-bold text-center py-4'>My Wishlist</h1>
                <div className='flex flex-wrap justify-between h-fit mr-8'>
                    <div className='w-[48%] h-fit my-2 flex items-center'>
                        <img className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='w-[60%]'>
                            <span className='flex w-full justify-between'>
                                <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium" style={{ fontSize: '22px' }}>
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
                    <div className='w-[48%] h-fit my-2 flex items-center'>
                        <img className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='w-[60%]'>
                            <span className='flex w-full justify-between'>
                                <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium" style={{ fontSize: '22px' }}>
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
                    <div className='w-[48%] h-fit my-2 flex items-center'>
                        <img className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='w-[60%]'>
                            <span className='flex w-full justify-between'>
                                <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium" style={{ fontSize: '22px' }}>
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
                    <div className='w-[48%] h-fit my-2 flex items-center'>
                        <img className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='w-[60%]'>
                            <span className='flex w-full justify-between'>
                                <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium" style={{ fontSize: '22px' }}>
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
                    <div className='w-[48%] h-fit my-2 flex items-center'>
                        <img className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='w-[60%]'>
                            <span className='flex w-full justify-between'>
                                <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium" style={{ fontSize: '22px' }}>
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
                    <div className='w-[48%] h-fit my-2 flex items-center'>
                        <img className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='w-[60%]'>
                            <span className='flex w-full justify-between'>
                                <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium" style={{ fontSize: '22px' }}>
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
                    <div className='w-[48%] h-fit my-2 flex items-center'>
                        <img className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                        <div className='w-[60%]'>
                            <span className='flex w-full justify-between'>
                                <h2 className='font-semibold text-lg text-start'>MacBook Air M1 chip</h2>
                                <span className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium" style={{ fontSize: '22px' }}>
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
            </div>
        </div>
    )
}

export default page
