import React, { useEffect, useState } from 'react';
import'./style.css'
import apodAPI from '../../nasaApi/apodAPI.js'
import Footer from '../footer/foot.jsx'
import load from '../../assets/b6e0b072897469.5bf6e79950d23.gif'

export default function Iod(){
    const [resp, setResp] = useState(null);

    useEffect(() => {
        apodAPI.get().then(data => setResp(data));
    }, []);

    if (!resp) {
        return <img className='loading' src={load} alt="Loading..." />;
    }
    return(
        <div className='iod'>
            <div className = 'image-container'>
                <div id="news">
                    
                    <div className="image-of-the-day">
                        <div className="image-box" style={{ backgroundImage: "url("+resp.url+")" }}>
                            <h4 className="tag">IMAGE OF THE DAY</h4>
                            <div className="overlay-text">
                                <h1>{resp.title}</h1>
                                <p>
                                    {resp.explanation}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
    )
}