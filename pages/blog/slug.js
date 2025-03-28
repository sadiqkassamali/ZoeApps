import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaUser, FaMoon, FaSun, FaEnvelope } from "react-icons/fa";

export default function BlogPost() {
  const [darkMode, setDarkMode] = useState(false);

  // Blog metadata for SEO and display
  const blogData = {
    title: "Provenance & Inference: How AI Detects Deepfakes",
    description: "Explore how AI-powered inference systems are transforming digital media verification and how provenance tracking helps prevent deepfake fraud and misinformation.",
    author: "ZoeApps AI Team",
    date: "February 25, 2025",
    readTime: "5 min read",
    category: "AI Security",
    keywords: "deepfake detection, AI inference, media provenance, digital content verification, AI security, media manipulation",
    image: "/images/blog-header.jpg",
    imageAlt: "AI analyzing digital media for authenticity"
  };

  return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>{blogData.title} | ZoeApps Blog</title>
          <meta name="description" content={blogData.description} />
          <meta name="author" content={blogData.author} />
          <meta name="keywords" content={blogData.keywords} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={blogData.title} />
          <meta property="og:description" content={blogData.description} />
          <meta property="og:image" content={`https://zoeapps.com${blogData.image}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={blogData.title} />
          <meta property="twitter:description" content={blogData.description} />
          <meta property="twitter:image" content={`https://zoeapps.com${blogData.image}`} />

          {/* Structured data for Google */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": blogData.title,
                  "image": `https://zoeapps.com${blogData.image}`,
                  "datePublished": "2025-02-25T08:00:00+08:00",
                  "dateModified": "2025-02-25T09:20:00+08:00",
                  "author": {
                    "@type": "Organization",
                    "name": "ZoeApps"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "ZoeApps",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://zoeapps.com/logo.png"
                    }
                  },
                  "description": blogData.description
                })
              }}
          />

          {/* Canonical URL */}
          <link rel="canonical" href="https://zoeapps.com/blog/provenance-and-inference" />
        </Head>

        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          {/* Header */}
          <header className="p-4 md:p-6 flex justify-between items-center shadow-md bg-white dark:bg-gray-800 sticky top-0 z-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">ZoeApps Blog</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/products" className="hidden md:inline-block hover:text-blue-500">Products</Link>
              <Link href="/pricing" className="hidden md:inline-block hover:text-blue-500">Pricing</Link>
              <Link href="/pages/request-demo" className="hidden md:inline-block hover:text-blue-500">Request Demo</Link>
              <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </header>

          {/* Blog Container */}
          <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            {/* Blog Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                <Link href="/blog/category/ai-security" className="hover:underline">
                  {blogData.category}
                </Link>
                <span>•</span>
                <span className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                  {blogData.date}
              </span>
                <span>•</span>
                <span>{blogData.readTime}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {blogData.title}
              </h1>

              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <FaUser className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium">By {blogData.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                  src={blogData.image}
                  alt={blogData.imageAlt}
                  fill
                  style={{objectFit: "cover"}}
                  priority
                  className="rounded-lg shadow-md"
              />
            </div>

            {/* Blog Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl">
                AI-powered inference systems are transforming the way we analyze and verify digital media.
                Provenance tracking is an essential part of this process, especially as deepfakes become increasingly sophisticated.
              </p>

              <h2 id="understanding-ai-inference">Understanding AI Inference</h2>
              <p>
                AI inference is the process of applying a trained model to new data in real-time.
                It allows machines to make predictions and generate insights dynamically. At ZoeApps, our inference
                engines can process media files in milliseconds to determine authenticity.
              </p>

              <h3 id="role-of-provenance">The Role of Provenance</h3>
              <p>
                Media provenance helps in tracking the origins of digital content to prevent misinformation and deepfake fraud.
                Our technology creates a secure chain of custody for digital assets from creation to distribution.
              </p>

              <ul>
                <li><strong>Data authenticity verification</strong> - Cryptographic signatures that validate content hasn't been altered</li>
                <li><strong>Deepfake detection with AI models</strong> - Multi-layered neural networks that identify manipulation markers</li>
                <li><strong>Security against media manipulation</strong> - Real-time scanning of incoming media for signs of tampering</li>
              </ul>

              <p>
                The combination of robust inference models and comprehensive provenance tracking creates a powerful
                shield against the rising tide of synthetic media. Our systems don't just detect deepfakes—they
                provide detailed analysis of how the content was manipulated.
              </p>

              <p>
                Want to learn more about how our technology can protect your organization?
                <Link href="/research" className="text-blue-600 dark:text-blue-400 hover:underline"> Check out our research here</Link>.
              </p>
            </article>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {blogData.keywords.split(', ').map((tag, index) => (
                    <Link
                        key={index}
                        href={`/blog/tag/${tag.replace(/\s+/g, "-").toLowerCase()}`}
                        className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"
                    >
                      {tag}
                    </Link>
                ))}
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-gray-200 py-6 text-center">
            <p>© 2025 ZoeApps | All Rights Reserved</p>
          </footer>
        </div>
      </div>
  );
}
