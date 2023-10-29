import './style.css'
import { useState } from 'react';
import Search from './search.jsx'
import Grid from '../results/gridPhoto.jsx'

export default function Home(){
    const [data, setData] = useState(null);
    const handleSearch = (response) => {
        // Do something with the response here
        setData(response)
      }
    return(
        <div class='home'>
            <div class = 'image-container'>
                <Search onSearch={handleSearch}/>
                <div className="scrolldown">
                    <h3>Scroll Down</h3>
                    <h3>\↓/</h3>
                </div>
            </div>
            <div class = "content">
                {data && <Grid data={data} />}
            </div>
        </div>
    )
}