import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold ">Something missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we cant find that page. Youll find lots to explore on the home page. </p>
                    <Link href="/">Back Home</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound