import React, { Component } from "react";

export default class News extends Component {
  render() {
    // imageurl,desc, and title for keep changing the contents inside of news components with url to uniquely identify different articles
    //just add newsurl as the 4th props
    let { title, description, imgurl, newsUrl, author, date,source } = this.props;
    let d = new Date(date);
    return (
      <div className="container">
        <div className="card">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="badge">{source}</span>
          <img src={imgurl} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* <p className="card-text">{date}.</p>  no need for unique*/}
            <p class="card-text">
              <small class="text-muted">
                By {author} on {d.toUTCString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-dark">
              Read More
            </a>{" "}
            {/* //keepthe same name as props statement */}
          </div>
        </div>
      </div>
    );
  }
}
