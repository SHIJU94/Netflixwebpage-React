import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <div className='banner'>
        <div className='content'>
        <h1 className='title'>MovieName</h1>
        <div className='banner-button'>
            <button className='buttons'>Play</button>
            <button className='buttons'>My List</button>
        </div>
         <h1 className='description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis enim ut tellus elementum.</h1>
        </div>
 <div className="fade"></div>
    </div>
  )
}

export default Banner