import { Skills } from "@/types/skills";

const SingleSkill = ({ skills }: { skills: Skills }) => {
  const { icon, title } = skills;
  return (
    <div className="w-full flex flex-wrap justify-center">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 h-[100px] w-[100px] rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-center font-bold text-black dark:text-white sm:text-sm md:text-xl lg:text-2xl xl:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SingleSkill;
