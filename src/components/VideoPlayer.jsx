import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css'
import YouTubePlayer from './YouTubePlayer';


const VideoPlayer = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log(props.link)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='flex py-3 font-thin'>
            <button onClick={openModal}>{props.title}</button>            
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Video Player"
                className={isModalOpen ? "modal open" : "modal"}
                overlayClassName={isModalOpen ? "modal open" : "modal"} 
                closeTimeoutMS={300}               
            >
  
                <div className='flex justify-center m-15 sm:w-full md:w-3/4 lg:w-1/2 mx-auto'>
                    <YouTubePlayer className="flex align-center" videoId={props.videoId}/>                      
                </div>

                <div className='grid grid-cols-3 m-5'>
                    <p className='col-start-2 col-span-2 text-gray-400 text-xs'>{props.description}</p>
                </div>
                          
                <div className='flex justify-center text-xs'>
                    <div className='pr-4'>
                        <button className='text-white bg-none rounded-sm px-3 py-1 border text- border-gray-400' onClick={()=>window.open(props.codeLink, '_blank')}>CODE</button>
                    </div>
                    <div>
                        <button className='text-white bg-none rounded-sm px-3 py-1 border border-gray-400' onClick={closeModal}>CLOSE</button>
                    </div>                    
                </div>                
                
            </Modal>
        </div>

    )
}

export default VideoPlayer