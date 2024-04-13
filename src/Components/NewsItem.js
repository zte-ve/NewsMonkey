import React from 'react'

const NewsItem = (props) => {
  const onImageError=(e)=>{
    e.target.src='https://static.vecteezy.com/system/resources/previews/001/226/460/original/breaking-news-tv-background-vector.jpg';
  }
  const obj={
    business: '#f6890c',
    entertainment: '#f6d50c',
    general: '#c977d5',
    health: '#70e65e',
    science: '#80deea',
    sports: '#f60c0c',
    technology: '#c3b8b8'    
  }
    let { title, description, imageUrl, url, author, date ,source} = props;
    return (
      <div className='container my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <div><span className="badge rounded-pill bg-danger" style={{position: 'absolute', right: 0}}>
            {source}
          </span></div>
          <img src={imageUrl} className="card-img-top" alt="News" style={{ height: '12rem', objectFit: 'cover' }} onError={onImageError}/>
          <div className="card-body">
            <div className='my-3 border' style={{ height: '10rem', overflowY: 'scroll' }}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            <p className='card-text'><small className='text-muted'>By {author || 'Unkonown'} on {(new Date(date)).toGMTString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem;
