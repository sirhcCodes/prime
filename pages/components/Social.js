import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';

const Social = (props) => {
  return (
    <div className={props.classNameContainer}>
      <Link href='https://www.linkedin.com/in/christopher-a-wong/'>
        <a target='_blank' className={props.className}>
          <FaLinkedin />
        </a>
      </Link>
      <Link href='https://www.instagram.com/c_wong86/'>
        <a target='_blank' className={props.className}>
          <FaInstagramSquare />
        </a>
      </Link>
      <Link href='https://twitter.com/Chris808617'>
        <a target='_blank' className={props.className}>
          <FaTwitterSquare />
        </a>
      </Link>
    </div>
  );
};

export default Social;
