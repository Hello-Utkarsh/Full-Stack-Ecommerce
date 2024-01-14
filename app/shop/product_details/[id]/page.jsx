'use client'
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'

const page = ({ params }) => {
    const [rating, setrating] = useState(0);

    return (
        <div className='flex bg-[#241834] w-full p-8 justify-between'>
            <div className='flex flex-col w-6/12'>
                <img className='w-full cursor-pointer mx-auto rounded-md bg-[#ffffffca]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                <div className='flex justify-between w-full mt-8'>
                    <img className='w-[20%] rounded-md cursor-pointer bg-[#ffffffca]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                    <img className='w-[20%] rounded-md cursor-pointer bg-[#ffffffca]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                    <img className='w-[20%] rounded-md cursor-pointer bg-[#ffffffca]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                    <img className='w-[20%] rounded-md cursor-pointer bg-[#ffffffca]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
                </div>
            </div>
            <div className='w-5/12 fle flex-col'>
                <div className='flex flex-col'>
                    <h1>MacBook Air M1 chip</h1>
                    <StarRatings
                        rating={rating}
                        starRatedColor="#9876E0"
                        changeRating={(newRating) => { setrating(newRating) }}
                        numberOfStars={5}
                        name='rating'
                        starHoverColor='#513388'
                        starDimension='15px'
                        starSpacing='1px'
                    />
                </div>
                <div className='h-[1px] w-full bg-[#ffffffca]' />
                <div>
                    <h2>$549 or 99.9/month</h2>
                </div>
                <div className='h-[1px] w-full bg-[#ffffffca]' />
                <div className='flex flex-col'>
                    <button>1</button>
                    <div>
                        <button>Add to Cart</button>
                        <button>Add to WishList</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
