import { Link } from "react-scroll";
const Navbar = () => {
 return (
  <nav className='fixed top-0  z-50 border border-red-700 flex justify-around bg-black-100 p-4'>
   <Link
    to='about'
    offset={-20}
    smooth={true}
    duration={800}
    className='cursor-pointer'
   >
    About
   </Link>
  </nav>
 );
};

export default Navbar;
