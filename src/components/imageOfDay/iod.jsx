import React, { useEffect, useState } from 'react';
import'./style.css'
import apodAPI from '../../nasaApi/apodAPI.js'

export default function Iod(){
    const [resp, setResp] = useState(null);

    useEffect(() => {
        apodAPI.get().then(data => setResp(data));
    }, []);

    if (!resp) {
        return <div>Loading...</div>;
    }
    return(
        <div class = 'image-container'>
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
    )
}