import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
 return (
  <footer className="flex gap-6 justify-between  items-center mt-10 flex-wrap ">
   <img src="/logo.svg" alt="Frerot Logo" className=" w-[90px]" />
   <p className="text-black-100 dark:text-white sm:text-md">
    &copy; {new Date().getFullYear()}, All Rights Reserved.
   </p>
   <div className="flex items-center justify-center gap-2">
    <a href="https://github.com/iamfrerot/" target="_blank">
     <FaGithub className="text-black-100 dark:text-white text-[32px] hover:text-secondary hover:dark:text-secondary transition duration-500" />
    </a>
    <a href="https://linkedin.com/in/ntwalifrerot" target="_blank">
     <CiLinkedin className="text-black-100 dark:text-white text-[40px] hover:text-secondary hover:dark:text-secondary transition duration-500" />
    </a>
   </div>
  </footer>
 );
};

export default Footer;
