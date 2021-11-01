import {
    Card,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
import { Ismovies } from "../App";
  
  interface Props {
    movie: Ismovies
  }

  export function DetailCard(props : Props) {
  const { movie } = props
    return (
      <Card>
        <CardMedia
          component="img"
          height="800"
          image={movie.Poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {movie.Type}
          </Typography>
          <Typography gutterBottom variant="h5" color="text.secondary">
            Year: {movie.Year}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  