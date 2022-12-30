import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searcher = (props) => {
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = () => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };
  return (
    <Stack direction="row" sx={{ marginTop: "30px", width: "80%" }}>
      <TextField
      className="textField"
        value={valueInput}
        onChange={onSearchValueChange}
        autoComplete="off"
        sx={{ width: "90%", margin: "0 auto" }}
        variant="outlined"
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
  );
};

export default Searcher;
