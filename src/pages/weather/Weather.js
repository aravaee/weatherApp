import React from "react";
import Box from "@mui/material/Box";
import DisplayWeather from "../../components/DisplayWeather/DisplayWeather";
import Search from "../../components/DisplayWeather/Search";
const Weather = () => {
  return (
    <div>
      <Box sx={{ p: 1 }}>
        <Box sx={{ p: 1 }}></Box>
        <Search />
        <DisplayWeather day={true} />
        <Box sx={{ p: 1 }}></Box>
        <DisplayWeather day={false} />
        <Box sx={{ p: 1 }}></Box>
        <DisplayWeather day={true} />
        <Box sx={{ p: 1 }}></Box>
        <DisplayWeather day={false} />
      </Box>
    </div>
  );
};

export default Weather;
