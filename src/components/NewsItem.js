import React from 'react'
import {Link} from 'react-router-dom'
const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger text-light"> {source} </span>
                    </div>
                    <img src={imageUrl ? imageUrl :"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <div className='moli'>
                        <Link rel="noreferrer" to={newsUrl} target="_blank" className="btn btn-sm btn-dark text-center " id='lotpot'>Read More</Link>
                        </div>
                          
                        {/* <button ><a href={newsUrl} >klick me</a></button> */}
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem