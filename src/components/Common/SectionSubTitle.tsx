const SectionSubTitle = ({
  title,
  mb = "10px"
}: {
  title: string;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full`}
        style={{ marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl flex justify-center font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[50px]">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionSubTitle;
