import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    margin: "10px"
  },
  cover: {
    width: "auto",
    height: 550
  }
}));

export default function MovieDetails(props) {
  const { detail, navigate } = { ...props };

  if (navigate) {
    props.history.push("/home");
  }
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            className={classes.cover}
            image={detail["Poster"]}
            title={detail["Title"]}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h3" variant="h3">
                {detail["Title"]} | {detail["Year"]}
              </Typography>
              <Typography component="h6" variant="h6">
                {detail["Genre"]} | {detail["Runtime"]}
              </Typography>
              <Box display="flex" alignItems="center">
                <Rating
                  name="read-only"
                  value={detail["imdbRating"]}
                  precision={0.1}
                  max={10}
                  size="small"
                  readOnly
                />
                <Typography variant="h6" component="h6">
                  | {detail["imdbRating"]}
                </Typography>
              </Box>
              <Typography component="h6" variant="h6">
                Directed by: {detail["Director"]}
              </Typography>
              <Typography component="h6" variant="h6">
                Written by: {detail["Writer"]}
              </Typography>
              <Typography component="h6" variant="h6">
                Cast: {detail["Actors"]}
              </Typography>
              <Typography component="h6" variant="h6">
                Production: {detail["Production"]}
              </Typography>
              <Typography component="h6" variant="h6">
                Language: {detail["Language"]}
              </Typography>
              <Typography component="h6" variant="h6">
                Country: {detail["Country"]}
              </Typography>
              <Typography component="h6" variant="h6">
                Released: {detail["Released"]}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {detail["Plot"]}
              </Typography>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
