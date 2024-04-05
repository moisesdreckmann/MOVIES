import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../../src/components/Header.jsx';
import Navbar from '../../src/components/Navbar.jsx';
import MyCarousel from '../components/MyCarousel.jsx';
import axios from 'axios';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const apiKey = 'f201067de4febeb921253bbeee748c3a';
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // URL base para as imagens

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => {
        setPopularMovies(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes populares:', error);
      });
  }, [apiKey]);

  return (
    <div>
      <Header className="header" />
      <Navbar className="navbar" />
      <MyCarousel />
      <h1 className='h1'>MAIS POPULARES</h1>
      <div className='movies'>
      <div className="movie-list">
        {popularMovies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className='imgMovie' />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Home;