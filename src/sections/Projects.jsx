import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import { Suspense, useState } from "react";
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
  project5,
  project6,
  project7,
} from "../assets";
import ProjectSkeleton from "../components/skeleton/ProjectSkeleton";
import ImageCustom from "../components/Image/ImageCustom";
const Projects = () => {
  const nesterProjects = [
    project4,
    project5,
    about1,
    project1,
    project2,
    project3,

    project6,
    project7,
    maintanace,
  ];
  const [loading, setLoading] = useState(() => {
    const initialLoading = {};
    nesterProjects.forEach((src) => {
      initialLoading[src] = false;
    });
    return initialLoading;

  });

 
  const handleLoadingComplete = (src) => {
    setLoading((prevLoading) => ({ ...prevLoading, [src]: true }));
  };

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
              <div key={idx} className="h-56">
                <ImageCustom
                  loading={loading}
                  handleLoadingComplete={handleLoadingComplete}
                  src={project}
                  alt="project"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
