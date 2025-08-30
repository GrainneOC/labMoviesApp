import React from "react";
import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import ActorList from "../components/actorList";
import Header from "../components/headerMovieList";
import { Box, Grid } from "@mui/material";

const ActorsListPage: React.FC = () => {
  const { data: actors, error, isLoading, isError } = useQuery<any[], Error>("actors", getPopularActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Box sx={{ marginTop: "150px", padding: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Header title="Popular Actors" />
        </Grid>
        <Grid item container spacing={5} sx={{ marginTop: 2 }}>
          <ActorList 
            actors={actors || []} 
            action={(actor) => {
              return <AddToFavouritesIcon {...actor} />
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActorsListPage;
