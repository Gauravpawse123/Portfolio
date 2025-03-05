import SectionSubTitle from "../Common/SectionSubTitle";
import SectionTitle from "../Common/SectionTitle";
import SingleSkill from "./SingleSkill";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <>
      <section id="skills" className="py-5">
        <div className="container">
          <SectionTitle
            title="Introduction !"
            paragraph="Motivated MERN stack developer strong foundation in  React.js, Next.js, Node.js, Express.js, MongoDB and SQL, Skilled in creating reusable components, managing application state with React hooks and Redux, and build interactive dynamic and fast React applications using Next.js. Proficient in JavaScript, HTML, and CSS, Tailwind CSS, with experience in integrating Restful APIs to enhance application functionality. For storage high-volume of data using MongoDB."
          />
          <SectionSubTitle
            title="Skills !"
            mb="20px"
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {skillsData.map((skills) => (
              <SingleSkill key={skills.id} skills={skills} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
