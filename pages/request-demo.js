"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

// UI Components
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "../components/ui/select";

// Constants
const PRODUCTS = [
    "Automated Testing",
    "Deep Fake Detection",
    "Integration & Development",
];

// Utility: Generate time slots between start and end
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
    const [product, setProduct] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = () => {
        if (!product || !date || !time) {
            toast.error("Please select all options.");
            return;
        }

        toast.success(`Demo requested for ${product} on ${date} at ${time}`);
        // Optional: API call here
    };

    return (
        <div className="max-w-xl mx-auto py-10">
            <Card>
                <CardContent className="space-y-6 pt-6">
                    <h2 className="text-2xl font-bold text-center">Request a Demo</h2>

                    {/* Product Selection */}
                    <div className="space-y-2">
                        <Label>Select a Product</Label>
                        <Select onValueChange={setProduct}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a product" />
                            </SelectTrigger>
                            <SelectContent>
                                {PRODUCTS.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Date Input */}
                    <div className="space-y-2">
                        <Label>Select a Date</Label>
                        <Input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    {/* Time Slot Selection */}
                    <div className="space-y-2">
                        <Label>Select a Time Slot</Label>
                        <Select onValueChange={setTime}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a time slot" />
                            </SelectTrigger>
                            <SelectContent>
                                {TIME_SLOTS.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                        {slot}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full" onClick={handleSubmit}>
                        Submit Request
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
