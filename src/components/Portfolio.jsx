import React from 'react'
import VideoPlayer from './VideoPlayer'


// import ycalImage from '../assets/images/'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: "Vault Kinetics",
      description: "A real-time IoT Bluetooth application for Vault Kinetics mats. Features four agility drills and an informative dashboard.",
      languages: "Typescript",
      technologies: "React Native, Expo, React Three Fiber/ThreeJS",
      videoId: "6c01D0fd0uI"
    },
    {
      id: 2,
      title: "Here",
      description: "An iOS location-based augmented reality social media application. Users can post and view messages in their current location, enabling greater immersion in bustling community spaces.",
      languages: "Swift, Javascript",
      technologies: "MongoDB, ExpressJS, NodeJS",
      url: 'https://github.com/yale-swe/f23-here',
      videoId: "0aBZgT1oQBg"
    },
    {
      id: 3,
      title: "YCal",
      description: "A social calendar app built for Yale students that allows you to seamlessly coordinate your rigorous academic plans with your vibrant social life. Yale course integration makes the course-shopping process easier, allowing you to instantly view how a course would conflict with your other commitments. You can add friends and view their calendars, create group events, and ask the AI scheduler to peek at every group member's calendars to find the best time for a boba study break.",
      languages: "Javascript, HTML, CSS",
      technologies: "MongoDB, ExpressJS, React, NodeJS",
      url: 'https://github.com/phucd5/ycal',
      videoId: "J5lpo5OV7bg"
    },
    {
      id: 4,
      title: "Santorini",
      description: "A command-line representation of the Santorini board game. Human, random, or heuristic player modes. Undo/redo and score displaying functionality are supported. The heuristic player mode exercises a primitive form of AI that chooses the best move. Utilizes design patterns (i.e. Memento, Strategy, etc.) to provide modularity and abstraction to the code design.",
      languages: "Python",
      url: 'https://github.com/ericwang07/santorini',
      videoId: "Abb2hhtWOCc"
    },
  ]

  return (
    <div name='PORTFOLIO' className='w-screen h-screen bg-black text-white lg:px-0 px-20'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className='w-30 flex flex-col items-end lg:text-7xl md:text-6xl text-xl'>
          {projects.map(({ id, title, url, description, videoId }) => (
            <VideoPlayer key={id} title={title} description={description} codeLink={url} videoId={videoId}></VideoPlayer>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Portfolio
