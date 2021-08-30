import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <div className="container-fluid player-wrapper">
      <ReactPlayer
        className='react-player'
        url= 'video/Syntaxe-JSX.mp4'
        controls = {true}
      />
    </div>
  );
};
export default Video;

          