import { useContext } from "react";
import AboutCards from "../components/AboutCards";
import SecHeading from "../components/SecHeading";
import SecTagLine from "../components/SecTagLine";
import { ThemeContext } from "../context/theme-context";

const About = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  const backGroundAbout = isDark
    ? "h-auto w-[100vw] !bg-[#020202] flex flex-col justify-center items-center gap-5"
    : "h-auto w-[100vw] !bg-[#F9FAFB] flex flex-col justify-center items-center gap-5";

  return (
    <div
      className={backGroundAbout}
    >
      <SecHeading>About Me</SecHeading>
      <SecTagLine>
        Passionate developer with a love for creating innovative solutions
      </SecTagLine>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-50 w-[100vw] md:w-[80vw] lg:w-[70vw] text-white mt-10 mb-10">
        <img
          className="w-80 border-7 border-[#a9a9a9] rounded-full h-80 shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          src="girl.webp"
          alt=""
        />
        <div className="flex flex-col gap-4 text-center md:text-left lg:text-left w-110">
          <h2 className={isDark ? "text-white mb-4 text-2xl font-semibold" : "text-[#000] mb-4 text-2xl font-semibold"}>
            Hi, I'm Sarwat Mustafa
          </h2>
          <p className={isDark? "text-[#99A1AF] text-[1.1rem]" : "text-[#737373] text-[1.1rem]"}>
            I'm a passionate full-stack developer with over 3 years of
            experience in building modern web applications. I specialize in the
            MERN stack and love creating user-friendly interfaces that solve
            real-world problems.
          </p>
          <p className={isDark? "text-[#99A1AF] text-[1.1rem]" : "text-[#737373] text-[1.1rem]"}>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge
            through technical writing. I believe in continuous learning and
            staying up-to-date with the latest industry trends.
          </p>
          <p className={isDark? "text-[#99A1AF] text-[1.1rem]" : "text-[#737373] text-[1.1rem]"}>
            My goal is to create digital experiences that not only look great
            but also provide exceptional functionality and performance. Let's
            build something amazing together!
          </p>
        </div>
      </div>
      <AboutCards />
    </div>
  );
};

export default About;
