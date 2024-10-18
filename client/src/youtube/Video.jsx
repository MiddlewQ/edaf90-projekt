import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {VideoDetails} from './Details';


function YouTubeVideo() {
  const videoDetails = useLoaderData(); 
  if (!videoDetails) {
    return <div>No video details available.</div>;
  }

  const { title, description, channelTitle, publishedAt, thumbnails, tags } = videoDetails.snippet;
  const { viewCount, likeCount, commentCount } = videoDetails.statistics;

  return (
    <div className="start-page">
      <h2>Featured Video of the Day</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoDetails.id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <VideoDetails videoDetails={videoDetails} />
    </div>
  );
}

export default YouTubeVideo;
