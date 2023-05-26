import React from 'react'
import { Gender } from './Gender'
import movie from '../assets/movie.json'
import './MovieMain.css'

export const MovieMain = ({Dogs}) => {
  return (
    <div className='movie-main-container'>
        {/* <img src={movie.imgsrc} alt="" /> */}
        <img src={Dogs[0]?.url} alt="" />
        <Gender movie = {movie}/>
        <span>
            {
                movie.resume
            }
        </span>
    </div>
    
  )
}
