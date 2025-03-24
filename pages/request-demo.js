"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
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

const products = [
    "Automated Testing",
    "Deep Fake Detection",
    "Integration & Development",
];

function generateTimeSlots(start, end, interval) {
    const slots = [];
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    const startDate = new Date(0, 0, 0, startHour, startMinute);
    const endDate = new Date(0, 0, 0, endHour, endMinute);

    let current = new Date(startDate);

    while (current <= endDate) {
        const hours = current.getHours();
        const minutes = current.getMinutes();
        const ampm = hours < 12 ? "AM" : "PM";
        const formattedHours = (hours % 12) || 12;
        const timeString = `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm} CST`;
        slots.push(timeString);
        current.setMinutes(current.getMinutes() + interval);
    }

    return slots;
}

const timeSlots = generateTimeSlots("08:00", "16:30", 45);

export default function RequestDemo() {
    const [product, setProduct] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [date, setDate] = useState("");

    const handleDemoSubmit = () => {
        if (!product || !timeSlot || !date) {
            toast.error("Please select all options.");
            return;
        }

        toast.success(`Demo requested for ${product} on ${date} at ${timeSlot}`);
        // You can add API submission logic here
    };

    return (
        <div className="max-w-xl mx-auto py-10">
            <Card>
                <CardContent className="space-y-6 pt-6">
                    <h2 className="text-2xl font-bold text-center">Request a Demo</h2>

                    <div className="space-y-2">
                        <Label>Select a Product</Label>
                        <Select onValueChange={setProduct}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a product" />
                            </SelectTrigger>
                            <SelectContent>
                                {products.map((prod) => (
                                    <SelectItem key={prod} value={prod}>
                                        {prod}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Select a Date</Label>
                        <Input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Select a Time Slot</Label>
                        <Select onValueChange={setTimeSlot}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a time slot" />
                            </SelectTrigger>
                            <SelectContent>
                                {timeSlots.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                        {slot}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <Button className="w-full" onClick={handleDemoSubmit}>
                        Submit Request
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
