import ProjectsCards from "./ProjectsCards";
import { ProjectInfo } from "./User";

const Projects = () => {
  return (
    <div className="px-[4rem] my-10 font-mono">
      <h1 className="text-4xl text-center mb-10 text-white font-bold">
        <span className="text-primaryColor">02.&nbsp;</span>
        Projects
      </h1>
      <div className="flex flex-wrap justify-between gap-4">
        {ProjectInfo.map((project, index) => {
          return (
            <ProjectsCards
              key={index}
              title={project.title}
              description={project.desc}
              image={project.image}
              link={project.link}
              github={project.github}
              live={project.live}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
