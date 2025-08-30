import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { BaseMovieProps } from "../types/interfaces";

const ActorsListPage: React.FC = () => {
  const { data: actors, error, isLoading, isError } = useQuery<any[], Error>("actors", getPopularActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <PageTemplate
      title="Popular Actors"
      movies={actors || []}
      action={(actor) => {
        return <AddToFavouritesIcon {...actor} />
      }}
    />
  );
};

export default ActorsListPage;
