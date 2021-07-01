import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Social from './components/Social';

const Contact = () => {
  const socialIcons = 'hover:text-red-800 transition duration-300 text-4xl';

  return (
    <section className='w-full pb-8 animate-fade-in opacity-0 min-h-screen'>
      <div className='bg-hi bg-cover bg-center h-96 flex items-center justify-center'>
        <h1 className='text-white text-3xl font-extrabold mt-32 md:mt-40 lg:mt-24 shadow-2xl'>
          Let's connect.
        </h1>
      </div>
      <div className='w-11/12 text-center px-3 max-w-screen-md bg-gray-50 mt-16 m-auto rounded shadow-md'>
        <ContactForm />
        <div>
          <div className='max-w-max m-auto'>
            <h3 className='font-bold mb-2'>Find me on social</h3>
            <span className='block border-t-4 border-red-800 -mt-3'></span>
          </div>
          <Social
            classNameContainer='flex max-w-min m-auto space-x-4 pb-4'
            className={socialIcons}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
