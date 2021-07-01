import { useState } from 'react';

const ContactForm = () => {
  const inputStyles = 'shadow-md rounded-md py-1 px-2 w-11/12 md:w-2/3 m-auto';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    console.log('Sending');
    const formData = { name, email, message };
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <div className='p-4 space-y-4'>
      <h3 className='text-xl font-bold'>Coffee Talk</h3>
      <p className='md:w-1/2 m-auto'>
        I'm always excited to meet new people and start a conversation. Drop
        your info and I'll get back to you as soon as possible.
      </p>
      <form
        method='post'
        className='flex flex-col space-y-3'
        onSubmit={submitHandler}
      >
        <formGroup>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            required
            className={inputStyles}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </formGroup>
        <formGroup>
          <label htmlFor='email'></label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            required
            className={inputStyles}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </formGroup>
        <formGroup>
          <label htmlFor='message'></label>
          <textarea
            name='message'
            placeholder='Message...'
            className={inputStyles}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows='5'
          />
        </formGroup>
        <button className='inline h-10 w-32 rounded-full m-auto text-red-800 font-light border-red-800 border-2 bg-white hover:bg-red-800 hover:text-white'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
