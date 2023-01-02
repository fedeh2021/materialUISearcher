import React, { useState } from "react";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {
  const { setInputUser, notFound } = props;

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = () => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };
  return (
    <>
      <Stack direction="row" sx={{ marginTop: "30px", width: "80%" }}>
        <TextField
          value={valueInput}
          onChange={onSearchValueChange}
          autoComplete="off"
          sx={{ width: "90%", margin: "0 auto" }}
          variant="outlined"
          size="small"
          label="GitHub User"
          id="outlined-basic"
          placeholder="Buscar usuario de GitHub"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Stack>
      <Typography color="red">
        {notFound ? "Error: el usuario no existe" : ""}
      </Typography>
    </>
  );
};

export default Searcher;
