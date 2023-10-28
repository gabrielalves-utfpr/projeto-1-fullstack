import './style.css'

export default function header () { 
  return (
    <div className="top-bar">
      <div className="logo">
        <img
          id="globe"
          htmlFor="nasa"
          src="assets/globe_with_satellites.svg"
          alt=""
        />
        <h1 className="nasa-font" id="nasa" htmlFor="globe">
          NASA
        </h1>
      </div>
      <div className="menu">
        <a className="menu-opt select" id="menu-home">
          Home
        </a>
        <a className="menu-opt" id="menu-iod">
          Image of the Day
        </a>
        <a className="menu-opt" id="menu-mars">
          Mars
        </a>
      </div>
    </div>
  )
}