import { FaGithub } from "react-icons/fa";
import { TextGenerateEffect } from "../ui/TextGenerate";
import Highlightext from "./Highlightext";
import { CiLinkedin, CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-scroll";
import { CiLink } from "react-icons/ci";

const Hero = () => {
 return (
  <section
   className='flex flex-col justify-center sm:items-center h-screen w-fit'
   id='home'
  >
   <TextGenerateEffect
    words='crafting seamless cross-platform experiences for user empowerment..'
    className='dark:text-white text-black-100 text-2xl sm:text-3xl md:text-4xl font-bold sm:text-center'
   />
   <div className='mt-3 flex flex-col sm:items-center gap-y-5'>
    <p className='text-black-100 dark:text-white text-base sm:text-lg lg:text-xl font-regular sm:text-center'>
     hey there 👋🏾!!!, i'm{" "}
     <a
      href='https://github.com/iamfrerot'
      target='_blank'
      className='inline-flex hover:underline text-secondary font-bold'
     >
      <Highlightext text='frérot' />
      <CiLink className='inline text-lg text-secondary ' />
     </a>{" "}
     a <Highlightext text='full-stack' styles='font-bold' /> and{" "}
     <Highlightext text='mobile developer' styles='font-bold' />
    </p>
    <div className='flex items-center gap-x-4'>
     <Link
      to='contact'
      className='text-black-100 font-bold hover:text-secondary dark:text-white bg-transparent px-3 py-2 rounded-3xl border border-gray-700 hover:bg-white dark:hover:bg-black-100 hover:dark:text-secondary transition duration-300 flex gap-x-1 cursor-pointer'
      smooth={true}
      duration={800}
     >
      contact
      <CiLocationArrow1 />
     </Link>
     <a href='https://github.com/iamfrerot/' target='_blank'>
      <FaGithub className='text-black-100 dark:text-white text-[32px] hover:text-secondary hover:dark:text-secondary transition duration-500' />
     </a>
     <a href='https://linkedin.com/in/ntwalifrerot' target='_blank'>
      <CiLinkedin className='text-black-100 dark:text-white text-[40px] hover:text-secondary hover:dark:text-secondary transition duration-500' />
     </a>
    </div>
   </div>
  </section>
 );
};

export default Hero;
