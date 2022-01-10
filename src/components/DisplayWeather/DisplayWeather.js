import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import testDayImage from "../../asset/images/weatherIcons/sun/6.png";
import Settings from "./Settings";

const DisplayWeather = (props) => {
  const isDay = props.city.isDay;

  return (
    <div>
      <Box
        sx={{
          background: isDay
            ? "linear-gradient(to top, #4a8fe4, #5d99e7, #6ea4ea, #7fafec, #8fb9ef, #8fb9ef, #8fb9ef, #8fb9ef, #7fafec, #6ea4ea, #5d99e7, #4a8fe4)"
            : "linear-gradient(to top, #000000, #141213, #201d20, #2c282d, #36343c, #36343c, #36343c, #36343c, #2c282d, #201d20, #141213, #000000)",

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
              height: "150px",
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
              src={
                props.city.weatherImage ? props.city.weatherImage : testDayImage
              }
            />
          </Box>
          <Box textAlign={"center"}>
            <Typography
              sx={{ fontSize: "3rem", fontWeight: "bold", pl: 2 }}
              variant="h2"
            >
              {Math.round(props.city.temp)}

              <sup style={{ opacity: "0.5" }}>&deg;</sup>
            </Typography>
            <Typography variant="h5">
              {props.city.name} {props.city.country}
            </Typography>
            <Typography variant="body" sx={{ opacity: "0.5", py: 1 }}>
              {props.city.weatherDescription}
            </Typography>
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
                Highest
              </Typography>
            </Box>
            <Box textAlign={"right"}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                variant="caption"
              >
                {Math.round(props.city.maxTemp)}
                <sup style={{ opacity: "0.5" }}>&deg;</sup>
              </Typography>
              {/* <Typography variant="caption">km</Typography> */}
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Typography sx={{ opacity: "0.75", fontSize: "0.85rem" }}>
                Lowest
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                variant="caption"
              >
                {Math.round(props.city.minTemp)}
                <sup style={{ opacity: "0.5" }}>&deg;</sup>
              </Typography>
              {/* <Typography variant="caption">%</Typography> */}
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Typography sx={{ opacity: "0.75", fontSize: "0.85rem" }}>
                Feels Like
              </Typography>
            </Box>
            <Box textAlign={"left"}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                variant="caption"
              >
                {Math.round(props.city.feelsLike)}
                <sup style={{ opacity: "0.5" }}>&deg;</sup>
              </Typography>
              {/* <Typography variant="caption">%</Typography> */}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default DisplayWeather;
