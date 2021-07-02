const ContactForm = () => {
  const inputStyles = 'shadow-md rounded-md py-1 px-2 w-11/12 md:w-2/3 m-auto';

  return (
    <div className='py-8'>
      <h3 className='text-2xl font-bold'>Coffee Talk</h3>
      <p className='md:w-1/2 m-auto -mb-8  font-serif'>
        I'm always excited to meet new people and start a conversation. Drop
        your info and I'll get back to you as soon as possible.
      </p>
      <form
        method='post'
        className='flex flex-col space-y-4 '
        data-netlify='true'
        name='contact'
        action='/'
        netlify-honeypot='bot-field'
      >
        <input type='hidden' name='form-name' value='contact' />
        <label style={{ visibility: 'hidden' }}>
          <input name='bot-field' />
        </label>
        <p>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            required
            className={inputStyles}
          />
        </p>
        <p>
          <label htmlFor='email'></label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            required
            className={inputStyles}
          />
        </p>
        <p>
          <label htmlFor='message'></label>
          <textarea
            name='message'
            placeholder='Message...'
            className={inputStyles}
            rows='5'
          />
        </p>
        <button className='inline h-10 w-32 rounded-full m-auto text-red-800 font-bold border-red-800 border-2 bg-white hover:bg-red-800 hover:text-white'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
