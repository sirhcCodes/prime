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
  const aboutContent =
    'text-center w-full m-auto lg:w-1/2 mt-8 opacity-0  font-serif';

  function learnMore() {
    if (aboutVisible) {
      setAboutVisible(false);
    } else {
      setAboutVisible(true);
    }
  }

  return (
    <div
      className='pt-48 md:pt-64 pb-8 w-full min-h-screen md:pb-40 animate-fade-in opacity-0'
      style={{ animationDuration: '300ms' }}
    >
      <div className='w-11/12 bg-white m-auto rounded-lg flex flex-col items-center space-y-8 max-w-screen-2xl'>
        <div className='bg-gray-200 w-32 h-32 rounded-full m-auto -mt-16 animate-fade-in opacity-0'>
          <FaLaptopCode className='m-auto pt-6 w-24 h-24 text-gray-700' />
        </div>
        <h1 className='text-4xl font-extrabold opacity-0 animate-icon-activities font-serif'>
          Hi, I'm Chris.
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
          <p className='text-center lg:w-1/2 m-auto  font-serif'>
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
            <div
              className={
                aboutVisible
                  ? aboutContent.concat(' animate-about-me')
                  : aboutContent
              }
            >
              <p>
                I first became curious about coding when I worked for a startup
                in Boston called ezCater. During my time there I developed an
                interest in how they produced features that solved user problems
                and developped them in a way that made people fall in love our
                product. From that small curiosity I've developed a passion for
                it! As a result of that passion I decided to build this page to
                learn how to use Next.js along with TailwindCSS and deploy it
                using Netlify.
              </p>
            </div>
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
    </div>
  );
}
