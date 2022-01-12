import React, { useState } from "react";
import Box from "@mui/material/Box";

import DisplayWeather from "../../components/DisplayWeather/DisplayWeather";
// import Search from "../../components/DisplayWeather/Search";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { fetchWeather } from "../../api/fetchWeather";
import { whichImageToDisplay } from "./helpers.js";

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

function checkIfDayTime(rise, set) {
  let currentTime = new Date().getTime();
  if (currentTime >= rise * 1000 && currentTime < set * 1000) {
    return true;
  } else {
    return false;
  }
}

const Weather = () => {
  const [query, setQuery] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      const dayTime = checkIfDayTime(data.sys.sunrise, data.sys.sunset);

      // console.log(JSON.stringify(data.main, null, 4));

      setQuery("");
      setWeatherComponent([
        ...weatherComponent,
        {
          isDay: dayTime,
          name: data.name,
          country: data.sys.country,
          weatherImage: whichImageToDisplay(data.weather[0].id, dayTime),
          temp: data.main.temp,
          feelsLike: data.main.feels_like,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          weatherDescription: data.weather[0].description,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          timezone: data.timezone,
          dt: data.dt,
        },
      ]);
    } else {
      console.log("Probably a onclick");
    }
  };

  const [weatherComponent, setWeatherComponent] = useState([]);

  return (
    <div>
      <Box sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
            pb: 3,
          }}
        >
          <Box>
            <Searching>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                // onKeyPress={(e) => {
                //   if (e.key === "Enter") {
                //     console.log("Enter key pressed");
                //     alert("Enter Pressed");
                //     // write your functionality here
                //   }
                // }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
              />
              {/* <IconButton
                type="submit"
                sx={{ color: "white" }}
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                // // onClick={search}
                // onClick={() => {
                //   search();
                // }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton> */}
            </Searching>
            <Typography>HowTo: [cityName], [cityName, countryCode]</Typography>
          </Box>
        </Box>

        {weatherComponent.map((item, i) => (
          <Box key={i}>
            <DisplayWeather city={item} />
            <Box sx={{ p: 1 }} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Weather;
