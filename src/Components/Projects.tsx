import { HoverEffect } from "../ui/CardHoverEffect";

const Projects = () => {
 return (
  <section id='projects' className='pt-10'>
   <h1 className='text-black-100 dark:text-white text-center text-3xl sm:text-4xl font-semibold '>
    Projects
   </h1>
   <HoverEffect
    items={[
     {
      title: "Movie Land",
      description:
       "The Movie Land website is a movie search application. Users can search for movies, view details about them, and explore different categories",
      link: "https://movielandfrerot.netlify.app",
     },
    ]}
   />
  </section>
 );
};

export default Projects;
