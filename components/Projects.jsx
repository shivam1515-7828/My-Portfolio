import React from "react";
import { FaGithub } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Heart Disease Predictor",
      category: "Machine Learning • Healthcare AI",
      description: "An advanced predictive model designed to assess cardiovascular risk using clinical data. Leveraged machine learning algorithms (Logistic Regression, Random Forest) to achieve high accuracy in early detection. Features a user-friendly interface for real-time patient risk assessment.",
      stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
      github: "https://github.com/shivam1515-7828",
    },
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack • MERN",
      description: "A comprehensive e-commerce solution featuring secure user authentication, product search/filtering, shopping cart management, and payment processing integration. Built for scalability and performance.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      github: "https://github.com/shivam1515-7828",
    },
    {
      id: 2,
      title: "Pix AI Generator",
      category: "Frontend • React",
      description: "An innovative AI image generation tool utilizing modern APIs to create unique visuals based on text prompts. Features a responsive masonry grid layout and optimized image loading.",
      stack: ["React", "Tailwind CSS", "OpenAI API", "Vite"],
      github: "https://github.com/shivam1515-7828",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Personal Brand • Next.js",
      description: "A premium, minimalist portfolio website designed to showcase engineering skills and projects. Focuses on clean typography, smooth animations, and accessibility.",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/shivam1515-7828",
    },
  ];

  return (
    <section id="projects" className="w-full relative bg-white dark:bg-slate-950 py-24 section-padding transition-colors duration-300 overflow-hidden">
       {/* Ambient Background Lighting */}
       <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-40"></div>

      <div className="mb-16">
        <RevealOnScroll>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 inline-block relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-600 after:mt-2">Selected Projects</h2>
            <p className="py-4 text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            A collection of case studies demonstrating my ability to solve problems and build value.
            </p>
        </RevealOnScroll>
      </div>

      <div className="grid gap-12">
        {projects.map(({ id, title, category, description, stack, github }) => (
          <RevealOnScroll key={id}>
            <div 
                className="group relative bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-900/10 hover:bg-white dark:hover:bg-slate-900/90 hover:-translate-y-1"
            >
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                    <div className="flex-1">
                        <span className="text-blue-600 dark:text-blue-500 font-medium text-sm tracking-wider uppercase mb-2 block">{category}</span>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-3xl">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {stack.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-700 font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <a 
                            href={github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:translate-x-1 shadow-md hover:shadow-lg"
                        >
                            View Code <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;
