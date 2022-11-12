import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import { useState } from 'react';
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-success" id='mynav'>
         <div className="container-fluid">
            <Link className="navbar-brand" to="/"><span>NewsBee</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><span>Home</span></Link>  
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports" ><span>Sports</span></Link>  
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment"><span>Entertainment</span></Link>  
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science"><span>Science</span> </Link>  
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business"><span>Business</span> </Link>  
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology"><span>Technology</span></Link>  
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health"><span>Health</span></Link>  
                </li>

            </ul>
            </div>
            </div>
        </nav>
      </div>
    )
  }
}
