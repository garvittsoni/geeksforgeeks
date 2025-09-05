import React from 'react'

const Skills = () => {
    const skills =["Python", "HTML", "CSS", "Javascript", "React", "NextJs"];
    return (
        <section id='Skills' className='px-10 w-full my-40 max-w-5xl mx-auto'>
            <h2 className='text-center text-6xl text-emerald-500 font-bold'>My Skills</h2>
            <div className='mt-10 flex gap-5 justify-center flex-wrap mx-auto max-w-wl'>
                {skills.map((skill, index)=>{
                    return(
                        <div key={index}
                         className='cursor-pointer px-8 py-6 rounded-xl bg-emerald-200
                                    text-lg font-semibold flex items-center justify-center
                                    hover:shadow-lg transition duration-300'>{skill}

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills
