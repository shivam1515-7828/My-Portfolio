"use client";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        
        setStatus("sending");

        try {
            const response = await fetch("https://formspree.io/f/xjgerjka", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

  return (
    <section id="contact" className="w-full relative bg-white dark:bg-slate-950 py-24 section-padding transition-colors duration-300 overflow-hidden">
        {/* Ambient Background Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-40"></div>

      <div className="grid md:grid-cols-2 gap-16">
        <RevealOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 inline-block relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-600 after:mt-2">Get in Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-lg">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivamhp20@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:bg-slate-50 dark:hover:bg-slate-900/80 p-4 -mx-4 rounded-xl transition-colors duration-300">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email</p>
                <p className="text-blue-600 dark:text-blue-500 text-lg group-hover:underline transition-colors">
                  shivamhp20@gmail.com
                </p>
              </div>
            </a>

            <a href="https://maps.google.com/?q=Barsar,+Hamirpur+(H.P.),+India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:bg-slate-50 dark:hover:bg-slate-900/80 p-4 -mx-4 rounded-xl transition-colors duration-300">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Location</p>
                <p className="text-slate-800 dark:text-slate-200 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                  Barsar, Hamirpur (H.P.), India
                </p>
              </div>
            </a>

            <a href="https://github.com/shivam1515-7828" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:bg-slate-50 dark:hover:bg-slate-900/80 p-4 -mx-4 rounded-xl transition-colors duration-300">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaGithub size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">GitHub</p>
                <p className="text-slate-800 dark:text-slate-200 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                  github.com/shivam1515-7828
                </p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/shivam-sharma-a285142b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:bg-slate-50 dark:hover:bg-slate-900/80 p-4 -mx-4 rounded-xl transition-colors duration-300">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaLinkedin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">LinkedIn</p>
                <p className="text-slate-800 dark:text-slate-200 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                  Connect on LinkedIn
                </p>
              </div>
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="bg-slate-50 dark:bg-slate-900/80 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-shadow duration-300">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
              <textarea 
                name="message" 
                rows="4" 
                required
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 resize-none"
                placeholder="Hello, I'd like to discuss a project..."
              ></textarea>
            </div>

            <button 
                type="submit"
                disabled={status === "sending"}
                className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 mt-2 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="text-green-600 dark:text-green-400 font-medium text-center">
                    Message sent successfully! I'll get back to you soon.
                </p>
            )}
            {status === "error" && (
                <p className="text-red-600 dark:text-red-400 font-medium text-center">
                    Oops! Something went wrong. Please try again.
                </p>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
