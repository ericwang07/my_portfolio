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
              Born in 2003 in Chicago, Illinois. Studying in New Haven, Connecticut. Based in Saint Paul, Minnesota.
            </div>
            <div className='font-2xl text-sm pb-4 md:w-1/3 w-2/3 ml-auto mr-0 text-gray-400 flex'>
              I am an undergraduate student at Yale University studying Computer Science. I am interested in developing social software, tools that combat the all-pervasive loneliness that is a consequence of the digital age.
            </div>  
            <div className='font-2xl text-sm pb-4 md:w-1/3 w-2/3 ml-auto mr-0 text-gray-400 flex'>
              To aid in this mission, I am devoted to leveraging the power of artificial intelligence and intuitive interfaces to create a more connected world.
            </div>
        </div>
    </div>
  )
}

export default About