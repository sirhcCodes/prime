const WeatherForm = ({ setLocation }) => {
  function submitHandler(e) {
    e.preventDefault();
    setLocation(e.target.location.value.split(' ').join(''));
  }
  return (
    <form
      onSubmit={submitHandler}
      className='w-11/12 md:max-w-sm mx-auto text-center space-y-4 mb-8'
    >
      <p className='flex flex-col space-y-2'>
        <label htmlFor='location' className='mr-1'>
          Please enter Zip Code.
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
  );
};

export default WeatherForm;
