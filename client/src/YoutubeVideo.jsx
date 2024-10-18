import React, { useState, useEffect } from 'react';

const YouTubeVideo = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);
  
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;   
  const videoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID; 

  useEffect(() => {
    // Function to fetch video details
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
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
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchVideoDetails();
  }, [videoId, apiKey]);

  if (isLoading) {
    return <BootstrapSpinner loading={isLoading} />;
  }

  if (!videoDetails) {
    return <div>No video details available.</div>;
  }

  const { title } = videoDetails.snippet;
  const { viewCount, likeCount } = videoDetails.statistics;

  return (
    <div className="start-page">
      <div className="video-container"> 
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-details">
        <h3>{title}</h3>
        <p>{likeCount}</p>
        <img
          src="images/upvote.png"
          alt="like icon"
          style={{ width: '20px', height: '20px' }}
        />
        <p>{viewCount} Views</p>
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
