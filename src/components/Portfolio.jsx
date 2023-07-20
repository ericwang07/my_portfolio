import React from 'react'
import VideoPlayer from './VideoPlayer'
import bankImage from '../assets/images/bank.jpeg'
import santoriniImage from '../assets/images/santorini.png'
import ycalImage from '../assets/images/ycal.png'
import searchImage from '../assets/images/yuagSearch.jpg'
import slideshowImage from '../assets/images/yuagSlideshow.png'
import geoImage from '../assets/images/geographyGenius.png'


// import ycalImage from '../assets/images/'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: "YCAL",
      description: "A social calendar app built for Yale students that allows you to seamlessly coordinate your rigorous academic plans with your vibrant social life. Yale course integration makes the course-shopping process easier, allowing you to instantly view how a course would conflict with your other commitments. You can add friends and view their calendars, create group events, and ask the AI scheduler to peek at every group member's calendars to find the best time for a boba study break.",
      languages: "Javascript, HTML, CSS",
      technologies: "MongoDB, ExpressJS, React, NodeJS",
      src: ycalImage,
      url: 'https://github.com/phucd5/ycal',      
      videoId: "J5lpo5OV7bg"
    },
    {
      id: 2,
      title: "SANTORINI",
      description: "A command-line representation of the Santorini board game. Human, random, or heuristic player modes. Undo/redo and score displaying functionality are supported. The heuristic player mode exercises a primitive form of AI that chooses the best move. Utilizes design patterns (i.e. Memento, Strategy, etc.) to provide modularity and abstraction to the code design.",
      languages: "Javascript, HTML, CSS",
      technologies: "MongoDB, ExpressJS, React, NodeJS",
      src: santoriniImage,
      url: 'https://github.com/ericwang07/santorini',
      videoId: "Abb2hhtWOCc"
    },
    {
      id: 3,
      title: "YUAG SEARCH",
      description: "An application to search the Yale University Art Gallery (YUAG) archive. Exercises complex SQL queries to search a large database of artwork. Uses asynchronous function calls via AJAX for dynamic searching.",
      src: searchImage,
      url: 'https://github.com/ericwang07/YUAG-Search',
      videoId: "C0q-blGo7eE"
    },
    {
      id: 4,
      title: "GEOGRAPHY GENIUS",
      description: "A motion-controlled geography quiz game with two game modes. Promotes geography knowledge and incentivizes movement amongst college students as a convenient pastime when walking between classes. Demonstrates the parsing of input data gathered by the Kinect sensor for game control.",
      src: geoImage,
      url: 'https://github.com/coderepic/HCI-Project-Group-31',
      videoId: "X9ToIbh4Czo"

    },
    {
      id: 5,
      title: "BANK SIMULATOR",
      description: " A basic banking app simulator that demonstrates GUI programming with object-oriented modular design. Includes logic that enforces real-world banking constraints, with the exception that interests/fees must be applied manually and is based on the month of most recent transaction. ",
      src: bankImage,
      url: 'https://github.com/ericwang07/BankSimulator',
      videoId: "ULxMMxSt4nE"
    },
    {
      id: 6,
      title: "YUAG SLIDESHOW",
      description: "A randomized slideshow featuring the Yale University Art Gallery's (YUAG) collection of artwork. Uses asynchronous function calls via AJAX for constantly-updating time. Play/pause and next/previous functionality are supported.",
      src: slideshowImage,
      url: 'https://github.com/ericwang07/YUAG-Slideshow',
      videoId: "9WuUgT1glmI"
    },
  ]

  return (
    <div name='PORTFOLIO' className='w-screen h-screen bg-black text-white lg:px-0 px-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>                          
            <div className='w-30 flex flex-col items-end lg:text-7xl md:text-6xl text-xl'>          
              {projects.map(({id, title, url, description, videoId}) => (
                <VideoPlayer key={id} title={title} description={description} codeLink={url} videoId={videoId}></VideoPlayer>
              ))}

            </div>

        </div>
      </div>
  )
}

export default Portfolio