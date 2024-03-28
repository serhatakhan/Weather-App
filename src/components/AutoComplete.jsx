import axios from "axios";
import { useState } from "react";
import API_URL from "../constants";
import Loader from "./Loader";

const AutoComplete = ({ handleLocationChange }) => {
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCitySuggestions = async (inputValue) => {
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=2&appid=${API_URL}`
      )
      .then((res) => {
        const cities = res.data.map((city) => ({
          name: city.name,
          country: city.country,
        }));
        setCitySuggestions(cities);
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setUserInput(inputValue);
    fetchCitySuggestions(inputValue);
  };

  const handleSuggestionClick = (city) => {
    const cityName = `${city.name}, ${city.country}`;

    // Seçilen şehri input alanına yaz
    setUserInput(cityName);

    // Yükleniyor simgesini göster
    setLoading(true);

    // Önerileri sıfırla
    setCitySuggestions([]);

    // Şehrin adını 1 saniyeliğine inputta göster
    setTimeout(() => {
      // İlgili şehrin hava durumu sayfasını aç
      handleLocationChange(cityName);

      // Yükleniyor simgesini gizle
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="autocomplete relative mb-20">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Search location"
        className="autocomplete-input relative bg-[#1e1e29] border-none outline-none mt-6 p-4 placeholder:text-[#7f7f98] rounded-lg w-[312px] text-[#fafafa]"
      />
      <div className="absolute top-10 right-5 z-10">{loading && <Loader />}</div>
      <ul className="suggestions-list mt-2 absolute">
        {citySuggestions.map((city, i) => (
          <li
            key={i}
            className="suggestion-item border-b-2 border-[#1E1E29] outline-none py-3 px-4 w-[312px] text-[#fafafa] cursor-pointer"
            onClick={() => handleSuggestionClick(city)}
          >
            {`${city.name}, ${city.country}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
