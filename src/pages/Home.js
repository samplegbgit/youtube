import React from 'react';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';
import videos from '../data';

const Home = () => (
  <div className="d-flex">
    <Sidebar />
    <div className="d-flex flex-wrap justify-content-center">
      {videos.map((video, idx) => (
        <VideoCard key={idx} {...video} />
      ))}
    </div>
  </div>
);

export default Home;
