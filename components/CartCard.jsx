import { productQuantity } from '@/states/state';
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const CartCard = (props) => {
    const [rating, setrating] = useState(1);
    const quantityArray = useRecoilValue(productQuantity)
    const data = props.data
    const [quantity, setquan] = useState(0)
    const orderId = props.orderId
    const price = data.price * quantity;

    const delWish = async () => {
        const response = await fetch('/api/order', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ orderId })
        })
        const resJson = await response.json()
    }

    useEffect(() => {
        setquan(quantityArray.find(d => d.product_id === data.product_id).product_quantity);
    }, [])

    return (
        <div className='w-11/12 mx-auto flex items-center my-3'>
            <img className='w-3/6' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
            <div className='w-3/6'>
                <span className='flex w-full justify-between'>
                    <h2 className='font-semibold text-lg text-start'>{data.name}</h2>
                    <span onClick={delWish} className="material-symbols-outlined mr-2 cursor-pointer text-black font-medium">
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
                    <p className='font-semibold mr-3'>Total: ${price}</p>
                </span>
            </div>
        </div>
    )
}

export default CartCard
