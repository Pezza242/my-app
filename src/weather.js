import "./weather.css";
import Animation from "./animation";

export default function Weather() {
  return (
    <div className="weather">
      <form className="form">
        <input
          type="search"
          className="search-bar"
          placeholder="Enter a city...."
          required
        />
        <input type="submit" className="submit" />
      </form>
      <hr />
      <h1 className="city">London</h1>
      <h2 className="current-temperature">18ºC</h2>
      <div className="icon">
        <Animation />
      </div>
    </div>
  );
}
