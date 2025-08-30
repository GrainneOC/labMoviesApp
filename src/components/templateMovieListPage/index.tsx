import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";
import { BaseMovieProps } from "../../types/interfaces";
import Box from "@mui/material/Box";

interface MovieListPageTemplateProps {
  movies: BaseMovieProps[];
  title: string;
  action: (m: BaseMovieProps) => React.ReactNode;
}

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
    minHeight: "100vh",
    marginTop: "150px", // Keep the margin for site header
  },
  container: {
    padding: 2,
  },
  headerGrid: {
    marginBottom: 3, // Add space between header and cards
  },
  cardsGrid: {
    marginTop: 2, // Add extra space above the cards
  }
};

const MovieListPageTemplate: React.FC<MovieListPageTemplateProps> = ({ movies, title, action }) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Grid container>
          <Grid item xs={12} sx={styles.headerGrid}>
            <Header title={title} />
          </Grid>
          <Grid item container spacing={5} sx={styles.cardsGrid}>
            <MovieList action={action} movies={movies} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default MovieListPageTemplate;
