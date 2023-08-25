import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import Image from "next/image";
import {
  project1,
  project2,
  project3,
  project4,
  about1,
  about2,
  maintanace,
  farming,
  water_heating,
} from "../assets";
const Projects = () => {
  const nesterProjects = [
    about1,
    about2,
    project1,
    project2,
    project3,
    project4,
    maintanace,
    farming,water_heating
    
  ];

  return (
    <section id="projects" className="my-32  ">
      <div className=" relative z-30 flex flex-col space-y-6 justify-center items-center">
        <p className="font-extralight text-secondary md:text-md text-sm">
          PROJECTS
        </p>
        <p
          className={`text-text-gray-800 font-extrabold md:text-4xl text-3xl    ${inter.className}`}
        >
         Our latest projects
        </p>

        <div className="grid md:grid-cols-3 gap-6 grids-col-1 mx-4 max-w-7xl md:mx-auto pt-6">
          {nesterProjects.map((project, idx) => {
            return (
              <Image
                key={idx}
                src={project}
                alt="project"
                className="rounded-md w-full h-full"
              ></Image>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
