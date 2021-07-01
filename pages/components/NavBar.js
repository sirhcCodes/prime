import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const NavBar = ({ isVisible }) => {
  const [width, setWidth] = useState(0);
  const navStyle = 'flex space-x-4 text-xl font-light';
  const navLinks = 'text-gray-400 hover:text-black transition duration-300';

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='fixed min-w-full z-10 bg-white shadow-md'>
      <div className='px-4 py-4 md:flex md:items-baseline md:justify-between	max-w-screen-2xl m-auto md:px-8'>
        <div>
          <Link href='/'>
            <a className='flex items-center font-bold space-x-2 text-4xl mt-3 mb-1 md:mb-0 opacity-0 animate-on-load'>
              <FaLaptopCode />
              <p>{width < 768 ? 'Chris W.' : 'Chris Wong'}</p>
            </a>
          </Link>
        </div>
        <div>
          <ul className={navStyle}>
            <li>
              <Link href='/'>
                <a className={navLinks}>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/contact' passHref>
                <a className={navLinks}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
