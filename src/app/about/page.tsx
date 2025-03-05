import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import Hero from "@/components/Hero";

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
