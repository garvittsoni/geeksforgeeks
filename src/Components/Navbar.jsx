import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full px-5 sm:px-10 py-5 fixed top-0 z-10  backdrop-blur-lg shadow-xl'>
            <div className='container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto '>
                <h1 className='text-3xl text-emerald-500 font-bold'> GeeksforGeeks</h1>
                <ul className=' flex gap-3 align-center p-1 flex-wrap'>
                    <li>
                        <a href="#about" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white   hover:bg-emerald-600 '>About</a>
                    </li>
                    <li>
                        <a href="#skills" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white   hover:bg-emerald-600 '>Skills</a>
                    </li>
                    <li>
                        <a href="" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white   hover:bg-emerald-600 '>Projects</a>
                    </li>
                    <li>
                        <a href="" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white   hover:bg-emerald-600'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
