import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";

const ProductItems = () => {
    const [data, setData] = useState('');

    const getAllData = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getAllData();
    }, []);
    const Images = true;
    return (
        <div>
            <section className="text-gray-600 body-font">
                <h1 className='text-center font-bold text-3xl sm:mt-10 lg:mt-15 text-gray-800'>All Products</h1>
                <div className="container px-20 max-[500px]:px-5 py-24  mx-auto">
                    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-2">
                        {data ?
                            data.map((item) => (
                                <div key={item.id} className="w-full bg-blue-100/10 prod-img">
                                    <a className="block relative h-60 rounded overflow-hidden ">
                                        <img height={200} width={250} alt="ecommerce" className="object-contain bg-transparent object-center w-full h-full hover:scale-105  duration-500 block" src={Images ? `${item.image}` : '/image/b-tshirt.webp'} />
                                    </a>
                                    <div className="mt-4 p-3">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{item.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">{item.title}</h2>
                                        <p className="mt-1">Rs: {item.price}</p>
                                    </div>
                                </div>
                            )) : <h3 className='text-center w-full font-semibold text-2xl'>Loading...</h3>}
                    </div>
                </div>
            </section>
        </div>
    )

}

export default ProductItems