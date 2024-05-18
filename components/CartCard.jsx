import { productQuantity } from '@/states/state';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'
import 'material-icons/iconfont/filled.css';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const CartCard = (props) => {
    const [rating, setrating] = useState(1);
    const [quantityArray, setQuantityArray] = useRecoilState(productQuantity)
    const [quantity, setquan] = useState(0)
    const [name, setName] = useState('')
    const data = props.data
    const orderId = props.orderId
    const price = data.price * quantity;
    const checkDel = props.checkDel

    const decQuantity = () => {
        if (quantity > 1) {

            setquan(prev => prev - 1)

            const product = quantityArray.find(d => d.product_id === data.product_id)
            const updateIndex = quantityArray.indexOf(product)

            const newId = product.product_id
            const newQuantity = quantity - 1

            setQuantityArray(prevArray => {
                console.log("decquan")
                let newArr = [...prevArray]
                newArr[updateIndex] = { product_id: newId, product_quantity: newQuantity }

                return newArr
            })
        }
    }

    const incQuantity = () => {

        setquan(prev => prev + 1)

        // getting the product which has to be updated and finding the index of the product
        const product = quantityArray.find(d => d.product_id === data.product_id)
        const updateIndex = quantityArray.indexOf(product)

        const newId = product.product_id
        const newQuantity = quantity + 1

        setQuantityArray(prevArray => {
            console.log("incquan")
            // creating a clone the previous array and updating the value 
            let newArr = [...prevArray]
            newArr[updateIndex] = { product_id: newId, product_quantity: newQuantity }

            return newArr
        })
    }

    const delCart = async () => {
        const response = await fetch('/api/order', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ orderId })
        })
        const resJson = await response.json()
        checkDel(data)
    }

    useEffect(() => {
        // getting the quantity of the product which has the same product id as the product card id
        setquan(quantityArray.find(d => d.product_id === data.product_id).product_quantity);
        if (window.matchMedia('(max-width: 450px)').matches) {
            if (data.name.length > 12) {
                data.name = data.name.slice(0, 10) + '...'
                setName(data.name)
            }
        } else {
            setName(data.name)
        }
    }, [data, quantityArray])

    return (
        <div className='w-full mx-auto flex items-center my-4'>
            <Image width={500} height={500} className='w-[40%]' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="" />
            <div className='w-full'>
                <span className='flex w-full justify-between'>
                    <h2 className='font-semibold text-lg text-start max-lg:text-lg max-[550px]:text-base'>{name}</h2>
                    <span onClick={delCart} className="material-icons mr-2 cursor-pointer text-black font-medium">
                    delete_outline
                    </span>
                </span>
                <span className='flex text-start w-full justify-between mt-1 max-[900px]:flex-col max-[900px]:justify-start max-[900px]:mt-2'>
                    <StarRatings
                        starEmptyColor='#241834'
                        rating={rating}
                        starRatedColor="#513388"
                        numberOfStars={5}
                        name='rating'
                        starHoverColor='#513388'
                        starDimension='20px'
                        starSpacing='1px'
                    />
                    <div className='flex w-24 mt-2 rounded-2xl items-center text-2xl justify-around bg-[#d4d2d8] text-[#241834] border-2 border-black max-[900px]:mt-2 max-[550px]:w-20 max-[550px]:text-xl max-[400px]:w-16 max-[400px]:text-base'>
                        <button onClick={decQuantity}>-</button>
                        <p>{quantity}</p>
                        <button onClick={incQuantity}>+</button>
                    </div>
                </span>
                <span className='flex w-full justify-between mt-3'>
                    <p className='underline cursor-pointer max-lg:text-base max-[550px]:text-sm'>Move to {props.list}</p>
                    <p className='font-semibold mr-3 max-lg:text-base max-[550px]:text-sm'>Total: ${price}</p>
                </span>
            </div>
        </div>
    )
}

export default CartCard
