import { useState } from 'react';

const About = () => {
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutContent =
    'text-center w-full m-auto lg:w-1/2 mt-8 opacity-0  font-serif';

  function learnMoreHandler() {
    if (aboutVisible) {
      setAboutVisible(false);
    } else {
      setAboutVisible(true);
    }
  }

  return (
    <div className='w-11/12 p-1 flex flex-col justify-center border-b-2 pb-8'>
      <h3 className='text-center text-2xl font-bold'>About Me</h3>
      <p className='text-center lg:w-1/2 m-auto  font-serif'>
        People first, with an innate affinity to help others. I'm always looking
        for ways to improve and grow. Self-taught frontend developer, fell in
        love with coding for the challenege it provides and the excitement of
        finding a solution to the task at hand.
      </p>
      <button
        className='text-red-800 border-2 border-red-800 py-2 w-36 md:w-44 lg:w-48 m-auto rounded-full hover:text-white hover:bg-red-800 mt-6'
        onClick={learnMoreHandler}
      >
        <p className='font-bold'>Learn more</p>
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
            I first became curious about coding when I worked for a startup in
            Boston called ezCater. During my time there I developed an interest
            in how they produced features that solved user problems and
            developed them in a way that made people fall in love our product.
            From that small curiosity I've developed a passion for it! As a
            result of that passion I decided to build this page to learn how to
            use Next.js along with TailwindCSS and deploy it using Netlify.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
