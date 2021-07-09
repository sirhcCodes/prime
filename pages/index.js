import Hero from '../components/home/main_hero';
import AboutMe from '../components/home/about_me';
import Technologies from '../components/home/technologies';

export default function Index() {
  return (
    <div
      className='pt-24 md:pt-32 min-h-screen w-11/12 mx-auto max-w-screen-2xl bg-white flex flex-col space-y-8 items-center text-center animate-fade-in opacity-0'
      style={{ animationDuration: '300ms' }}
    >
      <Hero />
      <AboutMe />
      <Technologies />
    </div>
  );
}
