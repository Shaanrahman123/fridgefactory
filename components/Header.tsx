"use client"; // We need this for the mobile menu toggle (useState)

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react"; // Nice icons

// Product list from your image
const products = [
    { name: "Cold Storage Room", href: "/products/cold-storage" },
    { name: "Cold Room", href: "/products/cold-room" },
    { name: "Pre Fabricated Walk In Freezer", href: "/products/walk-in-freezer" },
    { name: "Banana Ripening Chambers", href: "/products/banana-ripening" },
    { name: "Ice Cream Cold Storage Room", href: "/products/ice-cream-storage" },
    { name: "Cold Room Indoor Unit", href: "/products/indoor-unit" },
    { name: "Fruit Ripening Chamber", href: "/products/fruit-ripening" },
    { name: "Walk In Chiller Room", href: "/products/chiller-room" },
    { name: "Chiller Room", href: "/products/chiller-room-alt" },
    { name: "Blast Freezers", href: "/products/blast-freezers" },
    { name: "Mushroom Cold Room", href: "/products/mushroom-room" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-50 w-full bg-transparent text-white">
            {/* Top bar for contact info - hidden on small screens */}
            <div className="hidden lg:block bg-black bg-opacity-20 py-2 text-sm">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div>
                        <span className="opacity-80">Hello, Welcome to AZ Refrigeration!</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <span className="opacity-80">An ISO 9001:2015 Certified Co.</span>
                        <a href="tel:+919654572626" className="flex items-center hover:text-blue-300 transition-colors">
                            <Phone size={14} className="mr-2" />
                            +91 96545 72626
                        </a>
                        <a href="tel:+917011682627" className="flex items-center hover:text-blue-300 transition-colors">
                            <Phone size={14} className="mr-2" />
                            +91 70116 82627
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white" data-aos="fade-right">
                    {/* Using text logo, you can replace with <Image> */}
                    AZ REFRIGERATION
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link href="/" className="hover:text-blue-300 transition-colors" data-aos="fade-down" data-aos-delay="100">Home</Link>
                    <Link href="/about" className="hover:text-blue-300 transition-colors" data-aos="fade-down" data-aos-delay="200">About Us</Link>

                    {/* Products Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center hover:text-blue-300 transition-colors" data-aos="fade-down" data-aos-delay="300">
                            Our Products
                            <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute left-0 mt-2 w-72 bg-white text-black shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {products.map((product, index) => (
                                <Link key={index} href={product.href} className="block px-5 py-3 hover:bg-gray-100 text-sm">
                                    {index + 1}. {product.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/contact" className="hover:text-blue-300 transition-colors" data-aos="fade-down" data-aos-delay="400">Contact Us</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu (Dropdown) */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-blue-900 bg-opacity-95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}
            >
                <div className="container mx-auto px-6 flex flex-col space-y-4">
                    <Link href="/" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>

                    {/* Mobile Products */}
                    <div className="py-2">
                        <button
                            onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                            className="w-full flex justify-between items-center"
                        >
                            Our Products
                            <ChevronDown size={20} className={`transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-4 mt-2 overflow-hidden transition-all duration-300 ${isProductDropdownOpen ? 'max-h-screen' : 'max-h-0'}`}>
                            {products.map((product, index) => (
                                <Link key={index} href={product.href} className="block py-2 text-sm opacity-90" onClick={() => setIsMobileMenuOpen(false)}>
                                    {product.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/contact" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>

                    <hr className="opacity-20" />

                    {/* Mobile Contact Info */}
                    <div className="flex flex-col space-y-3 pt-4 text-sm">
                        <a href="tel:+919654572626" className="flex items-center">
                            <Phone size={14} className="mr-2" />
                            +91 96545 72626
                        </a>
                        <a href="tel:+917011682627" className="flex items-center">
                            <Phone size={14} className="mr-2" />
                            +91 70116 82627
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}