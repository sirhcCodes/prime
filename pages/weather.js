import { useState, useEffect } from 'react';
import Loading from '../components/weather/loading';
import WeatherForm from '../components/weather/weather_form';
import WeatherInfo from '../components/weather/weather_info';

const Weather = () => {
  const [location, setLocation] = useState('02101');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    let data;
    try {
      let inputUrl = `https://api.weatherapi.com/v1/forecast.json?key=3d782fae1846454aba3171355210307&q=${location}&days=3&aqi=no&alerts=yes`;
      const response = await fetch(inputUrl);
      data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [location]);

  return (
    <>
      <div className='pt-24 md:pt-32 min-h-screen max-w-xl mx-auto animate-fade-in opacity-0 mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4'>
          Weather Forecast
        </h1>
        {loading ? <Loading /> : <WeatherInfo weather={weather} />}
        <WeatherForm setLocation={setLocation} />
      </div>
    </>
  );
};

export default Weather;
