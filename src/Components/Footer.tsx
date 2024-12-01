import { FaGithub } from "react-icons/fa";

const Footer = () => {
 return (
  <footer className='flex justify-between items-center mt-10 gap-x-3 '>
   <img src='/logoicon.svg' alt='Frerot Logo' className='w-8 md:w-10' />
   <p className='text-black-100 dark:text-white text-sm sm:text-lg text-center'>
    &copy;{new Date().getFullYear()}, All Rights Reserved.
   </p>
   <div className='flex items-center justify-center gap-2'>
    <a href='https://github.com/iamfrerot/' target='_blank'>
     <FaGithub className='text-black-100 dark:text-white text-[29px] sm:text-[32px] hover:text-secondary hover:dark:text-secondary transition duration-500' />
    </a>
   </div>
  </footer>
 );
};

export default Footer;
