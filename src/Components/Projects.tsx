import { HoverEffect } from "../ui/CardHoverEffect";
import { projectsData } from "../utils/data";
const Projects = () => {
 return (
  <section id='projects' className='pt-10'>
   <h1 className='text-black-100 dark:text-white text-center text-3xl sm:text-4xl font-semibold '>
    Projects
   </h1>
   <HoverEffect items={projectsData} />
  </section>
 );
};

export default Projects;
