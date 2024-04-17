import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'

const WishCartCard = (props) => {
    const [rating, setrating] = useState(1);
    const [quantity, setquan] = useState(1)
    const data = props.data
    return (
        <div className='w-[48%] h-fit my-2 flex items-center'>
            <img className='w-[40%] -ml-3' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
            <div className='w-[60%]'>
                <span className='flex w-full justify-between'>
                    <h2 className='font-semibold text-lg text-start'>{data.name}</h2>
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
                    <p className='underline cursor-pointer'>Move to {props.list}</p>
                    <p className='font-semibold mr-3'>Total</p>
                </span>
            </div>
        </div>
    )
}

export default WishCartCard
