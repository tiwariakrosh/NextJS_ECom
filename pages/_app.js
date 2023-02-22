import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import HeadeeSpace from './HeadeeSpace'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const router = useRouter()
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
  }, [])

  const addToCart = (itemCode, qty, price, img, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, img, name, size, variant }
    }
    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }

  const buyNow = (itemCode, qty, price, img, name, size, variant) => {
    let newCart = { itemCode: { qty: 1, price, img, name, size, variant } };
    setCart(newCart)
    saveCart(newCart)
    console.log(newCart)
    router.push('/Checkout')
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, img, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]['qty'] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  return (
    <>
      <Header buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <HeadeeSpace />
      <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </>
  )
}
