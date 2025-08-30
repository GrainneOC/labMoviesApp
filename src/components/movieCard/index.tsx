import React, { MouseEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseMovieProps } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 300 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface MovieCardProps {
  movie: BaseMovieProps;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { favourites, addToFavourites } = useContext(MoviesContext);

  const isFavourite = favourites.find((id) => id === movie.id) ? true : false;

  const handleAddToFavourite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToFavourites(movie);
  };

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          isFavourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleAddToFavourite}>
          <FavoriteIcon />
        </IconButton>
        <Link to={`/movies/${movie.id}`}>
          <IconButton aria-label="info">
            <Typography variant="h6" component="p">
              More Info ...
            </Typography>
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
