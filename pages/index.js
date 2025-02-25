import { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Head>
        <title>Enterprise Tools - High-Performance Solutions</title>
        <meta name="description" content="Discover top enterprise-grade solutions for automated testing, deep fake detection, and software integration." />
        <meta name="keywords" content="Automated Testing, Deep Fake Detection, Software Integration, Enterprise Tools" />
      </Head>
      <header className="p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">Enterprise Tools</h1>
        <div>
          <Button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</Button>
          <Button onClick={() => signIn("github")}>Login with GitHub</Button>
          <Button onClick={() => signIn("google")}>Login with Google</Button>
        </div>
      </header>
      <main className="p-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
          {Object.entries(products).map(([category, items], index) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((product, idx) => (
                  <Card key={idx} className="p-6 shadow-xl hover:shadow-2xl transition">
                    <CardContent>
                      <h4 className="text-xl font-semibold mb-2">{product}</h4>
                      <p>High-performance tools built for enterprise-grade solutions.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </main>
      <footer className="p-4 text-center text-sm border-t mt-8">
        MADE IN USA by a PERSON IN USA who understands urgency and accountability with passion.
      </footer>
    </div>
  );
}
