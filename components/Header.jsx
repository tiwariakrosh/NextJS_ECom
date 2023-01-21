import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
const Header = () => {
    return (
        <header className="text-gray-600 body-font shadow-md">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-1 items-center text-base justify-center">
                    <Link href={'/About'} className="mr-5 font-medium hover:text-gray-900 cursor-pointer">About</Link >
                    <Link href={'/Jeans'} className="mr-5 font-medium hover:text-gray-900">Jeans</Link>
                    <Link href={'/ProductItems'} className="mr-5 font-medium hover:text-gray-900">All Product</Link>
                    <Link href={'/Contact'} className="mr-5 font-medium hover:text-gray-900">Contact</Link>
                </nav>
                <div className="right flex align-middle gap-2 absolute right-10">
                    {/* <RxAvatar /> */}
                    <AiOutlineShoppingCart className='text-lg mt-1 h-7 w-7' style={{ width: "30px" }} />
                    <Link href={"/Login"} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">Login
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header