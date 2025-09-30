import React, { useContext } from "react";
import SecHeading from "../components/SecHeading";
import SecTagLine from "../components/SecTagLine";
import ButtonsSkill from "../components/ButtosSkill";
import SkillsCards from "../components/SkillsCards";
import { ThemeContext } from "../context/theme-context";

const Skills = () => {

const {theme} = useContext(ThemeContext);
 const isDark = theme === 'dark'



  return (
    <div className={"flex justify-center items-center flex-col bg-black"}>
      <SecHeading>Skills & Technologies</SecHeading>
      <SecTagLine>
        A comprehensive toolkit for building modern web applications
      </SecTagLine>
      <ButtonsSkill />
      <SkillsCards />
    </div>
  );
};

export default Skills;
