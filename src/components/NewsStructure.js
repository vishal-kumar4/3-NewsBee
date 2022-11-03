import React, { Component } from 'react'

export default class News extends Component {

  render() {
    // imageurl,desc, and title for keep changing the contents inside of news components with url to uniquely identify different articles
    //just add newsurl as the 4th props
    let {title,description,imgurl,newsUrl}=this.props
    return (
      <div className='container'>
            <div className="card">
              <img src={imgurl} className="card-img-top" alt="/"/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {/* <p className="card-text">{date}.</p>  no need for unique*/}
                <a href={newsUrl}  className="btn btn-success">Read More</a> {/* //keepthe same name as props statement */}
              </div>
          </div>
      </div>
    )
  }
}
