import { useState, useEffect } from 'react';

const Weather = () => {
  const [location, setLocation] = useState('02101');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    let inputUrl = `https://api.weatherapi.com/v1/forecast.json?key=3d782fae1846454aba3171355210307&q=${location}&days=3&aqi=no&alerts=yes`;
    const response = await fetch(inputUrl);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  }, [location]);

  function submitHandler(e) {
    e.preventDefault();
    setLocation(e.target.location.value.split(' ').join(''));
  }

  console.log(weather);

  return (
    <>
      <div className='h-96 pt-32 min-h-screen max-w-2xl mx-auto animate-fade-in opacity-0'>
        <h1 className='text-2xl font-bold text-center mb-4'>
          Weather Forecast
        </h1>
        <div>
          <form
            onSubmit={submitHandler}
            className='w-11/12 md:max-w-sm mx-auto text-center space-y-4'
          >
            <p className='flex flex-col space-y-2'>
              <label htmlFor='location' className='mr-1'>
                The Zip Code of the city you would like to check.
              </label>
              <input
                required
                type='text'
                id='location'
                placeholder='Zip Code'
                className='bg-gray-50 border rounded-sm p-1 mx-auto text-center font-bold '
              />
            </p>
            <button className='block mx-auto h-10 w-32 rounded-full text-red-800 font-bold border-red-800 border-2 bg-white hover:bg-red-800 hover:text-white'>
              Submit
            </button>
          </form>
        </div>
        {loading ? (
          <div>...loading</div>
        ) : (
          <div>
            In {weather.location.name} it's {weather.current.temp_f}°F.
            <p>3-day forecast:</p>
            {weather.forecast.forecastday.map((x) => (
              <div key={x.date} className='flex space-x-4'>
                <p>{x.date.slice(5, 10)}</p>
                <p>Low: {x.day.mintemp_f}</p>
                <p>High: {x.day.maxtemp_f}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
