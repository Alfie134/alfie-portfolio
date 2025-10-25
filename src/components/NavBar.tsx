'use client';

import { usePathname } from "next/navigation";
import Link from "next/link"
import React from "react";

interface NavBarProps {
    color?:string;
}

const NavBar: React.FC<NavBarProps> = ({ color = "#f3f4f6" }) => {
    const pathname = usePathname();

    const links = [
        {href: "/", label: "Home"},
        {href: "about", label: "About Me"},
        {href: "projects", label: "The Project"},
        {href: "progress", label: "Semester Progress"},
        {href: "contact", label: "Contact Me"},
    ];

    return (
        <header 
            className="bg-white shadow-md fixed w-full z-50"
            style={{backgroundColor: color}}>
            <nav className="container mx-auto flex justify-center items-center p-4">
                <ul className="flex space-x-10 text-xl text-[#C2C5AA] font-semibold">
                    {links.map(({href, label}) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                                        isActive
                                            ? "bg-[#A4AC86] text-[#414833]"
                                            : "text-[#C2C5AA] hover:bg-[#656D4A] hover:text-[#C2C5AA]"
                                                }`}>
                                        {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );    
};

export default NavBar;
