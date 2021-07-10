const WeatherInfo = ({ weather }) => {
  return (
    <div className='w-11/12 text-center px-3 max-w-screen-md bg-gray-50 mt-8 m-auto rounded shadow-md pt-8 opacity-0 animate-fade-in'>
      <h3 className='text-xl md:text-2xl'>
        In <span className='font-bold'>{weather.location.name}</span> it's
        currently {weather.current.temp_f}°F
        {weather.current.temp_f !== weather.current.feelslike_f &&
          `, feels like ${weather.current.feelslike_f}`}
        .
      </h3>
      <img
        src={weather.current.condition.icon}
        alt={`${weather.current.condition.text} icon`}
        className='mx-auto'
      />
      <p className='mb-4'>{weather.current.condition.text}</p>
      <p className='text-xl font-light mb-4'>3-day forecast:</p>
      {weather.forecast.forecastday.map((x) => (
        <div
          key={x.date}
          className='grid grid-cols-4 gap-2 md:gap-8 justify-items-center items-center text-center w-4/5 m-auto m-auto border-b-2'
        >
          <p className='font-bold'>{x.date.slice(5, 10)}</p>
          <p className='text-blue-800 font-bold'>
            Low:
            <br />
            {x.day.mintemp_f}°F
          </p>
          <p className='text-red-800 font-bold'>
            High:
            <br />
            {x.day.maxtemp_f}°F
          </p>
          <img
            src={x.day.condition.icon}
            alt={`${x.day.condition.text} icon`}
          />
        </div>
      ))}
      <p className='mt-8 pb-2 font-light text-sm'>Powered by WeatherAPI.com</p>{' '}
    </div>
  );
};

export default WeatherInfo;
