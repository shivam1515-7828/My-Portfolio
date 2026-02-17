import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shivam Sharma | MERN Stack Developer",
  description: "Portfolio of Shivam Sharma - MERN Stack Developer and Computer Science Engineer. Specializing in building scalable full-stack web applications with React, Node.js, and MongoDB.",
  keywords: ["MERN Stack", "Full Stack Developer", "React Developer", "Node.js", "Shivam Sharma Portfolio", "Software Engineer"],
  openGraph: {
    title: "Shivam Sharma | MERN Stack Developer",
    description: "Building scalable full-stack applications with clean code.",
    url: "https://shivamsharma.dev",
    siteName: "Shivam Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-200 bg-grid-pattern`}>
        {children}
      </body>
    </html>
  );
}
