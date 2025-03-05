import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import { Metadata } from "next";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Gaurav's | Portfolio",
  description: "This is Home"
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Skills />
      <Tools />
      <Projects />
      <Education />
      <Contact />
      <Resume/>
    </>
  );
}
