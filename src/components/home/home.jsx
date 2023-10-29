import './style.css'
import Search from './search.jsx'

export default function Home(){
    return(
        <div class = 'image-container'>
            <Search/>
            <div className="scrolldown">
                <h3>Scroll Down</h3>
                <h3>\↓/</h3>
                
            </div>
        </div>
    )
}