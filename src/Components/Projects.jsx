import ProjectsCards from "./ProjectsCards";
import { ProjectInfo } from "./User";

const Projects = () => {
  return (
    <div className="px-[4rem] my-10 font-mono md-mx:px-5 xs-mx:px-3 xs-mx:mt-16" id="Projects">
      <h1 className="text-4xl text-center mb-10 xs-mx:mb-8 text-white font-bold sm-mx:text-3xl xs-mx:text-3xl">
        <span className="text-primaryColor">02.&nbsp;</span>
        Projects
      </h1>
      <div className="flex flex-wrap justify-around gap-4 md-mx:justify-between md-mx:gap-0 sm-mx:justify-center">
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
