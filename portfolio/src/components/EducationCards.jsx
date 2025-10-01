import React, { useState } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "University of Technology",
    location: "Toronto, Canada",
    period: "01 Jan 2020 - 04",
    description:
      "Specialized in Software Engineering with focus on web technologies, data structures, and algorithms. Graduated with honors.",
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Led final-year project on AI-powered web applications",
      "Active member of Computer Science Society",
    ],
    skills: [
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Database Design",
    ],
    side: "left",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Tech Solutions Inc.",
    location: "Current",
    period: "01 Jan 2023 - Present",
    description:
      "Developing and maintaining web applications using modern technologies. Working with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 10+ production-ready web applications",
      "Improved application performance by 40%",
      "Mentored 3 junior developers",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    side: "right",
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "Digital Agency",
    location: "Karachi, Pakistan",
    period: "Summer 2022",
    description:
      "Worked on client projects focusing on responsive web design and user experience. Collaborated with designers and backend developers.",
    achievements: [
      "Delivered 3 client projects on time",
      "Implemented responsive designs for mobile-first approach",
      "Received excellent feedback from clients",
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
    side: "left",
  },
  {
    type: "education",
    title: "Web Development Bootcamp",
    organization: "Code Academy",
    location: "Online",
    period: "01 2021",
    description:
      "Intensive 6-month program covering full-stack web development with hands-on projects and real-world applications.",
    achievements: [
      "Completed 20+ projects",
      "Top 5% of students",
      "Received certification in MERN stack",
    ],
    skills: ["MERN Stack", "Rest Full API", "Git", "Agile Methodology"],
    side: "right",
  },
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const cardHeight = e.target.scrollHeight / experiences.length;
    const newIndex = Math.round(scrollTop / cardHeight);
    if (
      newIndex !== currentIndex &&
      newIndex >= 0 &&
      newIndex < experiences.length
    ) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile/Tablet View - Vertical Timeline (one card at a time) */}
      <div className="lg:hidden h-screen overflow-hidden">
        <div
          className="h-full overflow-y-scroll snap-y snap-mandatory"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="h-screen snap-start flex items-center justify-center relative px-4"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

              {/* Timeline dot */}
              <div
                className={`absolute left-5 w-7 h-7 rounded-full border-4 border-black flex items-center justify-center z-10 ${
                  exp.type === "education" ? "bg-blue-500" : "bg-green-500"
                }`}
              >
                {exp.type === "education" ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Card */}
              <div className="ml-16 w-full max-w-md">
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-xl font-bold flex-1">{exp.title}</h2>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                          exp.type === "education"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-green-500/10 text-green-400"
                        }`}
                      >
                        {exp.type === "education" ? "Education" : "Current"}
                      </span>
                    </div>
                    <p className="text-lg text-gray-400 mb-3">
                      {exp.organization}
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-gray-400 mb-2">
                      Key Achievements
                    </h3>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-xs flex items-start"
                        >
                          <span className="text-green-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs font-medium border border-zinc-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                document.querySelector(".overflow-y-scroll").scrollTo({
                  top: index * window.innerHeight,
                  behavior: "smooth",
                });
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white scale-150"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Zigzag Timeline */}
      <div className="hidden lg:block py-20 px-8">
        <div className="max-w-7xl mx-auto relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-black flex items-center justify-center z-10 ${
                    exp.type === "education" ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  {exp.type === "education" ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>

                {/* Card Container - uses grid to position card on left or right */}
                <div className="grid grid-cols-2 gap-8">
                  {exp.side === "left" ? (
                    <>
                      {/* Left side card */}
                      <div className="flex justify-end">
                        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors w-full max-w-lg">
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex items-start justify-between mb-2">
                              <h2 className="text-xl font-bold flex-1 pr-2">
                                {exp.title}
                              </h2>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                  exp.type === "education"
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "bg-green-500/10 text-green-400"
                                }`}
                              >
                                {exp.type === "education"
                                  ? "Education"
                                  : "Current"}
                              </span>
                            </div>
                            <p className="text-lg text-gray-400 mb-3">
                              {exp.organization}
                            </p>
                            <div className="flex flex-col gap-2 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h3 className="text-xs font-semibold text-gray-400 mb-2">
                              Key Achievements
                            </h3>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-gray-300 text-xs flex items-start"
                                >
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs font-medium border border-zinc-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Empty right side */}
                      <div></div>
                    </>
                  ) : (
                    <>
                      {/* Empty left side */}
                      <div></div>
                      {/* Right side card */}
                      <div className="flex justify-start">
                        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors w-full max-w-lg">
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex items-start justify-between mb-2">
                              <h2 className="text-xl font-bold flex-1 pr-2">
                                {exp.title}
                              </h2>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                  exp.type === "education"
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "bg-green-500/10 text-green-400"
                                }`}
                              >
                                {exp.type === "education"
                                  ? "Education"
                                  : "Current"}
                              </span>
                            </div>
                            <p className="text-lg text-gray-400 mb-3">
                              {exp.organization}
                            </p>
                            <div className="flex flex-col gap-2 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h3 className="text-xs font-semibold text-gray-400 mb-2">
                              Key Achievements
                            </h3>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-gray-300 text-xs flex items-start"
                                >
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs font-medium border border-zinc-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
