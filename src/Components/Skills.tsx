import { skillsData } from "../utils/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
 initial: {
  opacity: 0,
  y: 100,
 },
 animate: (index: number) => ({
  opacity: 1,
  y: 0,
  transition: {
   delay: 0.05 * index,
  },
 }),
};

const Skills = () => {
 return (
  <section className=' md:px-20'>
   <h1 className='text-center text-black-100 dark:text-white text-3xl sm:text-4xl font-semibold '>
    Skills
   </h1>
   <ul className='mt-8 flex flex-wrap justify-center gap-2 lg:text-lg text-black-100 dark:text-white text-center font-semibold'>
    {skillsData.map((skill, index) => (
     <motion.li
      key={index}
      className='bg-white dark:bg-black-100 border border-white/[0.1] rounded-xl px-5 py-3'
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      custom={index}
     >
      {skill}
     </motion.li>
    ))}
   </ul>
  </section>
 );
};

export default Skills;
