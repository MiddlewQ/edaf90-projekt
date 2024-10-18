import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import './App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  const loadedPosts = useLoaderData();
  const [posts, setPosts] = useState(loadedPosts);

  function addPost(post) {
    setPosts([...posts, post]);
  }

  return (
    <>
    <div className="container py-4">
      <Navbar />
      <div className="outlet-container">
        <Outlet context={{ addPost, posts }}/>
      </div>
      <Footer />
    </div>
    </>
  )
}


function Footer() {
  return (
  <footer className="pt-3 mt-4 text-muted border-top footer-container">
    <div className="footer-links-container">
      <Link to="https://github.com/MiddlewQ/edaf90-projekt">
        <img src="/images/github_logo.png" className="footer-icon" />
      </Link>
      <Link to="https://youtube.com">
      <img src="/images/youtube_logo.png" className="footer-icon" />
      </Link>
    </div>
  </footer>
  )
}


export default App
