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
  const { data: session } = useSession();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Head>
        <title>AI Testing & Deep Fake Detection | Zoe Apps, LLC</title>
        <meta name="description" content="Advanced AI-powered solutions for automated testing, performance testing, and deep fake detection. Seamless integration with industry-standard tools." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-500">
        <h1 className="text-4xl font-bold text-center">Advanced AI Testing & Deep Fake Detection Solutions</h1>
      </div>
    </div>
  );
}