import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Badge from "./Badge";
import ProjectError from "./Errors/ProjectError";
const Projects = async () => {
  let projects_data: IProject[] = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/projects`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    projects_data = await response.json();
  } catch (error) {
    return <ProjectError error={error as Error} />;
  }
  return (
    <>
      {projects_data.map((project, index) => (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
          key={index}
          className="flex flex-col justify-between overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-myblack/95 border-l-2 border-dashed border-mygreen dark:border-myred backdrop-blur-sm h-full"
        >
          <div className="relative">
            <div className="absolute flex justify-end gap-x-2 p-2">
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-mygreen dark:bg-myred rounded-full hover:opacity-80 transition-all duration-300"
              >
                <FiExternalLink size={21} />
              </Link>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white bg-gray-700 rounded-full hover:opacity-80 transition-all duration-300"
                >
                  <FaGithub size={21} />
                </Link>
              )}
            </div>
            <Image
              src={project.cover}
              alt={project.name}
              width={148}
              height={148}
              className="w-full object-cover h-48"
            />
          </div>

          <div className="flex flex-col gap-y-3 p-2">
            <h1 className="text-xl font-semibold text-">{project.name}</h1>
            <p className="text-sm text-myblack/40 dark:text-white/40">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge color="orange">{project.type}</Badge>
              <Badge color="green">{project.tech}</Badge>
              <Badge color="blue">{project.status}</Badge>
              <Badge color="purple" className="uppercase">
                {project.size}
              </Badge>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Projects;
