import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const FetchData = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [temprature, setTemprature] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windspeed, setWindspeed] = useState("");

  // name handling
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setName(e.target.value);
    // console.log(name);
    // setName("");
    getdata();
  };

  async function getdata() {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=c077a917adf0232759b8f903ddb46e2d`
    );

    const result = await data.json();
    // setTemprature(result.main.temp);
    console.log(result);
    setCity(result.name);
    setTemprature((result.main.temp - 273.15).toFixed(2));
    setHumidity(result.main.humidity);
    setWindspeed((result.wind.speed * 3.6).toFixed(2));
  }
  // getdata();
  useEffect(() => {
    getdata();
    // setCity(result);
    // setTemprature(result.main.temp);
  }, []);

  return (
    <div>
      <div class="ml-96 mt-20 h-96 w-96 border border-indigo-600 bg-gradient-to-b from-cyan-200 to-cyan-400 rounded-3xl">
        <form onSubmit={submitHandler}>
          <label htmlFor="name">
            <input
              class="mt-7 border-2 border-blue-700 rounded-2xl pl-3 ml-20"
              type="text"
              name="name"
              value={name}
              onChange={nameHandler}
              placeholder="Enter Name"
            />
          </label>
          <br />
          <button class="h-8 w-20 mt-4 ml-32 border-2 border-blue-700 rounded-full hover:text-white hover:bg-blue-700">
            Search
          </button>
          {/* {console.log(name)} */}
        </form>
        <div class="text-5xl text-slate-500 ml-36 mt-6">
          <FontAwesomeIcon icon={faCloudSunRain} />
        </div>
        <div class="h-14 w-32 mt-6 ml-28  px-4 py-2 text-3xl  text-yellow-50">
          {temprature + "°C"}
        </div>
        <div class="h-14 w-32 mt-1 ml-28  px-4 py-2 text-3xl  text-yellow-50">
          {city}
        </div>
        <div class="h-16 w-32 border-red-700  text-xl pl-3 pt-2 text-yellow-50">
          <span class="text-4xl ">
            <FontAwesomeIcon icon={faWater} />
          </span>
          <span class="ml-3 -pt-6">{`${humidity}%`}</span>
        </div>
        <div class="h-16 w-32 border-red-700  ml-64 -mt-16 text-yellow-50">
          <span class="text-4xl pt-3 ">
            <FontAwesomeIcon icon={faWind} />
          </span>
          <span className="ml-2">{`${windspeed} km/h`}</span>
        </div>
      </div>
    </div>
  );
};

export default FetchData;
