import { HeroHighlight } from "../ui/HeroHighlight";
const Hero = () => {
 return (
  <HeroHighlight containerClassName='h-screen dark:bg-black-100 '>
   <h1 className='text-white font-semibold sm:text-base md:text-2xl lg:text-3xl'>
    under development 💭...
   </h1>
   <a
    href='https://github.com/iamfrerot/'
    target='_blank'
    className='text-blue-400 font-[300] hover:underline text-sm lg:text-2xl'
   >
    @frérot
   </a>
  </HeroHighlight>
 );
};

export default Hero;
