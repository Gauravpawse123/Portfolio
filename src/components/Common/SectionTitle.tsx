const SectionTitle = ({
  title,
  paragraph,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
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
        <p className="text-base font-bold !leading-relaxed text-center text-body-color md:text-xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
