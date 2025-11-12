"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

// Product list (unchanged)
const products = [
    { name: "Cold Storage Room", href: "/products/cold-storage-room" },
    { name: "Cold Room", href: "/products/cold-room" },
    { name: "Walk In Freezer", href: "/products/walk-in-freezer" },
    { name: "Banana Ripening Chambers", href: "/products/banana-ripening-chambers" },
    { name: "Multipurpose Cold Storage", href: "/products/multipurpose-cold-storage" },
    { name: "Commercial Cold Room", href: "/products/commercial-cold-room" },
    { name: "Ice Cream Cold Storage Room", href: "/products/ice-cream-cold-storage-room" },
    { name: "Cold Room Indoor Unit", href: "/products/cold-room-indoor-unit" },
    { name: "Cold Room Outdoor Unit", href: "/products/cold-room-outdoor-unit" },
    { name: "Fruit Ripening Chamber", href: "/products/fruit-ripening-chamber" },
    { name: "Walk In Chiller Room", href: "/products/walk-in-chiller-room" },
    { name: "Chiller Room", href: "/products/chiller-room" },
    { name: "Blast Freezers", href: "/products/blast-freezers" },
    { name: "Mushroom Cold Room", href: "/products/mushroom-cold-room" },
    { name: "Mushroom Cold Storage Plant", href: "/products/mushroom-cold-storage-plant" },
    { name: "AC Spare Parts", href: "/products/ac-spare-parts" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

    // Effect for scroll detection
    useEffect(() => {
        const handleScroll = () => {
            // We check if scrolled more than 10px
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check in case page loads already scrolled
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Effect to prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMobileMenuOpen]);

    // Handlers to close menu on link click
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileProductsOpen(false); // Also reset product dropdown
    };

    const handleProductLinkClick = () => {
        closeMobileMenu();
    };

    // Dynamic class strings for cleaner JSX
    const navClasses = `sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-white/95 backdrop-blur-lg shadow-md"
        : "bg-transparent"
        }`;

    const linkClasses = `text-base font-medium transition-colors duration-300 ${isScrolled
        ? "text-slate-700 hover:text-indigo-600"
        : "text-white hover:text-white/80"
        }`;

    const logoClasses = `text-2xl font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? "text-indigo-600" : "text-white"
        }`;

    const ctaButtonClasses = `rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
        : "bg-white text-indigo-700 hover:bg-white/90"
        }`;

    return (
        <>
            {/* 1. TOP BAR (Not sticky) */}
            <div className="hidden lg:block bg-indigo-800 text-white text-sm">
                <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                    <span className="opacity-80">
                        An ISO 9001:2015 Certified Co.
                    </span>
                    <div className="flex items-center space-x-6">
                        <a
                            href="tel:+919654572626"
                            className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <Phone size={14} className="mr-2" />
                            +91 96545 72626
                        </a>
                        <a
                            href="tel:+917011682627"
                            className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <Phone size={14} className="mr-2" />
                            +91 70116 82627
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. MAIN NAVIGATION (Sticky) */}
            <nav className={navClasses}>
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo */}
                        <Link href="/" className={logoClasses}>
                            AZ REFRIGERATION
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className={linkClasses}>
                                Home
                            </Link>
                            <Link href="/about" className={linkClasses}>
                                About Us
                            </Link>

                            {/* Products Mega Menu Dropdown */}
                            <div className="relative group">
                                <button
                                    className={`${linkClasses} flex items-center`}
                                    aria-haspopup="true"
                                >
                                    Our Products
                                    <ChevronDown
                                        size={18}
                                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                                    />
                                </button>

                                {/* Dropdown Panel */}
                                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[36rem]
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-300 transform scale-95 group-hover:scale-100
                                bg-white shadow-xl rounded-lg overflow-hidden"
                                >
                                    <div className="grid grid-cols-2 gap-x-4 p-6">
                                        {products.map((product) => (
                                            <Link
                                                key={product.href}
                                                href={product.href}
                                                className="block px-4 py-3 rounded-md hover:bg-slate-100 text-sm font-medium text-slate-700 transition-colors"
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <Link href="/contact" className={ctaButtonClasses}>
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="Open navigation menu"
                                className={`p-2 rounded-md transition-colors ${isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/20"
                                    }`}
                            >
                                <Menu size={28} />
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* 3. MOBILE NAVIGATION (Full-screen overlay) */}
            <div
                className={`fixed inset-0 z-[100] bg-white text-slate-900
                    transition-transform duration-300 ease-in-out lg:hidden
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col h-full">

                    {/* Mobile Menu Header */}
                    <div className="flex justify-between items-center h-20 px-6 border-b border-slate-200">
                        <Link href="/" onClick={closeMobileMenu} className="text-xl font-extrabold text-indigo-600">
                            AZ REFRIGERATION
                        </Link>
                        <button
                            onClick={closeMobileMenu}
                            aria-label="Close navigation menu"
                            className="p-2 -mr-2 rounded-md text-slate-700 hover:bg-slate-100"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Mobile Menu Links (Scrollable) */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="mobile-link"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="mobile-link"
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </Link>

                            {/* Mobile Products Accordion */}
                            <div className="py-2">
                                <button
                                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                    className="w-full flex justify-between items-center mobile-link"
                                    aria-expanded={isMobileProductsOpen}
                                >
                                    <span>Our Products</span>
                                    <ChevronDown
                                        size={24}
                                        className={`transition-transform ${isMobileProductsOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <div
                                    className={`pl-4 mt-2 border-l-2 border-indigo-100 overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="flex flex-col space-y-1 py-2">
                                        {products.map((product) => (
                                            <Link
                                                key={product.href}
                                                href={product.href}
                                                className="block py-3 text-base text-slate-600 hover:text-indigo-600 transition-colors"
                                                onClick={handleProductLinkClick}
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Footer (CTA & Contact) */}
                    <div className="p-6 mt-auto border-t border-slate-200 bg-white">
                        <Link
                            href="/contact"
                            className="block w-full text-center px-5 py-3 rounded-lg text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                        <div className="flex flex-col space-y-3 pt-6 text-sm">
                            <a
                                href="tel:+919654572626"
                                className="flex items-center justify-center text-slate-700 hover:text-indigo-600"
                            >
                                <Phone size={14} className="mr-2" />
                                +91 96545 72626
                            </a>
                            <a
                                href="tel:+917011682627"
                                className="flex items-center justify-center text-slate-700 hover:text-indigo-600"
                            >
                                <Phone size={14} className="mr-2" />
                                +91 70116 82627
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}