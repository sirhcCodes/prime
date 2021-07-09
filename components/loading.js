import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
  return (
    <div className='w-full'>
      <AiOutlineLoading3Quarters className='text-4xl animate-load mx-auto' />
      <p className='text-2xl'>
        Loading
        <span
          className='animate-pulse opacity-0'
          style={{ animationDelay: '40ms' }}
        >
          .
        </span>
        <span
          className='animate-pulse opacity-50'
          style={{ animationDelay: '20ms' }}
        >
          .
        </span>
        <span className='animate-pulse'>.</span>
      </p>
    </div>
  );
};

export default Loading;
