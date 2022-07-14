import {getWeatherBox} from "./components/getWeatherBox.js";

export const getEl = (id) => document.getElementById(id);
let city;

document.addEventListener("submit", function (e) {
  e.preventDefault();
  city = getEl("сity").value;
  getEl("weather").innerHTML = " ";
  fetchData();
});

const fetchData = async () => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=b1811b875ab04cb9a88131412221107&q=${city}&days=3&aqi=no&alerts=no`;
  const result = await fetch(`${url}`);
  const data = await result.json();

  getWeatherBox(data)
};



