
 function videoDetailsLoader() {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const videoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID; 

  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
  )
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.items.length > 0) {
      return data.items[0]; // Return video details
    } else {
      throw new Error('Video not found');
    }
  })
  .catch(error => {
    console.error('Error fetching video details:', error);
    throw new Error('Error fetching video details');
  });
}

export default videoDetailsLoader;