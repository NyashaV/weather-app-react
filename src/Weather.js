import React from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function Weather(props) {
  function showTemperature(response) {
    alert(`It is ${response.data.main.temp}°C in ${response.data.name}`);
  }

  let units = "metric";
  let apiKey = "b7f6cc82b2a17135c04c17b474d0ada6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  return (
    <Oval
      height={80}
      width={80}
      color="#f4c2c2 "
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="white"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
