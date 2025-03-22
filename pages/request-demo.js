import { useState } from "react";
import Head from "next/head";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RequestDemo() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(!darkMode);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const products = [
    "Automated Testing",
    "Deep Fake Detection",
    "Integration & Development",
  ];

const timeSlots = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM"
];

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          product,
          message,
          date: date ? format(date, "PP") : "",
          timeSlot,
          recipientEmail: "sadiqkassamali@gmail.com",
        }),
      });

      await new Promise((r) => setTimeout(r, 1000));

      setSubmitted(true);
      toast.success("Demo request submitted!");

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
      toast.error("Submission failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Head>
        <title>Request a Demo - ZoeApp</title>
        <meta name="description" content="Schedule a personalized demo of ZoeApp's enterprise-grade AI solutions." />
      </Head>

      <ToastContainer position="top-right" theme={darkMode ? "dark" : "light"} />

      <header className="p-6 flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">ZoeApps - AI Tools</h1>
        <Button onClick={toggleMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </header>

      <main className="p-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">Request a Demo</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Let us show you how ZoeApps can transform your enterprise workflow.
          </p>
        </motion.div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Schedule Your Demo</CardTitle>
            <CardDescription>We’ll contact you to confirm.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDemoSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required disabled={submitting || submitted} />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={submitting || submitted} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company *</Label>
                  <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} required disabled={submitting || submitted} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={submitting || submitted} />
                </div>
              </div>

              <div>
                <Label>Product *</Label>
                <Select value={product} onValueChange={setProduct} disabled={submitting || submitted} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                        disabled={submitting || submitted}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} />
                    </PopoverContent>
                  </Popover>
                </div>

               <div>
                <Label>Time Slot *</Label>
                <Select>
                  <SelectTrigger>Select a time</SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              </div>

              <div>
                <Label>Message (Optional)</Label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} disabled={submitting || submitted} />
              </div>

              <CardFooter className="justify-end">
                <Button type="submit" disabled={submitting || submitted}>
                  {submitting ? "Submitting..." : submitted ? "Submitted!" : "Submit Request"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
