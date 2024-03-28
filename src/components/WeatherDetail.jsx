import { PiThermometerSimpleLight } from "react-icons/pi";
import { PiCloudRain } from "react-icons/pi"
import { PiWindLight } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { convertCelcius } from "../utils";

const WeatherDetail = ( {weatherData} ) => {

  return (
    <div className="bg-[#16161f] px-2 py-1 w-[375px] rounded-xl mt-2">
    <ul className="px-3">
      <li className="flex items-center justify-between border-b py-3 border-[#1c1c27]">
        <div className="flex gap-2 items-center">
          <PiThermometerSimpleLight size={24} style={{color: "#3b3b54"}} />
          <p className="text-[#bfbfd4] text-sm font-bold tracking-wide">Thermal sensation</p>
        </div>
        <span className="text-[#fafafa] font-md font-semibold">{convertCelcius(weatherData?.main?.feels_like) + "°c"}</span>
      </li>

      <li className="flex items-center justify-between border-b py-3 border-[#1c1c27]">
        <div className="flex gap-3 items-center">
          <PiCloudRain size={24} style={{color: "#3b3b54"}} />
          <p className="text-[#bfbfd4] text-sm font-bold tracking-wide">Probability of rain</p>
        </div>
        <span className="text-[#fafafa] font-md font-semibold">{weatherData?.rain ? weatherData?.rain["1h"] +"%" : "0%"}</span>
      </li>

      <li className="flex items-center justify-between border-b py-3 border-[#1c1c27]">
        <div className="flex gap-3 items-center">
          <PiWindLight size={24} style={{color: "#3b3b54"}} />
          <p className="text-[#bfbfd4] text-sm font-bold tracking-wide">Wind speed</p>
        </div>
        <span className="text-[#fafafa] font-md font-semibold">{weatherData?.wind?.speed + " km/h"}</span>
      </li>

      <li className="flex items-center justify-between border-b py-3 border-[#1c1c27]">
        <div className="flex gap-3 items-center">
          <IoWaterOutline size={24} style={{color: "#3b3b54"}} />
          <p className="text-[#bfbfd4] text-sm font-bold tracking-wide">Air humidity</p>
        </div>
        <span className="text-[#fafafa] font-md font-semibold">{weatherData?.main?.humidity + "%"}</span>
      </li>

      <li className="flex items-center justify-between py-3">
        <div className="flex gap-3 items-center">
          <GoSun size={24} style={{color: "#3b3b54"}} />
          <p className="text-[#bfbfd4] text-sm font-bold tracking-wide">UV Index</p>
        </div>
        <span className="text-[#fafafa] font-md font-semibold">{weatherData?.wind.deg}</span>
      </li>
    </ul>
  </div>
  )
}

export default WeatherDetail