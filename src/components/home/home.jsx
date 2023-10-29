import './style.css'
import React, { useState, Suspense } from 'react';
import searchAPI from '../../nasaApi/searchApi.js';
import Search from './search.jsx'
import Footer from '../footer/foot.jsx'

const Grid = React.lazy(() => import('../results/gridPhoto.jsx'));

export default function Home(){
    const resultAreaRef = React.useRef(null);
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');

    const handleSearch = async (text) => {
        setSearchText(text);
        const response = await searchAPI.search(text, page);
        setData(response);
        resultAreaRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleForwardClick = async () => {
        const newPage = page+1
        setPage(newPage);
        const response = await searchAPI.search(searchText, newPage);
        setData(response);
    }
    const handlePreviousClick = async () => {
        if (page > 0) {
            const newPage = page-1
            setPage(newPage);
            const response = await searchAPI.search(searchText, newPage);
            setData(response);
        }
    }
    return(
        <div className='home'>
            <div className = 'image-container'>
                <Search onSearch={handleSearch}/>
                <div className="scrolldown">
                    <h3>Scroll Down</h3>
                    <h3>\↓/</h3>
                </div>
            </div>
            <div className = "content" ref={resultAreaRef}>
                <Suspense fallback={<p>Loading...</p>}>
                    {data && <Grid data={data} page={page} onForwardClick={handleForwardClick} onPreviousClick={handlePreviousClick}/>}
                </Suspense>
            </div>
            <Footer/>
        </div>
    )
}