import { TextField, Button } from "@mui/material";
import React, { Dispatch, SetStateAction, useCallback, useRef } from "react";
import CSS from "csstype";
import { apiFetch } from "../utils/api";
import { Ismovies } from "../interfaces/movie";


interface Props {
  updateMovies: Dispatch<SetStateAction<Ismovies[]>>
  updateLoading: Dispatch<SetStateAction<boolean>>
  updateError: Dispatch<SetStateAction<string>>
}

export const InputSearch = (props : Props) => {
  const { updateMovies, updateLoading, updateError } = props;
  const input = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = useCallback(async () => {
    const search = input.current!.value;
    updateLoading(true);
    const data = await apiFetch("/movies/search/" + search, {});
    if (data.Response === "False") {
      updateError(data.Error);
      updateMovies(data.Search);
    } else {
     updateMovies(data.Search);
    }
    updateLoading(false);
  }, [updateLoading, updateError, updateMovies]);


  const divStyle: CSS.Properties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "150px",
  };

  return (
    <div style={divStyle}>
      <TextField
        id="standard-basic"
        label="Search Movie Title"
        variant="standard"
        placeholder="OSS 117"
        inputProps={{ style: { fontSize: 40 } }} // font size of input text
        InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
        inputRef={input}
      />
      <Button id ="test" variant="contained" onClick={handleButtonClick}>
        Search Movie
      </Button>
    </div>
  );
};
