import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextDotJs,
} from 'react-icons/si';

const Technologies = () => {
  const technologyStyles = ' h-12 w-12 text-gray-600';

  return (
    <div>
      <h3 className='text-center text-2xl font-bold mb-4'>Technologies</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center	gap-8 mb-8 text-center'>
        <div>
          <SiHtml5 className={technologyStyles} />
        </div>
        <div>
          <SiCss3 className={technologyStyles} />
        </div>
        <div>
          <SiTailwindcss className={technologyStyles} />
        </div>
        <div>
          <SiJavascript className={technologyStyles} />
        </div>
        <div>
          <SiReact className={technologyStyles} />
        </div>
        <div>
          <SiNextDotJs className={technologyStyles} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
