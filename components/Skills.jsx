import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "OS"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Deep Learning"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Linux", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="w-full relative bg-slate-50 dark:bg-slate-950 py-24 section-padding transition-colors duration-300 overflow-hidden">
        {/* Ambient Background Lighting */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-100/40 dark:bg-teal-900/10 rounded-full blur-3xl -z-10 opacity-40"></div>

      <div className="flex flex-col justify-center h-full">
        <RevealOnScroll className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 inline-block relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-600 after:mt-2">Skills</h2>
          <p className="py-4 text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            A comprehensive list of technologies and tools I work with to bring ideas to life.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
                key={index} 
                className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-500/5 shadow-sm hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-800 hover:text-white dark:hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 cursor-default hover:shadow-md hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Skills;
