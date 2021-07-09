import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextDotJs,
  SiGithub,
} from 'react-icons/si';

const Technologies = () => {
  const technologyStyles = 'block h-12 w-12 text-gray-600 mx-auto';

  return (
    <div>
      <h3 className='text-center text-2xl font-bold mb-4'>Technologies</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 justify-items-center gap-x-16 gap-y-8 mb-8 '>
        <div>
          <SiHtml5 className={technologyStyles} />
          <p>HTML</p>
        </div>
        <div>
          <SiCss3 className={technologyStyles} />
          <p>CSS</p>
        </div>
        <div>
          <SiTailwindcss className={technologyStyles} />
          <p>TailwindCSS</p>
        </div>
        <div>
          <SiJavascript className={technologyStyles} />
          <p>JS</p>
        </div>
        <div>
          <SiReact className={technologyStyles} />
          <p>React</p>
        </div>
        <div>
          <SiNextDotJs className={technologyStyles} />
          <p>Next.js</p>
        </div>
        <div>
          <SiGithub className={technologyStyles} />
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
