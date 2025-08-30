import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
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
  action: (m: BaseMovieProps) => React.ReactNode;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, action }) => {
  const { favourites } = useContext(MoviesContext);
  const isFavourite = favourites.find((id) => id === movie.id) ? true : false;

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
        {typeof action === 'function' ? action(movie) : null}
        <Link to={`/movies/${movie.id}`}>
          <Typography variant="h6" component="p">
            More Info ...
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
