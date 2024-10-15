import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import YouTubeVideo from './getVideo'


function App() {
    const [posts, setPosts] = useState([])

    return (
        <>

        <div className="container-fluid py-4">
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
        </>
  )
}


function Header() {
    return (
    <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Prog4Lyfe</span>
      </header>
    )
  }
  
  function Footer() {
    return (
    <footer className="pt-3 mt-4 text-muted border-top">
    EDAF90 - webprogrammering
    </footer>
    )
  }
  

export default App
