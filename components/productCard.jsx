import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';

const ProductCard = () => {
  const [rating, setrating] = useState(0);

  return (
    <div className='flex flex-col md:w-1/6 mx-6 my-6 hover:-translate-y-3 transition duration-300 rounded-md p-3'>
      <img className='rounded-md' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
      <div className='flex justify-between mt-3 mb-1'>
        <h4 className='text-sm'>MacBook Air M1 chip</h4>
        <p className='text-sm'>₹83,990</p>
      </div>
      <StarRatings
          rating={rating}
          starRatedColor="#513388"
          changeRating={(newRating)=>{setrating(newRating)}}
          numberOfStars={5}
          name='rating'
          starHoverColor	= '#9876E0'
          starDimension = '20px'
          starSpacing = '1px'
        />
        <button className='border w-28 rounded-2xl h-8 text-sm mt-2'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
