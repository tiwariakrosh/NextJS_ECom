import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {

    return (
        <div className='container px-10 lg:px-10 sm:px-5  mt-10'>
            <h1 className='text-2xl text-center font-bold text-gray-600 leading-6'>Checkout</h1>
            <h2 className='font-bold text-xl'>Delivery Details</h2>
            <div className="flex my-4 mx-auto">
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" placeholder='Full name' name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="flex my-4 mx-auto">
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                        <input type="text" id="address" placeholder='Address' name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone No.</label>
                        <input type="tel" id="phone" name="phone" placeholder='Phone No.' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="flex my-4 mx-auto">
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="city" placeholder='City' name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" placeholder='State' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="flex my-4 mx-auto">
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
                        <input type="text" id="pincode" placeholder='Pin Code' name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="alt-address" className="leading-7 text-sm text-gray-600">Alt. Address</label>
                        <input type="text" id="alt-address" name="alt-address" placeholder='Alt. Address' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600" >Message</label>
                    <textarea name="message" id='message' placeholder='Messsage' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" cols="" rows="3"></textarea>
                </div>
            </div>
            <h2 className='font-bold text-xl mt-4'>Review Cart Item</h2>
            <div className="sidebar w-100  p-3 bg-blue-50">
                <h3 className='mr-5 text-center mt-6 font-semibold'>Shopping Cart</h3>
                {Object.keys(cart).length == 0 &&
                    <div>
                        <h4 className='my-4 font-medium'>This cart is empty!</h4>
                        <Link href={'/ProductItems'}><button className='flex w-[150px]  justify-center border-0 bg-green-500 py-2 px-4 rounded-full text-white mt-3 mx-2 shadow hover:bg-green-600'>Shop Now</button></Link>
                    </div>
                }
                {Object.keys(cart).map((k) => {
                    return (
                        <div key={k}>
                            <li className='flex w-full items-center'>
                                <img src={cart[k].img} className='h-10 w-10 mr-1 shadow-sm rounded-sm' alt="" />
                                <div className='w-3/5 flex flex-wrap gap-1'>
                                    <p className='line-clamp-2'>{cart[k].name}</p>
                                    <span className='font-semibold'>({cart[k].size}/{cart[k].variant})</span>
                                </div>
                                <div className=' bg-slate-100/100 flex gap-2 p-1 px-2 rounded-full items-center'>
                                    <AiOutlineMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].img, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer' />
                                    <div className='mx-2'>{cart[k].qty}</div>
                                    <AiOutlinePlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].img, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer' />
                                </div>
                                <div className='w-2/5 ml-2'>Rs: {cart[k].price}</div>
                            </li>
                            <div className='font-semibold text-lg m-3 text-gray-700'>Subtotal : {subTotal}</div>
                            <div className="flex justify-center">
                                <Link href={'/Checkout'}> <button className='flex w-[150px]  justify-center border-0 bg-green-500 py-2 px-4 rounded-full text-white mt-3 mx-2 shadow hover:bg-green-600'>Pay</button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout
