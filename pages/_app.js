import '../styles/globals.css'
import Example from './Hero'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Example />
      <Component {...pageProps} />
    </>
  )
}
