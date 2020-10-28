import React from "react";
import MovieCard from "./MovieCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "20px"
  }
}));

export default function Movies(props) {
  const { movieList, handleClick, navigate } = { ...props };

  if (navigate) {
    props.history.push("/home");
  }

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {movieList.map((movie) => (
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
