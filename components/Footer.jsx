import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivamhp20@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shivam Sharma</a>. All rights reserved.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivamhp20@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
            shivamhp20@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
