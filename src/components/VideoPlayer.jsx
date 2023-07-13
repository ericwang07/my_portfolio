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
        <div className='flex justify-center py-3 text-6xl font-thin'>
            <button onClick={openModal}>{props.title}</button>            
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Video Player"
                className={isModalOpen ? "modal open" : "modal"}
                overlayClassName={isModalOpen ? "modal open" : "modal"} 
                closeTimeoutMS={300}               
            >
                
                <YouTubePlayer className="flex align-center mr-0" videoId={props.videoId}/>              
                <div className='flex justify-center pb-0 p-2 text-xs'>
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