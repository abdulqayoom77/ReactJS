import React from "react";

const ButtonsSkill = ({ activeBtn, setActiveBtn }) => {
  const btns = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Cloud",
    "Tools",
    "Language",
    "Framework",
    "Styling",
  ];

  return (
    <div className="flex flex-wrap gap-3 p-6">
      {btns.map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveBtn(btn)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border-2 ${
            activeBtn === btn
              ? "bg-gray-600 text-white border-gray-600"
              : "bg-white text-gray-700 border-gray-600 hover:bg-blue-50"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonsSkill;
