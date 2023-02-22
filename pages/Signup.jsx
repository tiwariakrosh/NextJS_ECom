import React, { useState } from 'react'
import Link from 'next/link'

const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, email, password }

        let res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        let response = await res.json()
        console.log(response)
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <div className='mt-4'>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/image/sslogo.png"
                            alt="smile store brand"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign Up to your account
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="name"
                                    name="name"
                                    type="name"
                                    value={name}
                                    autoComplete="name"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Sign Up
                            </button>
                            <div className="mt-4 text-center">
                                Already have an account ?
                                <Link href={'/Login'} className='bg-blue-200 py-1 px-2 ml-3 rounded'>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup