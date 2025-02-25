import { useState } from "react";
import Head from "next/head";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

const products = {
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
    "Visualization of audio and video files.",
  ],
  "Integration & Development": [
    "Spring Boot, Java, Python, React, Scala",
    "Performance Testing with Taurus",
    "Windows & Linux Compatibility",
  ],
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Head>
        <title>Enterprise Tools - High-Performance Solutions</title>
        <meta
          name="description"
          content="Discover top enterprise-grade solutions for automated testing, deep fake detection, and software integration."
        />
        <meta
          name="keywords"
          content="Automated Testing, Deep Fake Detection, Software Integration, Enterprise Tools"
        />
      </Head>

      {/* Navbar */}
      <header className="p-6 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-extrabold tracking-tight">Enterprise Tools</h1>
        <div className="flex space-x-4">
          <Button className="bg-gray-800 text-white" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
          <Button className="bg-gray-800 text-white" onClick={() => signIn("github")}>
            Login with GitHub
          </Button>
          <Button className="bg-gray-800 text-white" onClick={() => signIn("google")}>
            Login with Google
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[500px] bg-gradient-to-br from-purple-600 to-indigo-500 text-white text-center">
        <div className="z-10 max-w-3xl">
          <motion.h2
            className="text-5xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            AI-Powered Testing & Automation
          </motion.h2>
          <p className="mt-4 text-lg">
            Enterprise-grade solutions to supercharge your testing and automation workflows.
          </p>
          <div className="mt-6 space-x-4">
            <Button className="px-6 py-3 text-lg bg-white text-indigo-600 shadow-lg">
              Get Started
            </Button>
            <Button className="px-6 py-3 text-lg bg-gray-800 text-white">Learn More</Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 opacity-40"></div>
      </section>

      {/* Products Section */}
      <main className="p-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(products).map(([category, items], index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((product, idx) => (
                    <li key={idx} className="text-lg flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm bg-gray-900 text-gray-400">
        <p>
          MADE IN USA by a PERSON IN USA who understands urgency and accountability with passion.
        </p>
      </footer>
    </div>
  );
}
