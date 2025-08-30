import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieDetailsT } from "../../types/interfaces"; 

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader: React.FC<MovieDetailsT> = (movie) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  // Check if the current movie is in favourites
  const favourites = JSON.parse(localStorage.getItem("favourites") || '[]');
  const isFavourite = favourites.some((fav: any) => fav.id === movie.id);
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back" onClick={handleBack}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        {isFavourite && (
          <FavoriteIcon 
            sx={{ 
              color: "red", 
              fontSize: "large",
              marginLeft: 1,
              marginRight: 1
            }} 
          />
        )}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
