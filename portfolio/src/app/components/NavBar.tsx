import Link from "next/link"
import React from "react";

interface NavBarProps {
    color?:string;
}

const NavBar: React.FC<NavBarProps> = ({ color = "#f3f4f6" }) => {

    return (
        <header 
        className="bg-white shadow-md fixed w-full z-50"
        style={{backgroundColor: color}}>
            <nav className="container mx-auto flex justify-between items-center p-4">
                <ul className="flex space-x-6">
                    <li><Link href="/"> Home </Link></li>
                    <li><Link href="/about">About Me</Link></li>
                    <li><Link href="/projects">Semester Progress</Link></li>
                    <li><Link href="/projects">The Project</Link></li>
                    <li><Link href="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );    
}

export default NavBar;
