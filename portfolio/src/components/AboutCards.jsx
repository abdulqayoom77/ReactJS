import React, { useContext } from "react";
import { FaCode, FaRegLightbulb, FaUsers } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { ThemeContext } from "../context/theme-context";

const AboutCards = () => {

  const [theme] = useContext(ThemeContext);

const isDark = theme === "dark";

// const paraTextStyling = isDark ? "text-[#99A1AF]" : "text-[#4B5563]";



  const aboutCards = [
    {
      icon: <FaCode />,
      num: "3+",
      title: "Years of Experience",
      description: "Building web applications",
    },
    {
      icon: <GiCoffeeCup />,
      num: "50+",
      title: "Projects Completed",
      description: "From concept to deployment",
    },
    {
      icon: <FaRegLightbulb />,
      num: "20+",
      title: "Technologies",
      description: "Modern tech stack",
    },
    {
      icon: <FaUsers />,
      num: "10+",
      title: "Happy Clients",
      description: "Satisfied customers",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 mb-20">
      {aboutCards.map((card, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition"
        >
          <div className="text-4xl mb-4 text-[#00ADB5]">{card.icon}</div>
          <h3 className="text-2xl font-semibold mb-2 text-white">{card.num}</h3>
          <h4 className="text-xl font-medium mb-2 text-white">{card.title}</h4>
          <p className="text-[#99A1AF]">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
