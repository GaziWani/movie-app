import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

// b36c8928

const API_URL = 'http://www.omdbapi.com/?apikey=b36c8928'

// &s='moviename'

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);

    const data = await response.json()

    setMovies(data.Search)
    console.log(data.Search);

  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])

  const handleInput = (e) =>{
       const value = e.target.value;
       setMovieName(value)
  }

  const handleData = (event) => {
    event.preventDefault();
    searchMovies(movieName)
}  

  return (
    <>
      <div className='container'>
        <h1 className='heading'>Movie App</h1>
        <div className='search'>
          <div className="searchBox">
            <form onSubmit={handleData}>
              <input className='searchMoive' onChange={handleInput} type="text" placeholder='supermen' />
              <button className='searchBtn' type='submit'>search</button>
            </form>
          </div>
        </div>
        <div className="grid-container">
          {
            movies.map((data) => {
              return (
                <MovieCard data={data} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home