"use client";
import { useState, useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import { SiReact, SiNodedotjs, SiNextdotjs, SiMongodb } from "react-icons/si";
import RevealOnScroll from "./RevealOnScroll";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["MERN Stack Developer", "Full Stack Engineer", "React Specialist", "UI/UX Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <div
      id="home"
      className="w-full h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden flex items-center transition-colors duration-300"
    >
      {/* Abstract Background Element - Dynamic Theme */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl -z-10 opacity-50 animate-float"></div>
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl -z-10 opacity-50 animate-float animate-delay-700"></div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-[10%] text-blue-400/20 dark:text-blue-500/10 animate-float animate-delay-100 blur-[1px]">
        <SiReact size={60} />
      </div>
      <div className="absolute bottom-20 right-[10%] text-green-500/20 dark:text-green-500/10 animate-float animate-delay-500 blur-[1px]">
        <SiNodedotjs size={50} />
      </div>
      <div className="absolute top-40 right-[20%] text-slate-800/10 dark:text-slate-100/5 animate-float animate-delay-300 blur-[1px]">
        <SiNextdotjs size={55} />
      </div>
      <div className="absolute bottom-40 left-[20%] text-green-600/20 dark:text-green-500/10 animate-float animate-delay-700 blur-[1px]">
        <SiMongodb size={50} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8 items-center">
        <RevealOnScroll className="flex flex-col justify-center">
          <p className="text-blue-600 dark:text-blue-500 font-medium tracking-wide mb-4 animate-fade-in-up">Hello, I'm</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight leading-tight animate-fade-in-up animate-delay-100">
            Shivam Sharma<span className="text-blue-600 dark:text-blue-500">.</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-400 font-medium mb-6 animate-fade-in-up animate-delay-200 min-h-[40px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {text}
            </span>
            <span className="text-blue-600 animate-pulse">|</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mb-10 leading-relaxed animate-fade-in-up animate-delay-300">
            I build scalable full-stack applications and solve complex problems with clean, efficient code. Passionate about creating high-performance digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-500">
            <a
              href="#projects"
              className="group relative px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              View Projects
              <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
            <a
              href="/Shivam_Sharma_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-600/10 transition-all duration-300 hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </RevealOnScroll>

        {/* Right Side Visual */}
        <div className="hidden md:flex justify-end relative animate-fade-in-up animate-delay-500">
             <div className="relative w-full max-w-md aspect-square bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/20 dark:border-slate-800 p-8 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group hover:shadow-blue-500/20 dark:hover:shadow-blue-900/30 ring-1 ring-slate-900/5 dark:ring-white/10">
                {/* Visual Header */}
                <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* Code Block */}
                <div className="space-y-3 font-mono text-sm text-slate-600 dark:text-slate-400">
                    <p><span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-yellow-600 dark:text-yellow-200">developer</span> = <span className="text-purple-600 dark:text-purple-400">{`{`}</span></p>
                    <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">"Shivam Sharma"</span>,</p>
                    <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">"Software Engineer"</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-600 dark:text-green-400">"React"</span>, <span className="text-green-600 dark:text-green-400">"Node.js"</span>],</p>
                    <p className="pl-4 border-l-2 border-blue-500/50 bg-blue-50/50 dark:bg-blue-500/10 w-fit pr-2 animate-pulse">hardWorker: <span className="text-orange-600 dark:text-orange-400">true</span></p>
                    <p><span className="text-purple-600 dark:text-purple-400">{`}`}</span>;</p>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
