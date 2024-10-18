
function videoDetailsLoader() {

 const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
 // First we used a the .env file to link a video, but changed this to a hardcoded link instead for simplicity.
 // const videoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID; 
 const videoId = "kW6DydnOcjA";
 
 // Instead of throwing error to crash the website we just write error to console and load a default text element
 return fetch(
   `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
 )
  .then(response => {
    if (!response.ok) {
      console.error('Network response was not ok');
      return null; 
    }
    return response.json();
  })
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      return data.items[0]; 
    } else {
      console.error('Video not found');
      return null; 
    }
  })
  .catch(error => {
    console.error('Error fetching video details:', error);
    return null; 
  });
}

export default videoDetailsLoader;