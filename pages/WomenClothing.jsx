import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";

const WomenClothing = () => {
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

    const Pants = true;
    return (
        <div>
            <section className="text-gray-600 body-font">
                <h1 className='text-center font-bold text-3xl sm:mt-10 lg:mt-15 text-gray-800'>All Women's Items</h1>
                <div className="container px-20 py-24 mx-auto">
                    <div className="flex flex-wrap  -m-4">
                        {data ?
                            data.map((item) => (
                                item.category === "jewelery" || item.category === "women's clothing" ?
                                    <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <a className="block relative h-60 rounded overflow-hidden cursor-pointer">
                                            <img height={200} width={250} alt="ecommerce" className="object-contain object-center w-full h-full block" src={Pants ? `${item.image}` : '/image/m-jeans.jpg'} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{item.category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">{item.title}</h2>
                                            <p className="mt-1">Rs: {item.price}</p>
                                        </div>
                                    </div>
                                    : null
                            )) : <h3 className='text-center w-full font-semibold flex justify-center'><svg className="animate-spin h-5 w-5 mr-3 bg-black/10 rounded" viewBox="0 0 24 24"></svg>Please Wait ...</h3>}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WomenClothing