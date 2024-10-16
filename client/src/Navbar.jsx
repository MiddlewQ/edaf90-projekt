import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
    <ul className="nav nav-tabs navbar">
        <li className="nav-item">
            <NavLink className="nav-link" to="/">
                Start
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/posts">
                Posts
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/about">
                About
            </NavLink>
        </li>
      
    </ul>);
    }

