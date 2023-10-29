export default function Item ({ img, title, type }) { 
    return (
        <div
        className="card card-mission"
        style={{ backgroundImage: 'url('+img+')' }}
        >
        <div className="card-text">
          <h3>{title}</h3>
          <p>{type}</p>
        </div>
      </div>
    )
  }