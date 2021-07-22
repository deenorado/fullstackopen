import axios from "axios";
import React, { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_API_KEY;

const Country = ({ filtered, selectedCountry, setSelectedCountry }) => {
  const [weatherData, setWeatherData] = useState("");

  const handleClickDetails = async (country) => {
    await setSelectedCountry(country.name);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${selectedCountry}&units=metric&appid=${api_key}`
        )
        .then((result) => {
          setWeatherData(result.data);
        });
    };

    getData();
  }, [selectedCountry]);

  return (
    <>
      {filtered.length > 1 &&
        filtered.length <= 10 &&
        filtered.map((country) => (
          <li key={country.name}>
            {country.name}{" "}
            <button onClick={() => handleClickDetails(country)}>show</button>
            {selectedCountry === country.name && (
              <>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <h4>languages</h4>
                <ul>
                  {country.languages.map((language) => (
                    <li key={language.name}>{language.name}</li>
                  ))}
                </ul>
                <img src={country.flag} alt="Country flag" />
                <h3>Weather in {country.name}</h3>
                <p>
                  <strong>Temperature:</strong> {weatherData.main.temp} °C
                </p>
                <p>
                  <strong>Wind:</strong> {weatherData.wind.speed} km/h
                </p>
              </>
            )}
          </li>
        ))}
      {filtered.length === 1 &&
        filtered.map((country) => {
          return (
            <>
              <h1>{country.name}</h1>
              <p>capital {country.capital}</p>
              <h4>languages</h4>
              <ul>
                {country.languages.map((language) => (
                  <li key={language.name}>{language.name}</li>
                ))}
              </ul>
              <img src={country.flag} alt="Country flag" />
              <h3>Weather in {country.name}</h3>
              <p>
                <strong>Temperature:</strong> {weatherData.main.temp} °C
              </p>
              <p>
                <strong>Wind:</strong> {weatherData.wind.speed} km/h
              </p>
            </>
          );
        })}
    </>
  );
};

export default Country;
