import { useState, useEffect } from 'react';

// const defaultEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=3d782fae1846454aba3171355210307&q=Boston&days=7&aqi=no&alerts=yes`;
// export const getServerSideProps = async () => {
//   const res = await fetch(defaultEndpoint);
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// };

// const Weather = ({ data }) => {
const Weather = () => {
  const [location, setLocation] = useState('02101');
  const [weather, setWeather] = useState({});

  let inputUrl = `https://api.weatherapi.com/v1/forecast.json?key=3d782fae1846454aba3171355210307&q=${location}&days=7&aqi=no&alerts=yes`;

  async function fetchWeather() {
    const response = await fetch(inputUrl);
    const data = await response.json();
    setWeather(data);
  }

  function submitHandler(e) {
    e.preventDefault();
    setLocation(e.target.location.value);
  }
  useEffect(() => {
    fetchWeather();
  }, [location]);

  return (
    <>
      <div className='h-96 pt-24 min-h-screen max-w-2xl m-auto'>
        {/* <h1 className='pt-24 text-5xl text-center'>
          In {weather.location.name} it's currently {weather.current.temp_f}
          °F and {weather.current.condition.text}
        </h1> */}
        <p className='text-xl font-bold'>Weather forecast coming soon...</p>
        {/* {forecast.map((x) => (
        <div key={x.date} className='flex space-x-4'>
          <p>{x.date.slice(5, 10)}</p>
          <p>Low: {x.day.mintemp_f}</p>
          <p>High: {x.day.maxtemp_f}</p>
        </div>
      ))} */}
        <div>
          {/* <form onSubmit={submitHandler}>
            <p>
              <label htmlFor='location' className='mr-1'>
                Location:
              </label>
              <input
                type='text'
                id='location'
                placeholder='City name or zipcode'
                className='bg-gray-50 border rounded-md p-1'
                // onChange={(e) => setLocation(e.target.value.trim())}
              />
            </p>
            <button>Submit</button>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default Weather;
