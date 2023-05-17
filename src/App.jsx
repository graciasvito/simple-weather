import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
// import React, { useEffect, useState } from "react";
// // import Weather from "./components/weather";
// export default function App() {
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });

//       await fetch(
//         `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.WEATHER_API_KEY}`
//       )
//         .then((res) => res.json())
//         .then((result) => {
//           setData(result);
//           console.log(result);
//         });
//     };
//     fetchData();
//   }, [lat, long]);

//   return <div className="App"></div>;
// }
