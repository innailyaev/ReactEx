import React, { useRef } from 'react';
import video from './yuvalDayan.mp4';

const PlayPause = () => {

const videoRef=useRef();

const playVideo=()=>{
   videoRef.current.play();
}

const pauseVideo=()=>{
    videoRef.current.pause();
 }

return (
    <div>
        <video ref={videoRef} width="560" height="315">
            <source src={video} type="video/mp4"></source>
        </video>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
    </div>
);
}

export default PlayPause;