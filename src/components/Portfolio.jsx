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
      description: "A social calendar app built for Yale students.",
      src: ycalImage,
      url: 'https://github.com/phucd5/ycal',      
      videoId: "J5lpo5OV7bg"
    },
    {
      id: 2,
      title: "YUAG SEARCH",
      description: "An application to search the Yale University Art Gallery archive.",
      src: searchImage,
      url: 'https://github.com/ericwang07/YUAG-Search',
      videoId: "C0q-blGo7eE"
    },
    {
      id: 3,
      title: "YUAG SLIDESHOW",
      src: slideshowImage,
      url: 'https://github.com/ericwang07/YUAG-Slideshow',
      videoId: "9WuUgT1glmI"
    },
    {
      id: 4,
      title: "SANTORINI",
      src: santoriniImage,
      url: 'https://github.com/ericwang07/santorini',
      videoId: "Abb2hhtWOCc"
    },
    {
      id: 5,
      title: "BANK SIMULATOR",
      src: bankImage,
      url: 'https://github.com/ericwang07/BankSimulator',
      videoId: "ULxMMxSt4nE"
    },
    {
      id: 6,
      title: "GEOGRAPHY GENIUS",
      src: geoImage,
      url: 'https://github.com/coderepic/HCI-Project-Group-31',
      videoId: "X9ToIbh4Czo"

    }
  ]

  return (
    <div name='PORTFOLIO' className='w-screen h-screen bg-black text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full mt-20 md:mt-0'>                          
            <div className='w-30 flex flex-col items-end ml-auto mr-0'>   
              <p className='text-1xl flex push-right pb-10'>
                PORTFOLIO
              </p>            
              {projects.map(({id, title, url, videoLink, videoId}) => (
                <VideoPlayer key={id} title={title} codeLink={url} videoLink={videoLink} videoId={videoId}></VideoPlayer>
              ))}

            </div>

        </div>
      </div>
  )
}

export default Portfolio