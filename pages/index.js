import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = {
  "Automated Testing": [
    "AI-Powered Gherkin Test Automation",
    "Performance Testing via Gherkin",
    "Gherkin Web Editor & Runner",
  ],
  "Deep Fake Detection": [
    "Deep Fake Audio Detection",
    "Deep Fake Video & Audio Detection",
    "Multi-Model AI Analysis",
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
        <meta name="description" content="Advanced AI-powered solutions for automated testing, performance testing, and deep fake detection. Seamless integration with industry-standard tools." />
        <meta name="keywords" content="AI testing, cucumber, karate, gherkin, jmx, performance UI testing, deep fake detection, multi-model AI, spring boot, java, python, react, scala, jmeter, taurus, windows, linux, API performance testing" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-500">
        <button onClick={() => setDarkMode(!darkMode)} className="absolute top-5 right-5 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md">{darkMode ? "Light Mode" : "Dark Mode"}</button>
        <img src="/logo.png" alt="Zoe Apps, LLC Logo" className="w-48 mb-6" />
        <h1 className="text-4xl font-bold text-center">Advanced AI Testing & Deep Fake Detection Solutions</h1>
        <motion.div className="mt-6 w-full max-w-2xl overflow-hidden whitespace-nowrap"
          animate={{ x: [0, -100, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
          <div className="flex space-x-6">
            {Object.values(categories).flat().map((feature, index) => (
              <div key={index} className="text-lg font-semibold text-blue-600">
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
        <nav className="mt-6 space-x-6">
          <Link href="/pricing" className="text-blue-600 text-lg font-semibold">Pricing</Link>
          {session && <Link href="/demo" className="text-blue-600 text-lg font-semibold">Demo</Link>}
          <Link href="/contact" className="text-blue-600 text-lg font-semibold">Contact Us</Link>
        </nav>
        {!session ? (
          <button
            onClick={() => signIn()}
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700"
          >
            Sign in with Google/GitHub
          </button>
        ) : (
          <div className="mt-6 text-center">
            <p className="text-lg">Welcome, {session.user.name}!</p>
            <button
              onClick={() => signOut()}
              className="mt-3 px-6 py-3 bg-red-600 text-white text-lg rounded-lg shadow-md hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        )}
        <section className="mt-10 bg-gray-200 dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-3xl transition-all duration-500">
          <h2 className="text-2xl font-bold">Pricing</h2>
          {Object.entries(categories).map(([category, products]) => (
            <div key={category} className="mt-6">
              <h3 className="text-xl font-semibold">{category}</h3>
              <ul className="mt-2 text-lg">
                {products.map((product, idx) => (
                  <li key={idx}><strong>{product}:</strong> Custom pricing available</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <footer className="mt-10">
          <p className="text-lg font-semibold">Follow us for updates:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com" className="text-blue-600">LinkedIn</a>
            <a href="https://x.com" className="text-blue-600">X</a>
            <a href="https://github.com" className="text-blue-600">GitHub</a>
            <a href="https://stackoverflow.com" className="text-blue-600">Stack Overflow</a>
            <a href="https://facebook.com" className="text-blue-600">Facebook</a>
            <a href="https://medium.com" className="text-blue-600">Medium</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
