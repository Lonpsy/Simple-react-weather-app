import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import axios from "axios";

export default function App() {
  const [City, setCity] = useState("");
  const [Temperature, setTemperature] = useState("");
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "da7a1b3d460dbtbf7b304o1bb99604f1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${City}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="App">
      <h1 className="headerTitle">My first React app</h1>
      <div className="formArea">
        <form onSubmit={handleSubmit}>
          <input
            className="inputArea"
            type="text"
            placeholder="Enter your city"
            onChange={updateCity}
          ></input>
          <input
            className="searchInputArea"
            type="submit"
            value="Search"
          ></input>
        </form>

        <h2 className="displayReport">
          The weather in {City} is {Temperature}°C
        </h2>
      </div>
    </div>
  );
}
