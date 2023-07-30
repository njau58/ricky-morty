import Feature from "./Feature";
import { BsGlobeAmericas } from "react-icons/bs";
import { PiPlant } from "react-icons/pi";
import { GiCubes } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
const Features = () => {
  const features = [
    {
      Icon: <BsGlobeAmericas />,
      title: "We are out to save planet earth",
      isCustom: true,
      description: `
      We know that solar power can make a real difference in the fight against climate change, and we are committed to making that difference.We therefore support the development of new solar technologies that are more efficient and affordable.`,
    },
    {
      Icon: <PiPlant />,
      title: "Sustainable",
      isCustom: false,
      description: `
      We believe that solar energy is the key to a sustainable future, and we are committed to providing our customers with clean, affordable, and sustainable solar power. Together we can create a more sustainable planet for future generations.`,
    },
    {
      Icon: <GiCubes />,
      title: "Economical",
      isCustom: false,
      description: `
      Solar power is a cost-effective way to generate electricity. Savings on your energy bill can offset the upfront cost of installation`,
    },
    {
      Icon: <FiCheckCircle />,
      title: "Efficient",
      isCustom: false,

      description: `
      Solar panels are very efficient at converting sunlight into electricity. Our solar panel can convert up to 20% of the sunlight that it receives into electricity.`,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 -mt-16 z-30 relative grid-cols-1 md:mx-auto max-w-[90rem] gap-6  space-x-0    mx-4 md:gap-y-0">
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
