import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import SectionSubTitle from "../Common/SectionSubTitle";

const Contact = () => {
  return (
    <section id="about" className="pt-5 md:pt-5 lg:pt-2">
      <SectionSubTitle
        title="Contact !"
      />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/contact.webp"
                  alt="contact-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden shadow-2xl dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
                <Image
                  src="/images/contact.webp"
                  alt="contact-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Feel free to reach out for collaboration, project inquiries, or just to connect!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center space-x-3">
                    <Linkedin className="text-blue-700 text-2xl" />
                    <Link href="https://www.linkedin.com/in/gaurav-pawse-b612b326b/" target="_blank" className="hover:underline">
                      LinkedIn
                    </Link>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Github className="text-blue-600 text-2xl" />
                    <Link href="https://github.com/Gauravpawse123" target="_blank" className="hover:underline">
                      Gaurav Pawse
                    </Link>
                  </div>
                  <div className="flex mx-auto space-x-3">
                    <Mail className="text-blue-600 text-3xl" />
                    <Link href="mailto:Gauravpawse664@gmail.com" target="_blank" className="hover:underline">
                      Gauravpawse664@gmail.com
                    </Link>
                  </div>
                  <div className="flex mx-auto space-x-3">
                    <Instagram className="text-blue-600 text-3xl" />
                    <Link href="https://www.instagram.com/gaurav_pawse123?igsh=a3lnODlvc2JpbWV2" target="_blank" className="hover:underline">
                      Gaurav_pawse123
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
