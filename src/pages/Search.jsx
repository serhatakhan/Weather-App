import { useNavigate } from 'react-router-dom';
import AutoComplete from './../components/AutoComplete';


const Search = () => {
  const navigate = useNavigate()

  const handleLocationChange = (city) => {

    navigate(`/weather/${city}`)
  };

  return (
    <section>
      <div className="flex items-center justify-center gap-2 absolute w-full top-8">
        <img src="/Vector.png" alt="logo" className='w-9 h-6' />
        <p className="text-[#cccccd] text-xl font-semibold tracking-wide">
          iWeather
        </p>
      </div>

      <div className="flex flex-col items-center justify-center h-screen gap-1">
        <p className="text-[#fafafa] font-bold text-xl tracking-wide">
          Welcome to <span className="text-[#8fb2f5]">TypeWeather</span>
        </p>
        <p className="text-[#bfbfd4] text-sm font-normal">
          Choose a location to see the weather forecast
        </p>

        <AutoComplete handleLocationChange={handleLocationChange} />

      </div>
    </section>
  );
};

export default Search;
