import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectData from "./projectData";

const Projects = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-10 lg:py-10"
    >
      <div className="container">
        <SectionTitle
          title="Projects !"
          paragraph="Explore some of the projects I've built, showcasing my expertise in MERN-Stack development. Each project reflects my ability to solve real-world problems using modern technologies, clean code, and intuitive design"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {projectData.map((project) => (
            <div key={project.id} className="w-full">
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
