import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { VideoDetails } from './Details';

function YouTubeVideo() {
  const videoDetails = useLoaderData();

  const videoId = "kW6DydnOcjA";

  return (
    <div className="start-page">
      <h2>Featured Video of the Day</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {videoDetails ? (
        <VideoDetails videoDetails={videoDetails} />
      ) : (
        <div>Error loading video details. Please try again later.</div>
      )}
    </div>
  );
}

export default YouTubeVideo;