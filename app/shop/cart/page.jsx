'use client'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-[#241834] h-[100vh]'>
                <h1 className='text-3xl text-center'>Cart</h1>
                <div className='mt-5 flex bg-[#d4d2d8] text-[#513388] rounded-xl justify-between mx-auto w-5/6'>
                    <div className='h-[50vh] w-3/6'>
                        items
                    </div>
                    <div className='h-[20vh] w-2/6'>total</div>
                </div>
            </div>
        </div>
    )
}

export default page
