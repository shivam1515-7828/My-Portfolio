import React from "react";
import { FaCertificate } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";

const Certifications = () => {
  const certs = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      desc: "Comprehensive full-stack development covering HTML, CSS, JS, Node.js, and MongoDB."
    },
    {
      id: 2,
      title: "MERN Stack Training",
      issuer: "Think Next",
      date: "2023",
      desc: "Intensive training on building scalable web applications with the MERN stack."
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      issuer: "Academic Coursework",
      date: "2022 - Present",
      desc: "Strong theoretical and practical foundation in core computer science principles."
    }
  ];

  return (
    <section id="certifications" className="w-full relative bg-slate-50 dark:bg-slate-950 py-24 section-padding transition-colors duration-300 overflow-hidden">
         {/* Ambient Background Lighting */}
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="grid md:grid-cols-3 gap-12">
        <RevealOnScroll className="md:col-span-1">
             <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Certifications</h2>
             <p className="text-slate-600 dark:text-slate-400 text-lg">
                Continuous learning and professional development achievements.
             </p>
        </RevealOnScroll>

        <RevealOnScroll className="md:col-span-2 flex flex-col gap-6">
            {certs.map(({ id, title, issuer, date, desc }) => (
                <div key={id} className="flex gap-6 p-6 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-blue-900/5 group hover:-translate-x-1">
                    <div className="mt-1">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaCertificate size={20} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h4>
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mt-1 mb-2">
                            <span>{issuer}</span>
                            <span>•</span>
                            <span>{date}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">
                            {desc}
                        </p>
                    </div>
                </div>
            ))}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Certifications;
