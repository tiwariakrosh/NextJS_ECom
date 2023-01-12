import Head from 'next/head'
import Image from 'next/image'


// const inter = Inter({ subsets: ['latin'] })

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
        <h1 className='m-5 text-3xl font-bold underline text-center bg-dark'>Hello World</h1>
      </main>
    </>
  )
}
