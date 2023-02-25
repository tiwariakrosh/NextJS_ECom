import Head from 'next/head'
import Image from 'next/image'

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    title: 'White TShirt',
    img: '/image/w-tshirt.jpg',
    price: 850,
    category: 'TShirt'
  },
  {
    id: 2,
    title: 'Men Jeans',
    img: '/image/m-jeans.jpg',
    price: 2800,
    category: 'Jeans'
  },
  {
    id: 3,
    title: 'Black TShirt',
    img: '/image/tshirt.png',
    price: 1035,
    category: 'TShirt'
  },
  {
    id: 4,
    title: 'Women Jans',
    img: '/image/l-jeans.webp',
    price: 3844,
    category: 'Jeans'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <div className="hero">
          <section className="text-gray-600 body-font">
            <div className="container relative z-10 mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font uppercase sm:text-5xl text-3xl mb-4 leading-relaxed font-semibold text-gray-900">Let's <span className='text-red-500'>create</span> your
                  <br className="hidden lg:inline-block" />own <span className='text-red-500'>style</span>
                </h1>
                <p className="mb-8 text-xl leading-relaxed">"Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes." <span className='text-lg font-semibold block'>—Diana Vreeland</span></p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full text-lg">Shop Now</button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image className="object-cover object-center rounded" alt="hero" width={800} height={500} src="/image/bg2.jpg" />
              </div>
            </div>
          </section>
        </div>
        <section className="text-gray-600 body-font">
          <h2 className='text-center font-bold text-3xl sm:mt-10 lg:mt-15 text-gray-800'>Features Products</h2>
          <p className='text-center'>A round up of our most loved collections</p>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap  -m-4">
              {products.map((item) => (
                <div key={item.id} className="lg:w-1/4 md:w-1/2 sm:p-5 p-4 w-full">
                  <a className="block relative h-64 rounded overflow-hidden">
                    <Image height={200} width={250} alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{item.category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">Rs: {item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font testimonial">
          <div className="container px-5 py-20 mx-auto">
            <h2 className='text-center font-bold text-3xl mb-4 text-orange-700'>Testimonials</h2>
            <p className='text-gray-500 small text-center mb-6'>What our client's says?</p>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="h-full sm:w-3/5 w-4/5 text-center mb-10 p-8 shadow-md mx-auto bg-white">
                  <Image alt="testimonial" className="testi_img w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-4 border-red-500 bg-gray-100" src="/image/szocs-viola-hWGxr9xxFWE-unsplash.jpg" height={100} width={100} />
                  <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full sm:w-3/5 w-4/5 text-center mb-10 p-8 shadow-md mx-auto bg-white">
                  <Image alt="testimonial" className="testi_img w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-4 border-red-500 bg-gray-100" src="/image/michael-dam-mEZ3PoFGs_k-unsplash.jpg" height={100} width={100} />
                  <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full sm:w-3/5 w-4/5 text-center mb-10 p-8 shadow-md mx-auto bg-white">
                  <Image alt="testimonial" className="testi_img w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-4 border-red-500 bg-gray-100" src="/image/michael-dam-mEZ3PoFGs_k-unsplash.jpg" height={100} width={100} />
                  <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  )
}
