import Link from "next/link";
const Resume = () => {
  return (
    <section id="about" className="pt-5 md:pt-10 lg:pt-10">
      <div className="container">
        <div className="border-b flex justify-between items-center border-body-color/[.15] pb-10 dark:border-white/[.15] md:pb-10 lg:pb-10">
          <p className="text-3xl  font-bold">Download Resume</p>
          <Link
            href="https://drive.google.com/file/d/1WaIUvp7kDk8Yl0X6GJc81850eFwq2pz5/view?usp=sharing"
            target="_blank"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Resume;
