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
      description: "A social calendar app built for Yale students. Features Yale course integration, friending, group events, and AI scheduler.",
      languages: "Javascript, HTML, CSS",
      technologies: "MongoDB, ExpressJS, React, NodeJS",
      src: ycalImage,
      url: 'https://github.com/phucd5/ycal',      
      videoId: "J5lpo5OV7bg"
    },
    {
      id: 2,
      title: "SANTORINI",
      description: "A command-line representation of the Santorini board game. Human, random, or heuristic (pseudo-AI) player modes. Undo/redo and game stats functionality are supported.",
      languages: "Javascript, HTML, CSS",
      technologies: "MongoDB, ExpressJS, React, NodeJS",
      src: santoriniImage,
      url: 'https://github.com/ericwang07/santorini',
      videoId: "Abb2hhtWOCc"
    },
    {
      id: 3,
      title: "YUAG SEARCH",
      description: "An application to search the Yale University Art Gallery archive. Uses AJAX calls for dynamic searching.",
      src: searchImage,
      url: 'https://github.com/ericwang07/YUAG-Search',
      videoId: "C0q-blGo7eE"
    },
    {
      id: 4,
      title: "YUAG SLIDESHOW",
      description: "A randomized slideshow featuring the Yale University Art Gallery's collection of artwork. Play/pause and next/previous functionality are supported.",
      src: slideshowImage,
      url: 'https://github.com/ericwang07/YUAG-Slideshow',
      videoId: "9WuUgT1glmI"
    },
    {
      id: 5,
      title: "BANK SIMULATOR",
      description: " A basic banking app simulator with GUI. Applying interests/fees must be done manually and is based on the month of most recent transaction. Includes logic that enforces real-world banking constraints.",
      src: bankImage,
      url: 'https://github.com/ericwang07/BankSimulator',
      videoId: "ULxMMxSt4nE"
    },
    {
      id: 6,
      title: "GEOGRAPHY GENIUS",
      description: "A motion-controlled geography quiz game aimed at promoting basic geography knowledge amongst college students as a convenient pastime when walking between classes. Features two different game modes.",
      src: geoImage,
      url: 'https://github.com/coderepic/HCI-Project-Group-31',
      videoId: "X9ToIbh4Czo"

    }
  ]

  return (
    <div name='PORTFOLIO' className='w-screen h-screen bg-black text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full mt-20 md:mt-0'>                          
            <div className='w-30 flex flex-col items-end ml-auto mr-0'>          
              {projects.map(({id, title, url, description, videoId}) => (
                <VideoPlayer key={id} title={title} description={description} codeLink={url} videoId={videoId}></VideoPlayer>
              ))}

            </div>

        </div>
      </div>
  )
}

export default Portfolio