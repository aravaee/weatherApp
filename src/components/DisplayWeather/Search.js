import React from "react";
import IconButton from "@mui/material/IconButton";

import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Searching = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "auto",
  },
}));

const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: 2,
        pb: 3,
      }}
    >
      <Box>
        <Searching aria-setsize={"medium"}>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                console.log("Enter key pressed");
                alert("Enter Pressed");
                // write your functionality here
              }
            }}
          />
          <IconButton type="submit" sx={{ color: "white" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Searching>
      </Box>
    </Box>
  );
};

export default Search;
