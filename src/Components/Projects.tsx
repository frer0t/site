import { HoverEffect } from "../ui/CardHoverEffect";
import { projectsData } from "../utils/data";
import SectionTitle from './SectionTitle';
const Projects = () => {
 return (
  <section id="projects" className="pt-10">
   <SectionTitle title="Projects" />
   <HoverEffect items={projectsData} />
  </section>
 );
};

export default Projects;
