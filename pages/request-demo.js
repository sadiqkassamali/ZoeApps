import { useState } from "react";
import Head from "next/head";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaCalendarAlt, FaClock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RequestDemo() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(!darkMode);
  
  // Demo request form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  // Available time slots
  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  // Products list
  const products = [
    "Automated Testing",
    "Deep Fake Detection",
    "Integration & Development"
  ];

  // Handle demo request submission
  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Here you would typically send the data to your API endpoint
      // This is a placeholder for the actual API call
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          product,
          message,
          date: date ? format(date, 'PP') : '',
          timeSlot,
          recipientEmail: 'sadiqkassamali@gmail.com'
        }),
      });
      
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      toast.success("Demo request submitted successfully! We'll be in touch soon.");
      
      // Reset form after successful submission
      setTimeout(() => {
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setProduct("");
        setMessage("");
        setDate(null);
        setTimeSlot("");
        setSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setSubscribing(true);
    
    try {
      // Here you would typically send the data to your API endpoint
      // This is a placeholder for the actual API call
      const response = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
          recipientEmail: 'sadiqkassamali@gmail.com'
        }),
      });
      
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubscribed(true);
      toast.success("You've been successfully subscribed to our newsletter!");
      
      // Reset form after successful submission
      setTimeout(() => {
        setNewsletterEmail("");
        setSubscribed(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error("There was an error subscribing to the newsletter. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Head>
        <title>Request a Demo - ZoeApp</title>
        <meta name="description" content="Schedule a personalized demo of ZoeApp's enterprise-grade AI solutions." />
      </Head>

      <ToastContainer position="top-right" theme={darkMode ? "dark" : "light"} />

      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">ZoeApps - AI Tools</h1>
        <div className="space-x-4">
          <Button onClick={toggleMode}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Request a Personalized Demo</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how ZoeApps can transform your workflow with our cutting-edge AI tools. 
            Schedule a one-on-one demo with our product specialists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Request Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Schedule Your Demo</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll contact you to confirm your demo session.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="John Doe" 
                        required 
                        disabled={submitting || submitted}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="john@example.com" 
                        required 
                        disabled={submitting || submitted}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input 
                        id="company" 
                        value={company} 
                        onChange={(e) => setCompany(e.target.value)} 
                        placeholder="Acme Inc." 
                        required 
                        disabled={submitting || submitted}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="+1 (123) 456-7890" 
                        disabled={submitting || submitted}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Product of Interest *</Label>
                    <Select 
                      value={product} 
                      onValueChange={setProduct} 
                      disabled={submitting || submitted}
                      required
                    >
                      <SelectTrigger id="product">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((prod) => (
                          <SelectItem key={prod} value={prod}>{prod}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                            disabled={submitting || submitted}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeSlot">Preferred Time *</Label>
                      <Select 
                        value={timeSlot} 
                        onValueChange={setTimeSlot} 
                        disabled={submitting || submitted}
                        required
                      >
                        <SelectTrigger id="timeSlot">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Let us know about your specific needs or questions..." 
                      rows={4}
                      disabled={submitting || submitted}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6"
                    disabled={submitting || submitted}
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : submitted ? (
                      <span className="flex items-center">
                        <CheckCircle className="mr-2" />
                        Submitted!
                      </span>
                    ) : (
                      "Schedule My Demo"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* What to Expect Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Personalized Demo</h3>
                    <p className="text-gray-600 dark:text-gray-300">A tailored demonstration of our products based on your specific needs and use cases.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <FaClock className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">30-45 Minute Session</h3>
                    <p className="text-gray-600 dark:text-gray-300">A focused session with plenty of time for questions and discussion about implementation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Follow-up Resources</h3>
                    <p className="text-gray-600 dark:text-gray-300">We'll send you documentation, case studies, and pricing information after the demo.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Stay Updated</CardTitle>
                <CardDescription className="text-blue-100">
                  Subscribe to our newsletter for the latest updates on AI technology and product releases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-100"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      disabled={subscribing || subscribed}
                    />
                    <Button 
                      type="submit" 
                      className="bg-white text-indigo-600 hover:bg-blue-50"
                      disabled={subscribing || subscribed}
                    >
                      {subscribing ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0
