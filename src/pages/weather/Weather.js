import React, { useState } from "react";
import Box from "@mui/material/Box";

import DisplayWeather from "../../components/DisplayWeather/DisplayWeather";
// import Search from "../../components/DisplayWeather/Search";
import IconButton from "@mui/material/IconButton";

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

// console.log(whichImageToDisplay("800", false));

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
      // setWeather(data);

      // console.log(data.weather[0].id);
      // console.log(data.weather.weather[1].id);
      // console.log(JSON.stringify(data.weather, null, 4));
      const dayTime = checkIfDayTime(data.sys.sunrise, data.sys.sunset);

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
        },
      ]);
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
              <IconButton
                type="submit"
                sx={{ color: "white" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Searching>
          </Box>
        </Box>

        {/* {weather.main && (
          <div>
            <h2>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div>
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )} */}

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
