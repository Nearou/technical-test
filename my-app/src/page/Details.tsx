import React from "react";
import NavBar from "../components/NavBar";
import { DetailCard } from "../components/DetailCard";
import { Container } from "@mui/material";
import { Ismovies } from "../interfaces/movie";


const Details = (props: { location: { state: Ismovies } }) => {
  return (
    <div>
      <NavBar title={'Film Details'}/>
      <Container maxWidth="sm">
        <DetailCard movie={props.location.state} />
      </Container>
    </div>
  );
};

export default Details;
