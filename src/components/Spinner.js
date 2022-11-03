import React from 'react'
// import spinner from './loading.gif'

export default function Spinner() {
  return (
    <div className="spinner-grow text-success" role="status">
        <span className="sr-only"> <span className='lonely'>Loading..</span> </span>
    </div>
  )
}