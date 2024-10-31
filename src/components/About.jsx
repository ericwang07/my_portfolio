import React from 'react';

const About = () => {
  return (
    <div
      className='w-screen h-screen bg-black text-white flex items-center justify-center'
      name='ABOUT'
    >
      <div className='max-w-screen-lg flex flex-col items-center md:items-start content-center px-10 md:px-0 pt-12'>
        <div className='text-lg pb-8 md:w-1/3 w-2/3 text-center md:text-left'>
          ABOUT ME
        </div>
        <div className='text-md md:w-1/3 w-2/3 text-gray-400 text-center md:text-left'>
          I am an undergraduate student at Yale University pursuing a joint B.S./M.S. degree in Computer Science. My work spans advanced projects, from developing machine learning models for astrophysics at Stanford’s SLAC National Laboratory to deploying clusters of AWS servers to architecting IoT-driven athletic performance analytics. I’m committed to creating scalable, high-impact applications that integrate technical depth with purposeful design.
        </div>
      </div>
    </div>
  );
};

export default About;
