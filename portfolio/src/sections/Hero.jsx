import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiDownArrowAlt } from "react-icons/bi";

const Hero = () => {
  let btnStyling =
    "flex items-center gap-2 px-6 py-2 rounded-lg border border-white/20 bg-white/5 text-white font-semibold shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-md transition cursor-pointer";
  let iconStyling =
    "text-3xl flex items-center gap-2 px-2 py-2  text-white font-semibold  hover:scale-[1.1] transition cursor-pointer hover:text-gray-400";
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-8">
      <h1 className="text-7xl font-bold text-white bg-clip-text cursor-pointer overflow-y-hidden">
        Front-End Developer
      </h1>
      <h2 className="text-2xl text-gray-400 bg-clip-text cursor-pointer overflow-y-hidden w-[50vw] text-center">
        Crafting modern web experiences with the MERN stack. Passionate about
        clean code, innovative solutions, and bringing ideas to life.
      </h2>
      <div className="flex gap-5">
        <button className={btnStyling}>View Projects</button>
        <button className={btnStyling}>Download CV</button>
        <button className={btnStyling}>Contact Me</button>
      </div>
      <div className="flex gap-2  overflow-hidden">
        <a href="" className={`${iconStyling}`}>
          <FaGithub />
        </a>
        <a href="" className={`${iconStyling}`}>
          <FaLinkedin />
        </a>
        <a href="" className={`${iconStyling}`}>
          <FaFileAlt />
        </a>
        <a href="" className={`${iconStyling}`}>
          <MdEmail />
        </a>
      </div>
    <BiDownArrowAlt className={`${iconStyling} text-5xl text-gray-500`} />
    </div>
  );
};

export default Hero;
