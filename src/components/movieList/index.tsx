import React from "react";
import { Grid } from "@mui/material";
import Movie from "../movieCard";
import { BaseMovieProps } from "../../types/interfaces";

interface MovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

const MovieList: React.FC<MovieListProps> = ({ movies, action }) => {
  return (
    <Grid container spacing={5}>
      {movies.map((m) => (
        <Grid item key={m.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Movie key={m.id} movie={m} action={action} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
