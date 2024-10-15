import React, { useState, useEffect } from 'react';

const YouTubeVideo = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch video details
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${process.env.YOUTUBE_VIDEO_KEY}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.items.length > 0) {
          setVideoDetails(data.items[0]);
        } else {
          console.error('Video not found');
        }
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [process.env.YOUTUBE_VIDEO_KEY]);

  if (!videoDetails) {
    return <div>Loading video details...</div>;
  }

  const { title, description } = videoDetails.snippet;

  return (
    <div>
      <div className="video-container">
        {/* Embed the YouTube video using an iframe */}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${process.env.YOUTUBE_VIDEO_KEY}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};




function BootstrapSpinner({ loading }) {
    return loading ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : null;
  }
  

export default YouTubeVideo;
