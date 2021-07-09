const WeatherInfo = ({ weather }) => {
  return (
    <div className='text-center'>
      <h3 className='text-2xl'>
        In <span className='font-bold'>{weather.location.name}</span> it's{' '}
        <span className='underline'>{weather.current.temp_f}°F</span>.
      </h3>
      <p className='text-xl font-light underline'>3-day forecast:</p>
      {weather.forecast.forecastday.map((x) => (
        <div key={x.date} className='flex justify-center space-x-8 text-center'>
          <p className='font-bold'>{x.date.slice(5, 10)}</p>
          <p className='text-blue-800 font-bold'>Low: {x.day.mintemp_f}</p>
          <p className='text-red-800 font-bold'>High: {x.day.maxtemp_f}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
