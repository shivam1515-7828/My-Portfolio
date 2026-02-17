import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ResumeViewer = () => {
    return (
        <div id="resume-preview" className="w-full relative py-24 section-padding border-t border-slate-200 dark:border-slate-900 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Background Lighting Effect - Dynamic Theme */}
            <div className="absolute inset-0 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-100/50 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="mb-12 text-center">
                     <span className="text-blue-600 dark:text-blue-500 font-medium tracking-wider uppercase text-sm mb-2 block">Resume Preview</span>
                     <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 drop-shadow-sm">
                        Take a Closer Look
                     </h2>
                </div>
                
                <div className="relative w-full max-w-4xl group">
                    {/* Glow Behind Container - Adjusted for Dynamic Theme */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 dark:opacity-20 group-hover:opacity-60 dark:group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="w-full h-[650px] bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10">
                        <iframe 
                            src="/Shivam_Sharma_Resume.pdf" 
                            className="w-full h-full"
                            title="Resume Preview"
                        />
                         {/* Fallback overlay for mobile */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white/95 dark:bg-slate-950/90 flex flex-col items-center justify-center p-8 text-center md:hidden pointer-events-none transition-colors duration-300">
                           <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg font-medium">Preview is optimized for desktop.</p>
                           <p className="text-blue-600 dark:text-blue-500 text-sm mb-6">Please download the PDF to view on mobile.</p>
                           <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center animate-pulse">
                                <MdOutlineFileDownload size={32} className="text-blue-600 dark:text-blue-500" />
                           </div>
                        </div>
                    </div>
                </div>

                <a 
                    href="/Shivam_Sharma_Resume.pdf" 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:scale-105 hover:shadow-blue-600/40 ring-1 ring-blue-500/50"
                >
                    Download Full Resume
                    <MdOutlineFileDownload size={22} />
                </a>
            </div>
        </div>
    );
};

export default ResumeViewer;
