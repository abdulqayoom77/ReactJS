import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const Cards = ({cardsData}) => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const cardBgStyling = isDark ? "bg-[#1a1a1a]" : "bg-white";
  const cardHoverStyling = isDark
    ? "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
    : "hover:shadow-[0_0_20px_rgba(0,173,181,0.3)]";
  const iconStyling = isDark ? "text-[#00ADB5]" : "text-[#00ADB5]";
  const titleStyling = isDark ? "text-white" : "text-gray-900";
  const descriptionStyling = isDark ? "text-[#99A1AF]" : "text-[#4B5563]";


  return (
    <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 mb-20">
      {cardsData?.map((card, index) => (
        <div
          key={index}
          className={`${cardBgStyling} p-6 rounded-lg shadow-lg flex flex-col items-center text-center ${cardHoverStyling} transition`}
        >
          <div className={`text-4xl mb-4 ${iconStyling}`}>{card.icon}</div>
          <h3 className={`text-2xl font-semibold mb-2 ${titleStyling}`}>
            {card.num}
          </h3>
          <h4 className={`text-xl font-medium mb-2 ${titleStyling}`}>
            {card.title}
          </h4>
          <p className={descriptionStyling}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
