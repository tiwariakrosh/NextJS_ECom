import React from 'react'
import Link from 'next/link';
import mongoose from 'mongoose';
import Product from "../models/Product"

function Shirt({ products }) {
    const Pants = true;
    return (
        <div>
            <section className="text-gray-600 body-font">
                <h1 className='text-center font-bold text-3xl sm:mt-10 lg:mt-15 text-gray-800'>All shirts</h1>
                <div className="container px-20 py-24 mx-auto">
                    <div className="flex flex-wrap  -m-4">
                        {Object.keys(products).length === 0 && <div className='shadow-lg p-5 mx-auto'> <p>Sorry all of the shirt's are currently out of stock.New stock comming soon!</p></div>}
                        {products ?
                            Object.keys(products).map((item) => (
                                <div key={products[item]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link passHref={true} href={`products/${products[item].slug}`} className="block relative h-60 rounded overflow-hidden">
                                        <img height={200} width={250} alt="ecommerce" className="object-contain object-center w-full h-full block" src={Pants ? `${products[item].img}` : '/image/m-jeans.jpg'} />
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{products[item].category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">{products[item].title}</h2>
                                        <p className="mt-1">Rs: {products[item].price}</p>
                                        {/* <p className='mt-1'>{products[item].size}</p> */}
                                        <div className="flex justify-between items-center mr-2">
                                            <div className="mt-1">
                                                {products[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                                                {products[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                                                {products[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                                                {products[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                                                {products[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                                            </div>
                                            <div className="mt-1">
                                                {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                                {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                                {products[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                                {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                                {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                                            </div>
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
    let products = await Product.find({ category: 'shirt' })
    let shirts = {}
    for (let item of products) {
        if (item.title in shirts) {
            if (!shirts[item.title].color.includes(item.color) && item.availableQty > 0) {
                shirts[item.title].color.push(item.color)
            }
            if (!shirts[item.title].size.includes(item.size) && item.availableQty > 0) {
                shirts[item.title].size.push(item.size)
            }
        } else {
            shirts[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0) {
                shirts[item.title].size = [item.size]
                shirts[item.title].color = [item.color]
            }
        }
    }
    return {
        props: { products: JSON.parse(JSON.stringify(shirts)) }, // will be passed to the page component as props
    }
}

export default Shirt