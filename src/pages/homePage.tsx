import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MovieT } from "../types/interfaces";
import { getMovies } from "../api/tmdb-api";
 


const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<MovieT[]>([]);
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  // New function
  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: MovieT) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};

export default HomePage;
