import { useState } from 'react';
import searchAPI from '../../nasaApi/searchApi.js';

export default function Search ({ onSearch }) { 
  const [text, setText] = useState('');

  const handleKeyDown = async (event) => {
    //const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const response = await searchAPI.search(text);
      onSearch(response);
      //onSearch(text);
    }
  }
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
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <a href="/" id="search-bt"><img id="search-ico" src="/public/outline_search_white_24dp.png" alt="" /></a>
    </div>
  )}