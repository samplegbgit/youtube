import React from 'react';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: '20px' }}>
      <h2>Video {id}</h2>
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/dQw4w9WgXcQ`} 
        title="Video Player" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
