import React, { useEffect } from 'react'
import Link from 'next/link'
import StarRatings from 'react-star-ratings';
import { useSetRecoilState } from 'recoil';
import { productDetails } from '@/states/state';
import Image from 'next/image';


const ProductCard = (props) => {
  const setProductDetails = useSetRecoilState(productDetails)
  const data = props.data
  const name = `${data.name},${data.processor},${data.ram},${data.storage}`
  const screenWidth = screen.width
  const bg = props.bg

  const setData = () => {
    setProductDetails(data)
  }

  return (
    <Link href={`/shop/product_details/${data.product_id}`}>
      <div onClick={setData} className='flex flex-col w-[16vw] items-center mx-4 my-6 hover:-translate-y-3 transition duration-300 rounded-md p-3
      max-sm:w-[35vw] max-sm:mx-3 max-sm:my-3 max-[500px]:w-[40vw]
      max-[850px]:w-[28vw]
      max-[1100px]:w-[22vw] bg-[rgb(56,39,77)]'>
        <Image className={`rounded-md bg-[#${bg}] 
        max-sm:w-5/6`} width={500} height={500} src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
        <div className='flex justify-between w-full mt-3 mb-1'>
          <h4 className='text-sm w-full max-sm:text-xs line-clamp-2'>{(screenWidth>500)?name:name.slice(0, 20)+"..."}</h4>
        </div>
        <div className='flex justify-between w-full items-center'>
          <StarRatings
            rating={data.stars}
            starRatedColor="#9876E0"
            numberOfStars={5}
            name='rating'
            starHoverColor='#513388'
            starDimension={(screenWidth > 500) ? "19px" : "15px"}
            starSpacing='1px'
          />
          <p className='text-sm 
          max-sm:text-xs'>${data.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
