import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { fetchWeather } from "../../api/fetchWeather";
import testDayImage from "../../asset/images/weatherIcons/sun/6.png";
import testNightImage from "../../asset/images/weatherIcons/moon/19.png";
import Settings from "./Settings";

const DisplayWeather = (props) => {
  const isDay = props.day;
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
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

      <Box
        sx={{
          //   backgroundColor: "",
          //   backgroundColor: "rgb(38,40,48)",
          background: isDay
            ? "linear-gradient(to top, #4a8fe4, #5d99e7, #6ea4ea, #7fafec, #8fb9ef, #8fb9ef, #8fb9ef, #8fb9ef, #7fafec, #6ea4ea, #5d99e7, #4a8fe4)"
            : "linear-gradient(to top, #000000, #141213, #201d20, #2c282d, #36343c, #36343c, #36343c, #36343c, #2c282d, #201d20, #141213, #000000)",

          // 38	40	48
          borderRadius: "40px",
          p: 1,
          maxWidth: "450px",
          margin: "0 auto",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 2, pb: 4 }}
        >
          <Box>
            <Typography>{isDay ? "Day" : "Night"}</Typography>
          </Box>
          <Box>
            <IconButton sx={{ color: "white" }}>
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Box>
            <Settings />
          </Box>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: "200px",
              height: "200px",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                display: "block",
                margin: "0 auto",
              }}
              alt="CHANGE THIS LATER"
              src={isDay ? testDayImage : testNightImage}
            />
          </Box>
          <Box textAlign={"center"}>
            <Typography
              sx={{ fontSize: "3.5rem", fontWeight: "bold" }}
              variant="h2"
            >
              32<sup style={{ opacity: "0.5" }}>&deg;</sup>
            </Typography>
            <Typography variant="h5">London</Typography>
          </Box>
        </Stack>
        <Box sx={{ py: 1 }} />

        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 2 }}
        >
          <Stack>
            <Box>
              <Typography sx={{ opacity: "0.75", fontSize: "0.85rem" }}>
                Wind Now
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                variant="caption"
              >
                15
              </Typography>
              <Typography variant="caption">km</Typography>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Typography sx={{ opacity: "0.75", fontSize: "0.85rem" }}>
                Humidity
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                variant="caption"
              >
                32
              </Typography>
              <Typography variant="caption">%</Typography>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Typography sx={{ opacity: "0.75", fontSize: "0.85rem" }}>
                Precipitation
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                variant="caption"
              >
                87
              </Typography>
              <Typography variant="caption">%</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default DisplayWeather;
