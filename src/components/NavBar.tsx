'use client';

import { usePathname } from "next/navigation";
import Link from "next/link"
import React from "react";

interface NavBarProps {
    color?:string;
}

const NavBar: React.FC<NavBarProps> = ({ color = "transparent" }) => {
    const pathname = usePathname();

    const linksLeft = [
        {href: "/", label: "Home"},
        {href: "../about", label: "About Me"}
    ]

    const linksRight = [
        {href: "../projects", label: "Work & Play"},
        {href: "../contact", label: "Reach Out"}
    ];

    const linkClass = (href: string) => {
        const isActive = pathname === href || pathname.startsWith(href + '/');
        return `px-4 py-2 rounded-full transition-colors duration-300 ${
            isActive
                ? 'text-[#750012]'
            : 'text-[var(--navbar-theme)] hover:bg-[#522323] hover:text-[#C2C5AA]'
        }`;  
    };

    return (
        <header 
            className="fixed w-full z-50 bg-transparent"
            style={{backgroundColor: color}}
        >
            <nav className="mx-auto max-w-6xl px-6 pb-4">
                <div className="flex items-center justify-between">
                    <ul className="flex items-center gap-15 text-xl font-fira-code">
                        {linksLeft.map(({href, label}) => (
                            <li key={href}>
                                <Link href={href} className={linkClass(href)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex items-center gap-10 text-xl">
                        {linksRight.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className={linkClass(href)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );    
};

export default NavBar;
