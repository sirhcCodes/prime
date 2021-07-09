import { FaRegCopyright } from 'react-icons/fa';
import Link from 'next/link';
import Social from '../social_icons';

const Footer = () => {
  const socialIcons =
    'hover:text-gray-500 transition duration-300 text-2xl font-extrabold';

  return (
    <footer className='w-full m-0 md:text-md bg-gray-100 flex flex-col h-28 md:h-40 border-t-2'>
      <div className='flex-grow grid grid-cols-2 md:grid-cols-3 content-center gap-4'>
        <div className='h-full m-auto'>
          <div className='max-w-max'>
            <Link href='/'>
              <a>
                <h4 className={socialIcons}>Chris Wong</h4>
                <span className='block border-t-4 border-red-800 min-w-full -mt-1 mb-1'></span>
              </a>
            </Link>
          </div>
          <Social
            classNameContainer='md:col-span-2 flex justify-self-start'
            className={socialIcons}
          />
        </div>
      </div>
      <div>
        <span className='flex items-center justify-center md:border-t-2 md:mb-1 md:pt-2 w-full m-auto shadow-inner text-sm'>
          <FaRegCopyright className='mr-0.5' />
          2021 Christopher Wong
        </span>
      </div>
    </footer>
  );
};

export default Footer;
