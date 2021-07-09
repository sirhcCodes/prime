import Hero from '../components/main_hero';
import AboutMe from '../components/about_me';
import Technologies from '../components/technologies';

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
