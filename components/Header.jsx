import Link from 'next/link'
import React, { useRef } from 'react'
import { AiFillCloseCircle, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';

const Header = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.add('translate-x-0')
            ref.current.classList.remove('translate-x-full')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.add('translate-x-full')
            ref.current.classList.remove('translate-x-0')
        }
    }
    const ref = useRef();

    return (
        <header className="text-gray-600 body-font shadow-md fixed w-full z-50 top-0 bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-1 items-center text-base justify-center">
                    <Link href={'/About'} className="mr-5 font-medium hover:text-gray-900 cursor-pointer">About</Link >
                    <Link href={'/WomenClothing'} className="mr-5 font-medium hover:text-gray-900">Women's</Link>
                    <Link href={'/Mens'} className="mr-5 font-medium hover:text-gray-900">Men's</Link>
                    <Link href={'/ProductItems'} className="mr-5 font-medium hover:text-gray-900">All Product</Link>
                    <Link href={'/Contact'} className="mr-5 font-medium hover:text-gray-900">Contact</Link>
                </nav>
                <div className="right flex align-middle gap-4 absolute right-10">
                    <AiOutlineShoppingCart onClick={toggleCart} className='text-lg mt-1 h-7 w-7 cursor-pointer' style={{ width: "30px" }} />
                    <Link href={"/Login"}><MdOutlineAccountCircle className='text-lg mt-1 h-7 w-7 cursor-pointer' /></Link>
                </div>

                <div ref={ref} className={`sidebar w-100 absolute  p-3 top-14 right-0 bg-pink-100 h-[95vh] transform ${Object.keys(cart).length === 0 ? 'translate-x-full' : 'translate-x-0'}`}>
                    <h3 className='mr-5 text-center mt-6 font-semibold'>Shopping Cart</h3>
                    <span onClick={toggleCart} className="absolute top-3 right-1 cursor-pointer text-xl text-pink-300" >
                        <AiFillCloseCircle />
                    </span>

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
                                    <img src='/image/m-jeans.jpg' className='h-10 w-10 mr-1 shadow-sm rounded-sm' alt="" />
                                    <div className='w-3/5 line-clamp-2'>{cart[k].name}</div>
                                    <div className=' bg-slate-100/100 flex gap-2 p-1 px-2 rounded-full items-center'>
                                        <AiOutlineMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer' />
                                        <div className='mx-2'>{cart[k].qty}</div>
                                        <AiOutlinePlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer' />
                                    </div>
                                    <div className='w-2/5 ml-2'>Rs: {cart[k].price}</div>
                                </li>
                                <div className='font-semibold text-lg my-3 text-gray-700'>Subtotal : {subTotal}</div>
                                <div className="flex justify-center">
                                    <button onClick={clearCart} className='flex w-[150px] justify-center border-0 bg-red-500 py-2 px-4 rounded-full text-white mt-3 mx-2 shadow hover:bg-red-600'>Clear Cart</button>
                                    <Link href={'/Checkout'}> <button className='flex w-[150px]  justify-center border-0 bg-green-500 py-2 px-4 rounded-full text-white mt-3 mx-2 shadow hover:bg-green-600'>Checkout</button></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header