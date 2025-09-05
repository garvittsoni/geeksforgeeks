import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className=' my-40 align-center max-w-5xl mx-auto p-3'>
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className='flex justify-center my-10 gap-5 '>
                <a className='text-center hover:underline ' href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fgeeks_for_geeks%2F&is_from_rle" target="_blank">
                    Instagram: <span className='font-bold'>@geeks_for_geeks</span>
                </a>
                <br/>
                    <a className="text-center hover:underline" href="https://twitter.com/geeksforgeeks" target="_blank">
                        Twitter: <span className='font-bold'>@geeksforgeeks</span>
                    </a>
            </div>
        </section>
    )
}

export default Contact
