import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Cordoba",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather ">
      <form className="search-form">
        <div class="input-group mb-3">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary button"
            type="submit"
            value="search"
          >
            <strong>Search</strong>
          </button>
        </div>
      </form>

      <div className="overview ">
        <h1 className="place text-left">{weatherData.city}</h1>
        <div className="row">
          <div className="col-6 current-temperature">
            <div className=" d-flex temperature">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
              <div className="d-flex">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 pb-3">
            <p>
              <div>Last updated: {weatherData.date}</div>
              <div>
                <strong>
                  {" "}
                  <em>{weatherData.description}</em>{" "}
                </strong>
              </div>
              <div>Humidity: {weatherData.humidity}%</div>
              <div>Wind: {weatherData.wind} km/h</div>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="row forecast mb-5">
          <div className="title text-center mb-5 ">
            Forecast for the next 5 days
          </div>
          <div className="col day">
            <div>Day 1</div>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span className="day-temperature">
              <strong>{weatherData.temperature}°</strong>{" "}
              {weatherData.temperature}°
            </span>
          </div>
          <div className="col day">
            <div>Day 2</div>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span className="day-temperature">
              <strong>{weatherData.temperature}°</strong>{" "}
              {weatherData.temperature}°
            </span>
          </div>
          <div className="col day">
            <div>Day 3</div>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span className="day-temperature">
              <strong>{weatherData.temperature}°</strong>{" "}
              {weatherData.temperature}°
            </span>
          </div>
          <div className="col day">
            <div>Day 4</div>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span className="day-temperature">
              <strong>{weatherData.temperature}°</strong>{" "}
              {weatherData.temperature}°
            </span>
          </div>
          <div className="col day">
            <div>Day 5</div>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span className="day-temperature">
              <strong>{weatherData.temperature}°</strong>{" "}
              {weatherData.temperature}°
            </span>
          </div>
        </div>
      </div>
      <footer className="text-center">
        This project was coded by{" "}
        <a href="https://github.com/">Stella Bullo </a>and is open-sourced on{" "}
        <a href="https://github.com/Stella5791/react-project-weather">GitHub</a>
        and hosted on{" "}
        <a href="https://app.netlify.com/sites/stellar-lolly-265b33/overview">
          {" "}
          Netlify.
        </a>
      </footer>
    </div>
  );
}
