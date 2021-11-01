import { Container } from "@mui/material";
import React, { useState } from "react";
import { Ismovies } from "../App";
import { InputSearch } from "../components/InputSearch";
import ButtonAppBar from "../components/NavBar";
import { Results } from "../components/Results";

const Home = () => {
  const [movies, setMovies] = useState<Ismovies[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div>
      <ButtonAppBar title={"Search movie by title"} />
      <Container>
        <InputSearch updateMovies={setMovies} updateLoading={setLoading} updateError={setError} />
        <Results movies={movies} loading={loading} error={error} />
      </Container>
    </div>
  );
};

export default Home;
