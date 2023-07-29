import Feature from "./Feature";
import { BsGlobeAmericas } from "react-icons/bs";
import { PiPlant } from "react-icons/pi";
import { GiCubes } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
const Features = () => {
  const features = [
    {
      Icon: <BsGlobeAmericas />,
      title: "We are out to save planet earths",
      isCustom: true,
      description: `
    SoftLeaf Applications stays on top of new advances in various technology fields, so you can be assured that our software development 
    technologies and technique choices are at the height of current knowledge and are rooted in hands-on experience.`,
    },
    {
      Icon: <PiPlant />,
      title: "Sustainable",
      isCustom: false,
      description: `
    SoftLeaf Applications stays on top of new advances in various technology fields, so you can be assured that our software development 
    technologies and technique choices are at the height of current knowledge and are rooted in hands-on experience.`,
    },
    {
      Icon: <GiCubes />,
      title: "Economical",
      isCustom: false,
      description: `
    SoftLeaf Applications stays on top of new advances in various technology fields, so you can be assured that our software development 
    technologies and technique choices are at the height of current knowledge and are rooted in hands-on experience.`,
    },
    {
      Icon: <FiCheckCircle />,
      title: "Efficient",
      isCustom: false,

      description: `
    SoftLeaf Applications stays on top of new advances in various technology fields, so you can be assured that our software development 
    technologies and technique choices are at the height of current knowledge and are rooted in hands-on experience.`,
    },
  ];

  return (
    <div className="flex -mt-16 z-30 relative md:flex-row md:mx-auto max-w-[90rem] md:space-x-6 flex-col space-x-0   space-y-12 mx-4 md:space-y-0">
      {features.map((feature, idx) => {
        return (
          <Feature
            key={idx}
            Icon={feature.Icon}
            title={feature.title}
            isCustom={feature.isCustom}
            description={feature.description}
          />
        );
      })}
    </div>
  );
};

export default Features;
