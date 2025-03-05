import SectionSubTitle from "../Common/SectionSubTitle";
import SingleTool from "./SingleTool";
import toolData from "./toolData";

const Tools = () => {
  return (
    <>
      <section id="tools" className="py-5">
        <div className="container">
          <SectionSubTitle
            title="Tools And Softwares !"
            mb="20px"
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {toolData.map((tools) => (
              <SingleTool key={tools.id} tools={tools} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;