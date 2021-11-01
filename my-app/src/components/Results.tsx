import { Grid } from "@mui/material";
import { Ismovies } from "../App";
import { CardMovie } from "./Card";

interface Props {
  movies: Ismovies[], loading: Boolean, error: string
}
  export function Results(props: Props) {
  
    return (
        <Grid container spacing={2} direction="row">
        {props.loading ? <p>Loading</p> : null}
        {props.movies && props.movies.length && !props.loading ? (
          props.movies.map((movie: Ismovies) => (
            <Grid item xs={12} sm={6} md={3} key={props.movies.indexOf(movie)}>
              <CardMovie movie={movie} />
            </Grid>
          ))
        ) : (
          <p>{props.error}</p>
        )}
      </Grid>
    )
  }