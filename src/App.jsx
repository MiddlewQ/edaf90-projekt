import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

        <div className="container-fluid py-4">
            <h1>Test start page</h1>
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
        <span className="fs-4">Test</span>
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
