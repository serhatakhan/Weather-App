import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherDetail from "../components/WeatherDetail";
import API_URL from "../constants";
import {
  convertCelcius,
  formatDate,
  getWeatherIcon,
  onlyDate,
  updateBackgroundImage,
} from "../utils";

const Weather = () => {
  // parametreden şehri al
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // 5 günlük tahmin verileri

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_URL}`
        );
        setWeatherData(res.data);
      } catch (err) {
        console.error("Error fetching weather data:", err);
      }
    };

    // sonraki 5 günlük hava durumu verileri
    const fetchForecastData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_URL}`
        );
        setForecastData(res.data);
      } catch (err) {
        console.error("Error fetching forecast data:", err);
      }
    };

    fetchWeatherData();
    fetchForecastData();
  }, [city]);

  console.log(forecastData);

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      {/* image card */}
      <div className="flex items-center justify-center relative rounded-xl bg-[#16161f] p-2">
        <img
          src={updateBackgroundImage(
            weatherData?.weather[0]?.main,
            weatherData?.dt
          )}
          className="h-[304px] w-[359px] rounded-xl"
        />

        <div className="absolute flex gap-2 top-6 left-6 text-[#fafafa] text-xl font-bold">
          <p>{weatherData?.name + ","}</p>
          <p>{weatherData?.sys.country}</p>
        </div>

        <div className="absolute flex gap-2 top-14 left-6 text-[#fafafa] text-sm">
          <p>{formatDate(weatherData?.dt)}</p>
        </div>

        {/* hava durumu ikonu */}
        <div className="absolute top-40 left-52 w-40 h-40 flex justify-center items-center">
          <img
            src={getWeatherIcon(weatherData?.weather[0]?.icon)}
            alt="weather-icon"
            className="w-40 h-40"
          />
        </div>

        <div className="absolute flex flex-col bottom-8 left-6 text-[#fff]">
          <p className="mb-2 text-5xl font-extrabold">
            {convertCelcius(weatherData?.main?.temp) + "°c"}
          </p>
          <div className="text-md text-[#fafafa] font-bold flex gap-1 mb-[2px]">
            <p>{convertCelcius(weatherData?.main?.temp_max) + "°c"}</p>
            <span>{"/"}</span>
            <p>{convertCelcius(weatherData?.main?.temp_min) + "°c"}</p>
          </div>
          <p className="text-sm text-[#fafafa] font-normal capitalize">
            {weatherData?.weather[0]?.description}
          </p>
        </div>
      </div>

      {/* diğer hava durumu bilgileri */}
      <WeatherDetail weatherData={weatherData} />

      {/* 5 günlük hava durumu alanı */}
      <div className="bg-[#16161f] px-3 py-4 w-[375px] rounded-xl mt-2 mb-2">
        <ul className="px-3">
          <li className="flex gap-3">

            {forecastData?.list?.reduce((acc, item, index) => {
              // Her 8 nesnede yeni bir günün hava durumu verisini al
              if (index % 8 === 0) {
                acc.push(
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between rounded-lg mb-1 gap-1"
                  >
                    <p className="text-[#bfbfd4] text-sm font-bold">{onlyDate(item.dt)}</p>
                    <img
                      src={getWeatherIcon(item.weather[0].icon)}
                      alt="weather-icon"
                      className="w-14 h-13 "
                    />
                    <p className="text-[#fafafa] text-sm font-bold">{convertCelcius(item.main.temp) + "°c"}</p>
                    <p className="text-[#7f7f98] text-sm font-semibold">{convertCelcius(item.main.temp_min) + "°c"}</p>
                  </div>
                );
              }
              return acc;
            }, [])}

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Weather;
