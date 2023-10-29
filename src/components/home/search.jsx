export default function Search () { 
  return (
    <div className="search">
      <h1 className="welcome">
        Type to search midia in<span className="nasa-font"> NASA</span>
      </h1>
      <input
        id="searchbar"
        type="text"
        name="text"
        placeholder="Search..."
        className="input"
      />
      <a href="/" id="search-bt"><img id="search-ico" src="/public/outline_search_white_24dp.png" alt="" /></a>
    </div>
  )}