import React from 'react'

const Project = () => {
  return (
    <section className='my-20 w-full flex flex-col align-center max-w-5xl mx-auto gap-5'>
      <h2 className='text-5xl text-emerald-500 font-bold text-center'>My Porjects:</h2>
      {/* Projects 01 */}
      <div className='bg-emerald-200 flex flex-col p-10 justify-center items-center gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full '>
        <div className='w-80 rounded'>
          <a href="https://www.geeksforgeeks.org/reactjs/progress-tracker-using-react-and-local-storage/" className='w-full h-full'>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png" alt="Project 1" className='w-full h-full bg-cover rounded ' />
          </a>
        </div>
        <div className='flex flex-col align-center mx-auto gap-3 justify-center flex-1'>
          <h3 className='font-bold text-3xl text-center '>
            <a className="hover:underline" href="https://www.geeksforgeeks.org/reactjs/progress-tracker-using-react-and-local-storage/">
              DSA Progress Tracker
            </a>
          </h3>
          <p>
            This is a project built on React which tracks your progress in DSA
            and stores that in the local storage.
          </p>
        </div>
      </div>
      {/* Projects 02 */}
      <div className='p-10 bg-emerald-200 flex flex-col gap-5 justify-center items-center lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full '>
        <div className='rounded w-80'>
          <a className='w-full  h-full' href="https://www.geeksforgeeks.org/reactjs/15-puzzle-game-using-reactjs/">
            <img className='w-full h-full bg-cover rounded' src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png" alt="Project 2" width="300" />
          </a>
        </div>
        <div className='flex flex-col align-center mx-auto gap-3 justify-center flex-1'>
          <h3 className='font-bold text-3xl text-center'>
            <a className='hover:underline' href="https://www.geeksforgeeks.org/reactjs/15-puzzle-game-using-reactjs/">
              15 Puzzle Game
            </a>
          </h3>
          <p>
            15 puzzle game is a tile-based game with 16 tiles, where 1 is empty
            and others are numbered 1–15 in random order. The goal is to arrange
            them in numerical order by moving only tiles next to the empty space.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Project
