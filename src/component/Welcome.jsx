import React from "react";
import MovieCard from "./MovieCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "25px"
  }
}));

export default function Welcome({ defaultMovies, handleClick, display }) {
  const classes = useStyles();
  if (!display) {
    return null;
  }
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {defaultMovies.map((movie) => (
            <Grid
              item
              xs={12}
              sm={3}
              key={movie["imdbID"]}
              onClick={() => handleClick(movie["imdbID"])}
            >
              <MovieCard
                title={movie["Title"]}
                year={movie["Year"]}
                poster={movie["Poster"]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
