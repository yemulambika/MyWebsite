import React from "react";

import responsive_ui from "../assets/Weather-Dashboard_photos/responsive_ui.png";
import weather_about from "../assets/Weather-Dashboard_photos/weather_about.png";
import weather_home from "../assets/Weather-Dashboard_photos/weather_home.png";
import weather_page from "../assets/Weather-Dashboard_photos/weather_page.png";
import "./WeatherImages.css"

function WeatherImages() {
  return (
    <div className="image-grid">
      <img src={weather_home} alt="Home Page" />
      <img src={weather_page} alt="Weather Page" />
      <img src={weather_about} alt="About Page" />
      <img src={responsive_ui} alt="Responsive UI" />
    </div>
  );
}

export default WeatherImages;