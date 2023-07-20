import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import ProfilePicture from '../assets/wave.svg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="HOME" className="min-h-screen w-screen bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="text-center">
          <h1 className="text-white text-6xl pb-2 m-0">ERIC WANG</h1>
          <h1 className="text-gray-400 text-sm pb-6 m-0">
            Software developer & <br />
            Student at <span className="text-white font-semibold">Yale University.</span>
          </h1>
          <div className="flex justify-center">
            <Link
              to="PORTFOLIO"
              smooth
              duration={500}
              className="cursor-pointer text-white flex w-fit px-4 py-2 my-2 items-center bg-black border border-gray-400 text-sm hover:scale-105 duration-200"
            >
              PORTFOLIO
              <span className="group-hover:rotate-90 duration-300">
                <BiSolidRightArrow className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="filter invert w-5/6  overflow-hidden md:w-2/5 md:ml-16 pb-20 hidden md:flex">
          <img src={ProfilePicture} className="w-full h-auto" alt='Profile'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
