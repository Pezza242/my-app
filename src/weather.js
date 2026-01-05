import { useState } from "react";
import "./weather.css";
import Animation from "./animation";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(18);
  let [city, setCity] = useState("London");

  function Farenheit(event) {
    event.preventDefault();
    let farenheit = Math.round((temperature * 9) / 5 + 32);
    return setTemperature(farenheit);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    return city;
  }
  return (
    <div className="weather-box">
      <div className="date-and-time">
        <p className="date">
          Thursday 1st January 2026
          <span className="time"> 12:00</span>
        </p>
      </div>
      <div className="weather-info">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-bar"
            placeholder="Enter a city...."
            onChange={updateCity}
            required
          />
          <input type="submit" className="submit" />
        </form>
        <hr />
        <h1 className="city">{city}</h1>
        <h2 className="current-temperature">
          {temperature}
          <a className="Celsius" href="/">
            ºC
          </a>
          |{" "}
          <a className="Farenheit" href="/" onClick={Farenheit}>
            ºF
          </a>
        </h2>
        <div className="icon">
          <Animation />
          <p className="icon-description">Sunny</p>
        </div>
        <hr className="footer-line" />
        <footer>
          This project is an{" "}
          <a
            href="https://github.com/Pezza242/my-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{" "}
          made by{" "}
          <a
            href="https://github.com/Pezza242"
            target="_blank"
            rel="noreferrer"
          >
            Peri Williams-Yearwood
          </a>
        </footer>
      </div>
    </div>
  );
}
