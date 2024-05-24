import React from 'react'
import Link from 'next/link'
import StarRatings from 'react-star-ratings';
import { useSetRecoilState } from 'recoil';
import { productDetails } from '@/states/state';
import Image from 'next/image';


const ProductCard = (props) => {
  const setProductDetails = useSetRecoilState(productDetails)
  const data = props.data

  const setData = () => {
    setProductDetails(data)
  }

  return (
    <div onClick={setData} className='flex flex-col w-[16vw] items-center mx-6 my-6 hover:-translate-y-3 transition duration-300 rounded-md p-3'>
      <Image className='rounded-md bg-[#d4d2d8]' width={500} height={500} src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
      <div className='flex justify-between w-full mt-3 mb-1'>
        <h4 className='text-sm w-full'>{data.name},{data.processor},{data.ram},{data.storage}</h4>
      </div>
      <div className='flex justify-between w-full items-center'>
        <StarRatings
          rating={data.stars}
          starRatedColor="#9876E0"
          numberOfStars={5}
          name='rating'
          starHoverColor='#513388'
          starDimension='20px'
          starSpacing='1px'
        />
        <p className='text-sm'>${data.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
