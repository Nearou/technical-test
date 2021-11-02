import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { Ismovies } from "../interfaces/movie";

interface Props {
  movie: Ismovies
}

export function CardMovie(props: Props) {
  const { movie } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: "/detail",
      state: movie,
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
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
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
