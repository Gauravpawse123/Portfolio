import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav | About",
  description: "This is About Page",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="👋 Hi, I'm Gaurav"
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
