import './style.css'
import Item from './item.jsx'

export default function Grid ({ data }) { 
    return (
        <div>
            
            <div class = 'text-container' id = "intro">
                    <h1 class = "title">Resultado</h1>
                    
                </div>
            <div className="row" id="row-missions">
                {data.collection.items.map((item) => (
                    <Item 
                    img={item.links[0].href}
                    title={item.data[0].title}
                    type={item.data[0].media_type}
                    />
                ))}
            </div>
        </div>
    )
  }