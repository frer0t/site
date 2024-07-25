import { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
 let lastScrollY = window.scrollY;
 const handleScroll = () => {
  if (window.scrollY > lastScrollY && window.scrollY >= 40) {
   setShow(false);
  } else {
   setShow(true);
  }
  lastScrollY = window.scrollY;
 };
 const [show, setShow] = useState(false);
 useEffect(() => {
  window.addEventListener("scroll", handleScroll);
 }, [lastScrollY]);
 return (
  <nav
   className={`fixed top-0 z-50 flex flex-wrap text-[12px] sm:text-lg justify-center items-center bg-transparent p-4 mt-3 dark:text-white font-bold self-center gap-x-4 rounded-full  border border-secondary backdrop-blur-lg transform transition-transform duration-500 ${
    show ? "translate-y-0" : "-translate-y-[120px]"
   } `}
  >
   <Link
    to='home'
    offset={-20}
    smooth={true}
    duration={800}
    className='cursor-pointer hover:text-secondary transition-colors duration-500'
   >
    Home
   </Link>
   <Link
    to='about'
    offset={-20}
    smooth={true}
    duration={800}
    className='cursor-pointer hover:text-secondary transition-colors duration-500'
   >
    About
   </Link>
   <Link
    to='experience'
    offset={-20}
    smooth={true}
    duration={800}
    className='cursor-pointer hover:text-secondary transition-colors duration-500'
   >
    experience
   </Link>
   <Link
    to='projects'
    offset={-20}
    smooth={true}
    duration={800}
    className='cursor-pointer hover:text-secondary transition-colors duration-500'
   >
    projects
   </Link>
   <Link
    to='skills'
    offset={-20}
    smooth={true}
    duration={800}
    className='cursor-pointer hover:text-secondary transition-colors duration-500'
   >
    skills
   </Link>
   <Link
    to='contact'
    offset={-20}
    smooth={true}
    duration={800}
    className='cursor-pointer hover:text-secondary transition-colors duration-500'
   >
    contact
   </Link>
  </nav>
 );
};

export default Navbar;
