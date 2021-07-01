import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiCoffee, FiCamera } from 'react-icons/fi';
import { GiRunningShoe, GiIsland } from 'react-icons/gi';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextDotJs,
} from 'react-icons/si';
import { useState } from 'react';

export default function Home() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const activityStyle =
    'flex items-center text-xl font-light animate-icon-activities opacity-0';
  const iconStyle = 'mr-0.5 text-gray-400';
  const techStyle = ' h-12 w-12 text-gray-600';

  function learnMore() {
    if (aboutVisible) {
      setAboutVisible(false);
    } else {
      setAboutVisible(true);
    }
  }

  return (
    <main
      className='relative top-72 w-full pb-80 animate-fade-in opacity-0'
      style={{ animationDuration: '300ms' }}
    >
      <div className='w-11/12 bg-white m-auto rounded-lg flex flex-col items-center space-y-8 max-w-screen-2xl'>
        <div className='bg-gray-200 w-32 h-32 rounded-full m-auto -mt-16 animate-fade-in opacity-0'>
          <FaLaptopCode className='m-auto pt-6 w-24 h-24 text-gray-700' />
        </div>
        <h1 className='text-4xl font-extrabold opacity-0 animate-icon-activities'>
          Hi, I'm Chris. 🤙🏼
        </h1>
        <div
          className='text-sm text-gray-400 opacity-0 animate-on-load'
          style={{ animationDelay: '300ms' }}
        >
          <HiOutlineLocationMarker className='inline text-2xl mr-1' />
          Boston, Massachusetts
        </div>
        <div className='w-11/12 grid grid-cols-2 justify-items-center	md:grid-cols-4 gap-8 md:gap-16 border-b-2 pb-8'>
          <div className={activityStyle} style={{ animationDelay: '300ms' }}>
            <FaLaptopCode className={iconStyle} /> Coder
          </div>
          <div className={activityStyle} style={{ animationDelay: '600ms' }}>
            <GiRunningShoe className={iconStyle} /> Runner
          </div>
          <div className={activityStyle} style={{ animationDelay: '900ms' }}>
            <FiCamera className={iconStyle} /> Photographer
          </div>
          <div className={activityStyle} style={{ animationDelay: '1200ms' }}>
            <FiCoffee className={iconStyle} /> Coffeeholic
          </div>
        </div>
        <div className='w-11/12 p-1 flex flex-col justify-center border-b-2 pb-8'>
          <h3 className='text-center text-2xl font-bold'>About Me</h3>
          <p className='text-center lg:w-1/2 m-auto'>
            People first, with an innate affinity to help others. I'm always
            looking for ways to improve and grow. Self-taught frontend
            developer, fell in love with coding for the challenege it provides
            and the excitement of finding a solution to the task at hand.
          </p>
          <button
            className='text-red-800 border-2 transition duration-600 border-red-800 py-2 w-36 md:w-44 lg:w-48 m-auto rounded-full font-light hover:text-white hover:bg-red-800 mt-6'
            onClick={learnMore}
          >
            Learn more
          </button>
          <div
            className={
              aboutVisible
                ? 'block shadow-lg px-4 pb-6 mt-4 bg-gray-100 rounded-md'
                : 'hidden'
            }
          >
            <p
              className={
                aboutVisible
                  ? 'text-center w-full m-auto lg:w-1/2 mt-8 opacity-0 animate-about-me'
                  : 'text-center w-full m-auto lg:w-1/2 mt-8 opacity-0'
              }
            >
              I first became curious about coding when I worked for a startup in
              Boston called ezCater. Through my years there I developed an
              interest in how they produced features that solved user problems
              and developped them in a way that made people love our product.
              From that small curiosity I've developed a passion for it! As a
              result of that passion I decided to build this page to learn how
              to use Next.js along with TailwindCSS.
              <br></br>
              <br></br>
              Having been in sales for roughly ten years I've learned to
              constantly ask questions. By being able to think critically and
              dig deeper into what is being asked of me I'm able to provide
              clients with an end product they are completely happy with.
              <br></br>
              <br></br>I have a pretty easy going personality which I contribute
              to having lived most of my life in Hawaii{' '}
              <GiIsland className='inline mb-1' />. In 2017 my wife received her
              PhD and a job opportunity in Boston. Having never seen snow or
              been in temperatures less than 40°, one could say I was a little
              hesitant, but when opportunity knocks...I've learned to answer and
              3 months later - we made the leap. Through my experiences I've
              learned to think ahead and be flexible.
            </p>
          </div>
        </div>
        <div>
          <h3 className='text-center text-2xl font-bold mb-4'>Technologies</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center	gap-8 mb-8 text-center'>
            <div>
              <SiHtml5 className={techStyle} />
            </div>
            <div>
              <SiCss3 className={techStyle} />
            </div>
            <div>
              <SiTailwindcss className={techStyle} />
            </div>
            <div>
              <SiJavascript className={techStyle} />
            </div>
            <div>
              <SiReact className={techStyle} />
            </div>
            <div>
              <SiNextDotJs className={techStyle} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
