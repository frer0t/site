import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
 return (
  <section className='flex justify-around items-center mt-10'>
   <p className='text-black-100 dark:text-white text-xl'>&copy; frerot</p>
   <div className='flex items-center justify-center gap-2'>
    <a href='https://github.com/iamfrerot/' target='_blank'>
     <FaGithub className='text-black-100 dark:text-white text-[32px] hover:text-secondary hover:dark:text-secondary transition duration-500' />
    </a>
    <a href='https://linkedin.com/in/ntwalifrerot' target='_blank'>
     <CiLinkedin className='text-black-100 dark:text-white text-[40px] hover:text-secondary hover:dark:text-secondary transition duration-500' />
    </a>
   </div>
  </section>
 );
};

export default Footer;
