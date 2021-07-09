import { useState, useEffect } from 'react';
import Loading from '../components/loading';
import WeatherForm from '../components/weather_form';
import WeatherInfo from '../components/weather_info';

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

  return (
    <>
      <div className='h-96 pt-32 min-h-screen max-w-2xl mx-auto animate-fade-in opacity-0'>
        <h1 className='text-3xl font-bold text-center mb-4'>
          Weather Forecast
        </h1>
        <div>
          <WeatherForm setLocation={setLocation} />
        </div>
        {loading ? <Loading /> : <WeatherInfo weather={weather} />}
      </div>
    </>
  );
};

export default Weather;
