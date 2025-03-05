import { ArrowUpRight } from "lucide-react";
import { Projects } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }: { project: Projects }) => {
  const { title, image, paragraph, tags, href } = project;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={href}
          target="_blank"
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={href}
              target="_blank"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="border-b border-body-color border-opacity-10 pb-2 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="pt-5 flex justify-center items-center">
            <Link href={href} target="_blank" className="flex gap-1font-bold hover:text-primary">View website
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
