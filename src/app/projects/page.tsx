import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Projects from "@/components/Projects";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav | Projects",
  description: "This is Project Page",
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Projects"
        description="Explore some of the projects I've built, showcasing my expertise in MERN-Stack development. Each project reflects my ability to solve real-world problems using modern technologies, clean code, and intuitive design"
      />
      <Projects/>
    </>
  );
};

export default ProjectsPage;