const WeatherForm = ({ setLocation }) => {
  function submitHandler(e) {
    e.preventDefault();
    setLocation(e.target.location.value);
  }
  return (
    <form
      onSubmit={submitHandler}
      className='w-full md:max-w-sm mx-auto text-center space-y-4 mt-8'
    >
      <p className='flex flex-col'>
        <label htmlFor='location' className='font-light text-xs mb-1'>
          Check out a different location?
        </label>
        <input
          required
          type='text'
          id='location'
          placeholder='Zip Code'
          className='bg-gray-50 border rounded-sm text-gray-600 p-1 mx-auto text-center font-bold w-32 focus:ring-1 focus:ring-gray-600 focus:outline-none'
        />
      </p>
      <button className='block mx-auto h-10 w-32 rounded-full text-red-800 font-bold border-red-800 border-2 bg-white hover:bg-red-800 hover:text-white'>
        Submit
      </button>
    </form>
  );
};

export default WeatherForm;
