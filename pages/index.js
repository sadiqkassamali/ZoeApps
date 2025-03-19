import { useState } from "react";
import Head from "next/head";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = {
  "Automated Testing": [
    "Self-Healing UI Test Cases",
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
  const toggleMode = () => setDarkMode(!darkMode);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Head>
        <title>ZoeApp - High-Performance Solutions</title>
        <meta name="description" content="Discover top enterprise-grade solutions for automated testing, deep fake detection, and software integration." />
        <meta name="keywords" content="Automated Testing, Deep Fake Detection, Software Integration, Enterprise Tools" />
      </Head>

      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">ZoeApps - AI Tools</h1>
        <div className="space-x-4">
          <Button onClick={toggleMode}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
          <Button onClick={() => signIn("github")}>Login with GitHub</Button>
          <Button onClick={() => signIn("google")}>Login with Google</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Our Products</h2>
          {Object.entries(products).map(([category, items], index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">{category}</h3>
              <Slider {...settings}>
                {items.map((product, idx) => (
                  <div key={idx} className="px-4">
                    <Card className="p-6 shadow-xl hover:shadow-2xl transition">
                      <CardContent>
                        <h4 className="text-xl font-semibold mb-2">{product}</h4>
                        <p>High-performance tools built for enterprise-grade solutions.</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-10">
        <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">Get in Touch</h3>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a href="mailto:sadiqkassamali@gmail.com" className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span>sadiqkassamali@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/sadiqkassamali/" target="_blank" className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-700" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/sadiqkassamali" target="_blank" className="flex items-center space-x-2">
            <FaGithub className="text-gray-700 dark:text-white" />
            <span>GitHub</span>
          </a>
          <a href="tel:9194911498" className="flex items-center space-x-2">
            <FaPhone className="text-green-500" />
            <span>+1 (919) 491-1498</span>
          </a>
        </div>
      </section>

      {/* CTA Buttons */}
      <div className="text-center mt-10 space-x-4">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">
          <a href="/pricing">View Pricing</a>
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
          <a href="/request-demo">Request a Demo</a>
        </Button>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-sm bg-gray-900 text-white mt-10">
        Built with precision and passion in the USA 🇺🇸 | Urgency. Accountability. Innovation.
      </footer>
    </div>
  );
}
