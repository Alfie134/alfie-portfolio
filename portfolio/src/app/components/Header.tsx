import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-300 via-pink-200 to-blue-200 shadow-md fixed w-full z-50">
            <nav className="max-w-5xl mx-auto px-4 py-4">
                <ul className="flex justify-center space-x-8 font-semibold -text-brown-800">
                    <li><Link href="/" className="hover:text-purple-600 transiton-colors duration-300"> Home </Link></li>
                    <li><Link href="/about" className="hover:text-purple-600 transiton-colors duration-300">About</Link></li>
                    <li><Link href="/projects" className="hover:text-purple-600 transiton-colors duration-300">Projects</Link></li>
                    <li><Link href="/contact" className="hover:text-purple-600 transiton-colors duration-300">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}