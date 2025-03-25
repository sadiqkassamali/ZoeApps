import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../components/ui/button";

const PRODUCTS = [
    "Automated Testing",
    "Deep Fake Detection",
    "Integration & Development",
];

const generateTimeSlots = (start, end, intervalMinutes) => {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    const slots = [];
    const current = new Date(0, 0, 0, startH, startM);
    const endTime = new Date(0, 0, 0, endH, endM);

    while (current <= endTime) {
        const hours = current.getHours();
        const minutes = current.getMinutes();
        const ampm = hours < 12 ? "AM" : "PM";
        const displayHour = hours % 12 === 0 ? 12 : hours % 12;
        const timeString = `${displayHour}:${minutes
            .toString()
            .padStart(2, "0")} ${ampm} CST`;
        slots.push(timeString);
        current.setMinutes(current.getMinutes() + intervalMinutes);
    }

    return slots;
};

const TIME_SLOTS = generateTimeSlots("08:00", "16:30", 45);

export default function RequestDemo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = () => {
        if (!name || !email || !product || !date || !time) {
            toast.error("Please fill all fields.");
            return;
        }

        const mailtoLink = `mailto:sadiqkassamali@gmail.com?subject=Demo Request: ${product}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AProduct: ${product}%0D%0ADate: ${date}%0D%0ATime: ${time}`;

        // Open the mail client with prefilled details
        window.location.href = mailtoLink;

        toast.success("Demo request submitted!");
    };

    return (
        <div className="max-w-xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-bold text-center">Request a Demo</h2>

            {/* Name */}
            <div className="space-y-2">
                <label>Your Name</label>
                <input
                    type="text"
                    className="border px-4 py-2 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label>Your Email</label>
                <input
                    type="email"
                    className="border px-4 py-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Product Selection */}
            <div className="space-y-2">
                <label>Select a Product</label>
                <select
                    className="border px-4 py-2 w-full"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                >
                    <option value="">Choose a product</option>
                    {PRODUCTS.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* Date */}
            <div className="space-y-2">
                <label>Select a Date</label>
                <input
                    type="date"
                    className="border px-4 py-2 w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            {/* Time Slot */}
            <div className="space-y-2">
                <label>Select a Time Slot</label>
                <select
                    className="border px-4 py-2 w-full"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="">Choose a time</option>
                    {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                            {slot}
                        </option>
                    ))}
                </select>
            </div>

            <Button className="w-full" onClick={handleSubmit}>
                Submit Request
            </Button>
        </div>
    );
}
