import React from 'react'
import './SeccionMovie.css'
const SeccionMovie = ({movies, title}) => {
    return(
        <div>
            <span>{title}</span>
            <div className='seccion-container'>
                {
                    movies.map((movies) =>{
                        <img src="{movie.url}" alt=""/>
                    })
                }
            </div>
        </div>
    )
}

export default SeccionMovie