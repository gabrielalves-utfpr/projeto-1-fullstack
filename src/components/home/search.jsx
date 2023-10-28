export default function search () { 
  return (
    <div className="search">
      <h1 className="welcome">
        Welcome home,<span className="nasa-font"> Earthling</span>
      </h1>
      <input
        id="searchbar"
        type="text"
        name="text"
        placeholder="Search..."
        className="input"
      />
    </div>
  )}