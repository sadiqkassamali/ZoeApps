import { useState } from "react";
import Head from "next/head";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Switch } from "react-switch";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Pricing() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(!darkMode);
  
  const [billingCycle, setBillingCycle] = useState("yearly");
  
  const pricingPlans = [
    {
      name: "Basic",
      description: "Essential tools for small teams and individual developers",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "1 product of your choice",
        "5 users",
        "Basic support (email)",
        "48-hour response time",
        "Basic documentation"
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Advanced features for growing teams and businesses",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "2 products of your choice",
        "15 users",
        "Priority support (email & chat)",
        "24-hour response time",
        "Advanced documentation",
        "API access",
        "Custom integrations"
      ],
      buttonText: "Go Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      monthlyPrice: 249,
      yearlyPrice: 2490,
      features: [
        "All products included",
        "Unlimited users",
        "Premium support (24/7 phone, email & chat)",
        "4-hour response time",
        "Dedicated account manager",
        "Custom development",
        "On-premise deployment option",
        "Advanced security features",
        "Training sessions"
      ],
      buttonText: "Contact Sales",
      popular: false,
    }
  ];

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Head>
        <title>Pricing - ZoeApp</title>
        <meta name="description" content="Flexible pricing plans for ZoeApp's enterprise-grade solutions." />
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
      <main className="p-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Transparent Pricing for Powerful Tools</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our cutting-edge AI technology.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-lg ${billingCycle === "monthly" ? "font-semibold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
              Monthly
            </span>
            <Switch 
              checked={billingCycle === "yearly"}
              onCheckedChange={() => setBillingCycle(billingCycle === "yearly" ? "monthly" : "yearly")}
              className="data-[state=checked]:bg-indigo-600"
            />
            <span className={`text-lg ${billingCycle === "yearly" ? "font-semibold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
              Yearly <span className="text-green-500 text-sm font-medium">Save 17%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`w-full shadow-xl hover:shadow-2xl transition relative overflow-hidden ${
                plan.popular ? "border-2 border-indigo-500 dark:border-indigo-400" : ""
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        /{billingCycle === "yearly" ? "year" : "month"}
                      </span>
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full py-6 ${
                      plan.popular 
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Can I switch between plans?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Do you offer a free trial?</h3>
                <p className="text-gray-600 dark:text-gray-300">We offer a 14-day free trial for all our plans. No credit card required to start your trial.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">What payment methods do you accept?</h3>
                <p className="text-gray-600 dark:text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Can I get a custom plan?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, we offer custom plans for organizations with specific needs. Contact our sales team to discuss your requirements.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 p-10 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of companies using ZoeApps to improve their workflows and detect deep fakes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-lg">
              Schedule a Demo
            </Button>
          </div>
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

      {/* Footer */}
      <footer className="p-6 text-center text-sm bg-gray-900 text-white mt-10">
        Built with precision and passion in the USA 🇺🇸 | Urgency. Accountability. Innovation.
      </footer>
    </div>
  );
}
