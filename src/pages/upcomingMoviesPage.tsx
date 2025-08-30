import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { MovieT } from "../types/interfaces";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const UpcomingMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieT[]>([]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon {...movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;
