import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { MovieT } from "../types/interfaces";

const UpcomingMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieT[]>([]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: !m.favourite } : m
    );
    setMovies(updatedMovies);
  };

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};

export default UpcomingMoviesPage;
