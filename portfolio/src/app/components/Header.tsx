import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <ul className="flex space-x-6">
                    <li><Link href="/"> Home </Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );    
}