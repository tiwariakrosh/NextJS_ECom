import { useRouter } from 'next/router'
import React, { useState } from 'react'
import mongoose from 'mongoose';
import Product from "../../models/Product"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({ buyNow, addToCart, product, variants }) => {
    // console.log(product, variants);

    const router = useRouter()
    const { slug } = router.query
    const [pin, setPin] = useState()
    const [service, setService] = useState()

    // const notify = () => toast("Wow so easy!");

    const checkServicebility = async () => {
        let pins = await fetch('http://localhost:3000/api/pincode')
        let pinJson = await pins.json()

        if (pinJson.includes(parseInt(pin))) {
            setService(true)
            toast.success('Hurray! This pincode is availble', {
                position: "bottom-center",
                autoClose: 3000,
            });
        }
        else {
            setService(false)
            toast.error('Sorry! This pincode is unavailble', {
                position: "bottom-center",
                autoClose: 3000,
            });
        }
        toast("Pin code accesable")
    }

    const onChangePin = (e) => {
        setPin(e.target.value)
    }

    const [color, setColor] = useState(product.color)
    const [size, setSize] = useState(product.size)

    const refreshVariant = (newsize, newcolor) => {
        let url = `http://localhost:3000/products/${variants[newcolor][newsize]['slug']}`
        window.location = url;
        toast("Wow so easy!")
    }

    // const buyNow = () => {
    //     clearCart();
    //     addToCart(slug, 1, 400, product.title, size, color);
    //     // router.push;
    // }
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2  w-full lg:h-auto l h-[35vh] max-h-[500px] object-contain object-top rounded" src={product.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm uppercase title-font text-gray-500 tracking-widest">{product.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ({product.size}/{product.color})</h1>

                            {/* <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div> */}
                            {/* <button onClick={notify}>Notify!</button> */}
                            <ToastContainer
                                position="top-right"
                                autoClose={3000}
                            />


                            <p className="leading-relaxed">{product.desc}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size) && <button onClick={() => (refreshVariant(size, 'red'))} button className="border-2 border-red-300 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                    {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size) && <button onClick={() => (refreshVariant(size, 'blue'))} className="border-2 border-blue-300 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                    {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size) && <button onClick={() => (refreshVariant(size, 'green'))} className="border-2 border-green-300  bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                    {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(size) && <button onClick={() => (refreshVariant(size, 'yellow'))} className="border-2 border-yellow-300  bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                    {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(size) && <button onClick={() => (refreshVariant(size, 'black'))} className="border-2 border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select value={size} onChange={(e) => { refreshVariant(e.target.value, color) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                                            {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                                            {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                                            {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                                            {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                                            {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">Rs. {product.price}</span>
                                <button onClick={() => buyNow(slug, 1, product.price, product.img, product.title, product.size, product.color)} className="flex mx-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                                <button onClick={() => { addToCart(slug, 1, product.price, product.img, product.title, product.size, product.color) }} className="flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add To Cart</button>
                            </div>
                            <div className="pin mt-4 flex gap-2">
                                <input type="text" placeholder='Enter your pincode' onChange={onChangePin} className='p-2 shadow-sm border border-red-100 focus:outline-green-500 rounded' />
                                <button onClick={checkServicebility} className='bg-green-200 py-2 px-4 rounded-sm font-medium hover:bg-green-300'>Check</button>
                            </div>
                            {(!service && service != null) &&
                                <div className="mt-3 text-red-500 text-sm">Sorry ! we do not deliver to this pincode yet</div>
                            }
                            {(service && service) &&
                                <div className="mt-3 text-green-500 text-sm">Hurrey !! we deliver to this pincode</div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URL)
    }

    let product = await Product.findOne({ slug: context.query.slug })
    let variants = await Product.find({ title: product.title, category: product.category })

    let colorSizeSlug = {}
    for (let item of variants) {
        if (Object.keys(colorSizeSlug).includes(item.color)) {
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        }
        else {
            colorSizeSlug[item.color] = {}
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        }
    }

    return {
        props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
    }
}

export default Post