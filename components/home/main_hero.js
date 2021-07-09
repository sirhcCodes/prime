import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiCoffee, FiCamera } from 'react-icons/fi';
import { GiRunningShoe } from 'react-icons/gi';

const Hero = () => {
  const activityStyle =
    'flex items-center text-xl font-light animate-icon-activities opacity-0';
  const iconStyle = 'mr-1 text-gray-400';

  return (
    <>
      <div className='bg-gray-200 w-32 h-32 rounded-full animate-fade-in opacity-0'>
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
    </>
  );
};

export default Hero;
