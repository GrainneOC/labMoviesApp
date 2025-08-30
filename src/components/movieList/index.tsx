import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { MovieT } from "../../types/interfaces";

interface MovieListProps {
  movies: MovieT[];
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {
  const movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} {...m} />
    </Grid>
  ));
  return movieCards;
}

  export default MovieList;
