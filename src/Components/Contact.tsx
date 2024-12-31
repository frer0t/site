import { CiLinkedin } from "react-icons/ci";
import SectionTitle from "./SectionTitle";

const Contact = () => {
 return (
  <section id='contact' className='flex flex-col items-center mt-10'>
   <SectionTitle title='Contact:' />
   <div className='flex flex-col gap-y-3 text-center items-center text-lg font-semibold text-secondary lg:text-2xl'>
    <a href='mailto:frerotntwali@gmail.com'>frerotntwali@gmail.com</a>
    <p className='text-black-100 dark:text-white'>Kigali, Rwanda</p>
    <div className='flex text-3xl'>
     <a href='https://www.linkedin.com/in/frerotntwali' target='_blank'>
      <CiLinkedin className='text-black-100 dark:text-white text-[32px] sm:text-[35px] hover:text-secondary hover:dark:text-secondary transition duration-500' />
     </a>
    </div>
   </div>
  </section>
 );
};

export default Contact;
