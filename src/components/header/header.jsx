import './style.css'
import {
  Link
} from "react-router-dom";


export default function Header () { 
  return (
    <div className="top-bar">
        <div className="logo">
          <img
            id="globe"
            htmlFor="nasa"
            src="/public/globe_with_satellites.svg"
            alt=""
          />
          <h1 className="nasa-font" id="nasa" htmlFor="globe">
            NASA
          </h1>
        </div>
          <ul className="menu">
            <li  id="menu-home">
              <Link to="/" className="menu-opt">Home</Link>
            </li>
            <li id="menu-iod">
              <Link to="/image-of-day"  className="menu-opt">Image of the Day</Link>
              
            </li>
            <li className="menu-opt" id="menu-planets">
              <Link to="/planets"  className="menu-opt">Planets</Link>
            </li>
          </ul>
        </div>
  )
}