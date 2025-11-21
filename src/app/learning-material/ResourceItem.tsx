'use client'

import { useState } from "react"

interface ResourceProps {
    name: string;
    items: {
        title: string;
        description: string;
        url: string;
    } [];
}

export default function ResourceItem ({name, items}: ResourceProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-4">
            <div className={`flex justify-between items-center cursor-pointer p-4 rounded-xl border-2 transition-all
                ${ open ? "bg-[#668052] text-white" : "bg-gray-100 border-[#2D3824]"}`}
                onClick={() => setOpen(!open)}
            >
                <span className="font-semibold">{name}</span>
                <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
            </div>
            <div className={`overflow-hidden transition-all bg-white rounded-b-xl
                ${open ? "max-h-[800] p-4 border border-[#2D3824] border-t-0" : "max-h-0 p-0"}`}
            >
                <div className="flex flex-col gap-4">
                    {items.map((item, i) => (
                        <div key={i} className="border-1-4 border-indigo-500 p-4 bg-[#94AD7F] rounded-lg">
                            <h3 className="font-bold text-[#423E33] hover:underline">
                                <a href={item.title} target="_blank" rel="noreferrer">
                                    {item.title} ↗
                                </a>
                            </h3>
                            <p className="text-[#5C5647] text-sm"> {item.description} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}