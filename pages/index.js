import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const categories = {
  "Automated Testing": [
    "Self Healing UI Test Cases",
    "AI-Powered Gherkin Test Automation",
    "Performance Testing via Gherkin",
    "Gherkin Web Editor & Runner",
  ],
  "Deep Fake Detection": [
    "Deep Fake Audio Detection",
    "Deep Fake Video & Audio Detection",
    "Multi-Model AI Analysis",
    "Visualization of audio and video files."
  ],
  "Integration & Development": [
    "Spring Boot, Java, Python, React, Scala",
    "Performance Testing with JMeter, Taurus",
    "Windows & Linux Compatibility",
  ]
};

export default function Home() {
  const sessionResponse = useSession();
  const session = sessionResponse?.data || null;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Head>
        <title>AI Testing & Deep Fake Detection | Zoe Apps, LLC</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-500">
        <button onClick={() => setDarkMode(!darkMode)} className="absolute top-5 right-5 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className="text-5xl font-extrabold text-center tracking-wide text-blue-700 dark:text-blue-300">Next-Gen AI Testing & Deep Fake Detection</h1>
        <motion.div className="mt-6 w-full max-w-2xl overflow-hidden whitespace-nowrap" animate={{ x: [0, -100, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
          <div className="flex space-x-6">
            {Object.values(categories).flat().map((feature, index) => (
              <div key={index} className="text-lg font-semibold text-blue-500 dark:text-blue-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
        <nav className="mt-6 space-x-6">
          <Link href="/pricing" legacyBehavior><a className="text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform">Pricing</a></Link>
          {session && <Link href="/demo" legacyBehavior><a className="text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform">Demo</a></Link>}
          <Link href="/contact" legacyBehavior><a className="text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-pink-600 px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform">Contact Us</a></Link>
        </nav>
      </div>
    </div>
  );
}
