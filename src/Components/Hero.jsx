import React from 'react'

const Hero = () => {
    return (
        <section id='Hero' className='w-full flex justify-center items-center align-middle h-[80vh] gap-12 flex-col lg:flex-row mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0'>
            <div className='flex-1 flex flex-col justify-center items-center gap-5'>
                <h4 className='text-center text-xl font-bold'>Hi and welcome to</h4>
                <h2 className='text-center text-emerald-500 text-5xl font-bold'>My Portfolio Website</h2>
                <p className='text-center'>I am your friendly neighbourhood osm developer...</p>
            </div>
            <div className="flex-1">
                <img src=
                    "https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                    alt="Hello.svg"
                    className="w-full h-full bg-cover" />
            </div>
        </section>
    )
}

export default Hero
