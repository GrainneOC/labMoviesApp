import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { BaseMovieProps } from "../types/interfaces";

const TopRatedMoviesPage: React.FC = () => {
  const { data: movies, error, isLoading, isError } = useQuery<BaseMovieProps[], Error>("topRated", getTopRatedMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies || []}
      action={(movie) => {
        return <AddToFavouritesIcon {...movie} />
      }}
    />
  );
};

export default TopRatedMoviesPage;
