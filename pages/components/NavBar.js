import Link from 'next/link';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [width, setWidth] = useState(0);
  const [miniNav, setMiniNav] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  function toggleMenuHandler() {
    if (miniNav) {
      setMiniNav(false);
    } else {
      setMiniNav(true);
    }
  }

  function navCloseHandler() {
    setMiniNav(false);
  }

  const navListContainer =
    'space-y-4 md:space-y-0 mt-4 md:flex md:space-x-4 md:text-xl font-light h-screen md:h-auto';
  const navLinksOpen =
    'text-gray-400 hover:text-black transition duration-300 opacity-0 md:opacity-100 animate-links-load';
  const navLinksClose =
    'text-gray-400 hover:text-black transition duration-300 opacity-0 md:opacity-100';
  const navBtnOpen = 'text-2xl animate-spin ml-auto';
  const navBtnClose = 'text-2xl animate-spin-out ml-auto';

  return (
    <nav className='fixed min-w-full z-10 bg-white shadow-md'>
      <div className='px-4 py-2 md:mx-auto md:pt-0 grid grid-cols-2 max-w-screen-2xl md:mt-6'>
        <div>
          <Link href='/'>
            <a
              className='flex items-center font-bold space-x-1 text-3xl md:text-4xl md:mb-0 opacity-0 animate-on-load'
              onClick={navCloseHandler}
            >
              <FaLaptopCode />
              <p>{width < 768 ? 'CW' : 'Chris Wong'}</p>
            </a>
          </Link>
        </div>
        <div
          className='md:hidden max-w-min ml-auto my-auto'
          onClick={toggleMenuHandler}
        >
          {miniNav ? (
            <FaTimes className={navBtnClose} />
          ) : (
            <FaBars className={navBtnOpen} />
          )}
        </div>
        <div className='md:ml-auto'>
          <ul
            className={
              miniNav ? navListContainer : navListContainer.concat(' hidden')
            }
          >
            <li>
              <Link href='/'>
                <a
                  className={miniNav ? navLinksOpen : navLinksClose}
                  onClick={navCloseHandler}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a
                  className={miniNav ? navLinksOpen : navLinksClose}
                  style={{ animationDelay: '300ms' }}
                  onClick={navCloseHandler}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
