import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav | Contact",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="I'm always open to new opportunities, collaborations, and interesting projects. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
