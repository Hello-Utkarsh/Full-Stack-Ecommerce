import React, { useState } from 'react'
import Link from 'next/link'
import StarRatings from 'react-star-ratings';
import { useSetRecoilState } from 'recoil';
import { productDetails } from '@/states/state';


const ProductCard = (props) => {
  const [rating, setrating] = useState(0);
  const setProductDetails = useSetRecoilState(productDetails)
  const data = props.data

  const setData = () => {
    setProductDetails(data)
  }

  return (
    <Link href={`/shop/product_details/${1}`}>
      <div onClick={setData} className='flex flex-col items-center lg:w-60 mx-6 my-6 hover:-translate-y-3 transition duration-300 rounded-md p-3'>
        <img className='rounded-md bg-[#d4d2d8]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
        <div className='flex justify-between mt-3 mb-1'>
          <h4 className='text-sm'>{data.name}</h4>
          <p className='text-sm'>{data.price}</p>
        </div>
        <StarRatings
          rating={rating}
          starRatedColor="#9876E0"
          changeRating={(newRating) => { setrating(newRating) }}
          numberOfStars={5}
          name='rating'
          starHoverColor='#513388'
          starDimension='20px'
          starSpacing='1px'
        />
        <button className='border w-28 rounded-2xl h-8 text-sm mt-2'>Add to Cart</button>
      </div>
    </Link>
  )
}

export default ProductCard
