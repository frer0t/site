import { experienceData } from "../utils/data";
import { motion } from "framer-motion";
const Experience = () => {
 return (
  <section id='experience' className='mt-10 '>
   <h1 className='text-center text-black-100 dark:text-white text-3xl sm:text-4xl font-semibold mb-10'>
    Experience
   </h1>
   <div>
    {experienceData.map((experience, index) => (
     <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
      <motion.div
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{ duration: 1 }}
       className='w-full lg:w-1/4'
      >
       <p className='mb-2 text-neutral-800 dark:text-neutral-200'>{`${experience.start} - ${experience.end} `}</p>
      </motion.div>
      <motion.div
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: 100 }}
       transition={{ duration: 1 }}
       className='w-full max-w-xl lg:w-3/4'
      >
       <h6 className='mb-2 font-semibold text-neutral-800 dark:text-neutral-200'>
        {experience.role} -{" "}
        <span className='text-lg text-secondary'>{experience.company}</span>
       </h6>
       <p className='text-neutral-400 mb-4'>{experience.description}</p>
       <div className='flex flex-wrap'>
        {experience.stack.map((tech, index) => (
         <span
          key={index}
          className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-secondary'
         >
          {tech}
         </span>
        ))}
       </div>
      </motion.div>
     </div>
    ))}
   </div>
  </section>
 );
};

export default Experience;
