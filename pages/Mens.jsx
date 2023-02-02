import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import Link from 'next/link';
import mongoose from 'mongoose';
import Product from "../models/Product"

function Mens({ products }) {
    // const [data, setData] = useState('');
    // const getAllData = () => {
    //     axios
    //         .get("https://fakestoreapi.com/products")
    //         .then((response) => {
    //             // console.log(response.data);
    //             setData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    // useEffect(() => {
    //     getAllData();
    // }, []);

    const Pants = true;

    return (
        <div>
            <section className="text-gray-600 body-font">
                <h1 className='text-center font-bold text-3xl sm:mt-10 lg:mt-15 text-gray-800'>All Men's Items</h1>
                <div className="container px-20 py-24 mx-auto">
                    <div className="flex flex-wrap  -m-4">
                        {products ?
                            products.map((item) => (
                                <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link href={`products/${item.slug}`} className="block relative h-60 rounded overflow-hidden">
                                        <img height={200} width={250} alt="ecommerce" className="object-contain object-center w-full h-full block" src={Pants ? `${item.img}` : '/image/m-jeans.jpg'} />
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{item.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">{item.title}</h2>
                                        <p className="mt-1">Rs: {item.price}</p>
                                        <p className='mt-1'>{item.size}</p>
                                        <div className="mt-1">
                                            {products[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                                            {products[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                                            {products[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                                            {products[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                                            {products[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                                        </div>
                                        <div className="mt-1">
                                            {products[item].color.includes('red') && <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('blue') && <button class="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('green') && <button class="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('yellow') && <button class="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('green') && <button class="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        </div>
                                    </div>
                                </div>
                            )) : <p>Loading Please Wait....</p>}
                    </div>
                </div>
            </section>
        </div >
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URL)
    }
    let products = await Product.find({ category: 'tshirt' })
    return {
        props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
    }
}

export default Mens