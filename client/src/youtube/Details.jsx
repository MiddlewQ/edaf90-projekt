import React from 'react';


export function VideoDetails({ videoDetails }) {
  const { title, description, channelTitle, publishedAt, thumbnails, tags } = videoDetails.snippet;
  const { viewCount, likeCount, commentCount } = videoDetails.statistics;

  return (
    <div className="video-details">
      <h3>{title}</h3>
      <p><strong>Channel:</strong> {channelTitle}</p>
      <p><strong>Published:</strong> {new Date(publishedAt).toLocaleDateString()}</p>
      <p>
        {likeCount} Likes
        <img src="images/upvote.png" alt="like icon" style={{ width: '20px', height: '20px' }} />
      </p>
      <p>{viewCount} Views</p>
      <p>{commentCount} Comments</p>
      {tags && (
        <div className="video-tags">
          <strong>Tags:</strong> {tags.join(', ')}
        </div>
      )}
    </div>
  );
}
  