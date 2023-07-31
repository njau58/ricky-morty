import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import Image from "next/image";
import {
  img_3,
  img_10,
  img_9,
  img_8,
  img_7,
  img_5,
  img_2,
  img_1,
} from "../assets";
const Projects = () => {
  const nesterProjects = [
    img_3,
    img_3,
    img_10,
    img_9,
    img_8,
    img_7,
    img_5,
    img_2,
    img_1,
  ];

  return (
    <section id="projects" className="my-32  ">
      <div className=" relative z-30 flex flex-col space-y-6 justify-center items-center">
        <p className="font-extralight text-secondary md:text-md text-sm">PROJECTS</p>
        <p
          className={`text-text-gray-800 font-extrabold md:text-4xl text-3xl    ${inter.className}`}
        >
          Some of our projects
        </p>

        <div className="grid md:grid-cols-3 gap-6 grids-col-1 mx-4 max-w-7xl md:mx-auto pt-6">
          {nesterProjects.map((project, idx) => {
            return( <Image key={idx} src={project}  alt="project" className="rounded-md w-full h-full"></Image>)
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
