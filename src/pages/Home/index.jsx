// import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import "./index.css";

export default function Home() {
  const [city, setCity] = useState("");
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  // const [data, setData] = useState({});
  const [temp, setTemp] = useState("");
  const [humid, setHumid] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState("");

  const cities = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Padang",
    "Makassar",
    "Bandar Lampung",
  ];

  useEffect(() => {
    const getCoord = async () => {
      const result = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${
          city ? city : "Jakarta"
        }&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );
      const resultJson = await result.json();
      setLat(resultJson[0].lat);
      setLon(resultJson[0].lon);
      getForcast();
    };

    const getForcast = async () => {
      console.log(lat);
      const result = await fetch(
        `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const resultJson = await result.json();
      setTemp(resultJson.main.temp);
      setHumid(resultJson.main.humidity);
      setDesc(resultJson.weather[0].description);
      setIcon(
        `https://openweathermap.org/img/wn/${resultJson.weather[0].icon}.png`
      );
      setWind(resultJson.wind.speed);
      console.log(resultJson);
    };

    getCoord();
  }, [lat, lon, city]);

  const getCity = async (e) => {
    setCity(e.target.innerText);
  };
  // console.log(lat);

  // const getCoord = async () => {

  // };

  // console.log("temp " + temp);
  // console.log("Humid " + humid);
  // console.log("desc " + desc);
  console.log(icon);
  // console.log("wind " + wind);

  return (
    <>
      <div className="home-container">
        <div className="card">
          <div className="card-header">
            <h1>Weatheria</h1>
            <div className="dropdown">
              <button className="dropbtn">Choose City</button>
              <div className="dropdown-content">
                {cities.map((item) => (
                  <p key={item} onClick={getCity}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <h2>{city ? city : "Jakarta"}</h2>
            <div className="weather">
              <h3>{temp}&deg;C</h3>
              <p className="description">
                {desc} <img src={icon} alt="" />
              </p>
              <div className="other-info">
                <p>Humidity: {humid}</p>

                <p>Wind: {wind}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
