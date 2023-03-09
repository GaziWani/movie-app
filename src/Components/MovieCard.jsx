import React from 'react'

const MovieCard = ({ data }) => {
  return (
    <div className='card' key={data.imdbID}>
      <div className='card-img'>
        <img className='cardImage' src={data.Poster !== 'N/A' ? data.Poster : "http://via.placeholder.com/400"} alt="no image" />
      </div>
      <div className="movieDetails">
        <div className="cardFooter">
          <p>{data.Title}</p>
          <p className='movieDate'> <span className='year'>{data.Year}</span> </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard