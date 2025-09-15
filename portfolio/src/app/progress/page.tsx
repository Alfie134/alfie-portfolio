'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const weeks = [
    { label: "August 18th – 24th ", content: "We started with XYZ..." },
    {label: "August 25th – 31st ", content: "Built the ABC..." },
    { label: "September 8th – 14th", content: "Learned how to connect..." },
    { label: "September 15th – 21st ", content: ""},
  // Add more weeks here
];


export default function ProgressPage() {
    const[openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
        bg-gradient-to-b from-[#f4d3be] to-[#feddf1] text-center">
            
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center -mt-40">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                    style={{ color: "#50250c" }}
                >
                    Our progress during the semester
                </motion.h1>
            </div>

            {/* Description Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-2xl font-bold text-center mb-16"
                    style={{ color: "#50250c" }}
                >
                    The progress of how this semester has unfolded will be divided into the weeks throught the months. 
                </motion.p>

            {/*Dropdown Section*/}
            <div className="max-w-3xl mx-auto space-y-4 my-16">
                {weeks.map((week, index) => (
                    <div key={index} className="border rounded-lg shadow-sm bg-white overflow-hidden">
                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            className="w-full flex justify-between items-center p-4 font-semibold 
                                hover:bg-gray-100 transition-colors duration-200">
                                    {week.label}
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{duration: 0.3, ease: "easeOut"}}
                                        className="inline-block">
                                        ▼
                                    </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="p-4 border-t text-gray-700"
                                        >
                                            {week.content}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
        </section>
    )
}