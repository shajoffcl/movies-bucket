import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    minHeight: 500
  }
});

export default function MovieCard({ poster, title, year }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={poster} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title} ({year})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
