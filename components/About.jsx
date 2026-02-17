import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const highlights = [
    { id: 1, title: "200+", subtitle: "Problems Solved", desc: "Data Structures & Algorithms" },
    { id: 2, title: "MERN", subtitle: "Stack Developer", desc: "Full-Stack Web Applications" },
    { id: 3, title: "Hackathon", subtitle: "Participant", desc: "Collaborative Coding" },
  ];

  return (
    <section id="about" className="w-full relative bg-white dark:bg-slate-950 py-24 section-padding transition-colors duration-300 overflow-hidden">
        {/* Ambient Background Lighting */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-40"></div>
        
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 inline-block relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-600 after:mt-2">About Me</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            I am a detail-oriented <span className="text-blue-600 dark:text-blue-400 font-medium">Computer Science Engineering student</span> with a strong foundation in modern web development and software engineering principles.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
            My expertise lies in building scalable applications using the <span className="text-slate-800 dark:text-slate-200 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js). I combine my technical skills in Data Structures and Algorithms with a passion for clean code to solve real-world problems. I am currently seeking an entry-level software or web development role to contribute to dynamic projects.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="grid gap-6">
            {highlights.map(({ id, title, subtitle, desc }) => (
                <div key={id} className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-blue-900/20">
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500 mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{subtitle}</p>
                    <p className="text-slate-600 dark:text-slate-500 text-sm">{desc}</p>
                </div>
            ))}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
