import clearDay from "../../asset/images/weatherIcons/sun/26.png";
import clearNight from "../../asset/images/weatherIcons/moon/10.png";

import cloudDay from "../../asset/images/weatherIcons/sun/27.png";
import cloudNight from "../../asset/images/weatherIcons/moon/31.png";

import atmoshphereDay from "../../asset/images/weatherIcons/sun/6.png";
import atmosphereNight from "../../asset/images/weatherIcons/moon/2.2.png";

import snowDay from "../../asset/images/weatherIcons/snow/36.png";
import snowNight from "../../asset/images/weatherIcons/moon/40.png";

import rainDay from "../../asset/images/weatherIcons/sun/13.png";
import rainNight from "../../asset/images/weatherIcons/moon/3.png";

import drizzleDay from "../../asset/images/weatherIcons/sun/8.png";
import drizzleNight from "../../asset/images/weatherIcons/moon/1.png";

import thunderDay from "../../asset/images/weatherIcons/sun/28.png";
import thunderNight from "../../asset/images/weatherIcons/moon/20.png";

import defaultDay from "../../asset/images/weatherIcons/sun/27.png";
import defaultNight from "../../asset/images/weatherIcons/moon/15.png";

export function whichImageToDisplay(weatherID, day) {
  const id = weatherID.toString();

  if (id.length >= 3) {
    var firstChar = id.charAt(0);

    // Group 2xx: Thunderstorm
    if (firstChar === "2") {
      console.log("Thunder");
      if (day) {
        return thunderDay;
      } else {
        return thunderNight;
      }
    }
    // Group 3xx: Drizzle
    else if (firstChar === "3") {
      console.log("Drizzle");
      if (day) {
        return drizzleDay;
      } else {
        return drizzleNight;
      }
    }
    // Group 5xx: Rain
    else if (firstChar === "5") {
      console.log("Rain");
      if (day) {
        return rainDay;
      } else {
        return rainNight;
      }
    }
    // Group 6xx: Snow
    else if (firstChar === "6") {
      console.log("Snow");
      if (day) {
        return snowDay;
      } else {
        return snowNight;
      }
    }
    // Group 7xx: Atmosphere
    else if (firstChar === "7") {
      console.log("Atmosphere");
      if (day) {
        return atmoshphereDay;
      } else {
        return atmosphereNight;
      }
    }
    // Group 800: Clear
    else if (id === "800") {
      if (day) {
        console.log("Clear Day");
        return clearDay;
      } else {
        console.log("Clear Night");
        return clearNight;
      }
    }
    // Group 80x: Clouds
    else if (firstChar === "8") {
      console.log("Clouds");
      if (day) {
        return cloudDay;
      } else {
        return cloudNight;
      }
    } else {
      console.log("This condition does not exist");
      if (day) {
        return defaultDay;
      } else {
        return defaultNight;
      }
    }
  } else {
    console.log("INVALID");
    if (day) {
      return defaultDay;
    } else {
      return defaultNight;
    }
  }
}
