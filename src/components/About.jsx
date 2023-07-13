import React from 'react'
const About = () => {
  return (
    <div   
        className='w-screen h-screen bg-black text-white'
        name='ABOUT'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col justify-start md:justify-center w-full h-full items-center md:items-end px-10 md:px-0'>
            <div className='pb-10'>
                <p className='text-1xl flex'>
                    ABOUT ME
                </p>                
            </div>  
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>
              Born in 2003 in Chicago, Illinois. Based in Saint Paul, Minnesota.
            </div>
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>
              I believe that intuitive interfaces are the key to maximize the potential of the most cutting-edge technologies.
            </div>
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>  
              I began my journey at the age of twelve, when I received a free netbook in exchange for the completion of an online course aimed at improving education access in low-income areas. 
            </div>
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>  
              Tired of being limited by the daily thirty minutes of computer time at my local public library, I saw this as an opportunity to indulge myself in the world of computers, a luxury my family couldn't afford.
            </div>
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>  
              I poured hours into hyperoptimizing the netbook to push beyond its hardware limitations. I taught my parents to use it, opening the channel of online wholesale for my family business. Our profits skyrocketed that year.
            </div>
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>  
              Inspired by the impact I made, I explored the realm of robotics in high school, captivated by the joy of programming intricate machines to solve real-world problems.
            </div>
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>  
              Now I forge ahead with the purpose of making accessible machine-learning tools, aiming to blend technology and empathy to shape a future where seamless human-machine harmony prevails.
            </div>
            <div className='font-2xl text-sm pb-4 w-1/2 ml-auto text-gray-400 flex'>
              Flea market vendor, lefty violinist, and stoic philosophy reader, and tennis lover.
            </div>              
            
        </div>
    </div>
  )
}

export default About