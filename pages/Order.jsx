import React from 'react'

const Order = () => {
    return (
        <div className=''>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: 3214</h1>
                            <p className="leading-relaxed mb-4">Your order has been successfully placed !!</p>
                            <div className="flex  border-gray-200 py-2">
                                <span className="font-semibold text-gray-500">Name</span>
                                <span className="ml-auto font-semibold text-gray-900">Quantity</span>
                                <span className="ml-auto font-semibold text-gray-900">Price</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Mens Casual Premium Slim Fit T-Shirts</span>
                                <span className="ml-auto  text-gray-900">1</span>
                                <span className="ml-auto font-semibold text-gray-900">109.95</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Mens Casual Premium Slim Fit T-Shirts</span>
                                <span className="ml-auto  text-gray-900">2</span>
                                <span className="ml-auto font-semibold text-gray-900">109.95</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Mens Casual Premium Slim Fit T-Shirts</span>
                                <span className="ml-auto  text-gray-900">1</span>
                                <span className="ml-auto font-semibold text-gray-900">109.95</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="title-font font-medium text-2xl text-gray-900">Sub Total : Rs. 2158.00</span>
                                <button className="flex w-max mt-4  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Track Order</button>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/image/m-jeans.jpg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order