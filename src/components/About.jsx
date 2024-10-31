import React from 'react'
const About = () => {
  return (
    <div
      className='w-screen min-h-screen bg-black text-white'
      name='ABOUT'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col justify-end md:justify-center w-full h-full items-center md:items-start px-10 md:px-0 pt-12'>
        <div className='text-sm pb-8 md:w-1/3 w-2/3 ml-auto mr-0 flex'>
          ABOUT ME
        </div>
        <div className='font-2xl text-sm pb-4 md:w-1/3 w-2/3 ml-auto mr-0 text-gray-400 flex'>
          I am an undergraduate student at Yale University pursuing a joint B.S./M.S. degree in Computer Science. My work spans advanced projects, from developing machine learning models for astrophysics at Stanford’s SLAC National Laboratory to deploying clusters of AWS servers to architecting IoT-driven athletic performance analytics. I’m committed to creating scalable, high-impact applications that integrate technical depth with purposeful design.
        </div>
      </div>
    </div>
  )
}

export default About
