"use client";

import { useState, useEffect, ElementType } from "react"; // 1. Import ElementType
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    ArrowUp,
    MessageCircle,
} from "lucide-react";

// Assuming data.js is at ../data.js
// You may need to define the type for Product
import { productDetails } from "../data";

// --- MAIN COMPONENT (No changes here) ---
export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const splitIndex = Math.ceil(productDetails.length / 2);
    const productCol1 = productDetails.slice(0, splitIndex);
    const productCol2 = productDetails.slice(splitIndex);

    return (
        <>
            <footer className="bg-slate-900 text-gray-300 pt-20 relative">
                {/* --- Premium Wavy Divider --- */}
                <div className="absolute top-0 left-0 w-full h-24 -translate-y-full">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-r from-blue-600 via-purple-500 to-pink-500"
                        style={{
                            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 80% 60%, 60% 30%, 40% 70%, 20% 40%, 0% 80%)"
                        }}
                    />
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* --- Column 1: Company Info --- */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <Link href="/" aria-label="Star Refrigeration" className="text-3xl font-extrabold text-white mb-4 block">
                                Star Refrigeration
                            </Link>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Explore a full line of easy-to-install and effective Cold Storage Plant, Walk In Cooler Room, PUF Panel Room, and more for all your controlled temperature needs.
                            </p>
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Us:</h4>
                            <div className="flex space-x-4">
                                <SocialIcon href="#" icon={Facebook} />
                                <SocialIcon href="#" icon={Instagram} />
                                <SocialIcon href="#" icon={Linkedin} />
                            </div>
                        </div>

                        {/* --- Column 2: Products 1 --- */}
                        <div data-aos="fade-up" data-aos-delay="200" className="lg:pl-8">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Our Products</h3>
                            <ul className="space-y-3">
                                {productCol1.map((product) => (
                                    <ProductLink key={product.name} href={product.href} name={product.name} />
                                ))}
                            </ul>
                        </div>

                        {/* --- Column 3: Products 2 --- */}
                        <div data-aos="fade-up" data-aos-delay="300" className="lg:pl-8">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider opacity-0 max-lg:hidden">
                                Our Products
                            </h3>
                            <ul className="space-y-3">
                                {productCol2.map((product) => (
                                    <ProductLink key={product.name} href={product.href} name={product.name} />
                                ))}
                            </ul>
                        </div>

                        {/* --- Column 4: Contact --- */}
                        <div data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Contact</h3>
                            <ul className="space-y-4">
                                <ContactItem
                                    icon={MapPin}
                                    text="Village-Sakri,Post-Sakri Madhubani,Bihar-847239"
                                />
                                <ContactItem
                                    icon={Phone}
                                    text="+91-8178198555"
                                />
                                <ContactItem
                                    icon={Mail}
                                    text="irshadali90905@gmail.com"
                                />
                                {/* <ContactItem
                                    icon={Mail}
                                    text="abdulaziz230693@gmail.com"
                                /> */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- Sub-Footer --- */}
                <div className="mt-16 bg-black bg-opacity-30 py-6">
                    <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                        Copyright ©{new Date().getFullYear()} All Rights Reserved | Design & Developed by{" "}
                        <a
                            href="https://kiswasoft.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Kiswasoft Technologies
                        </a>
                    </div>
                </div>
            </footer>

            {/* --- Floating WhatsApp Button --- */}
            <Link
                href="https://wa.me/918178198555"

                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
            </Link>

            {/* --- Floating Back to Top Button --- */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all"
                    aria-label="Back to top"
                >
                    <ArrowUp size={28} />
                </button>
            )}
        </>
    );
}

// --- Sub-components with types fixed ---

// 2. FIX: Add types for 'href' and 'icon'
function SocialIcon({ href, icon: Icon }: { href: string; icon: ElementType }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full text-blue-400 hover:bg-indigo-700 hover:text-white transition-all"
            aria-label="Star Refrigeration"
        >
            <Icon size={20} />
        </Link>
    );
}

// 3. FIX: Add types for 'href' and 'name'
function ProductLink({ href, name }: { href: string; name: string }) {
    return (
        <li>
            <Link
                href={href}
                className="flex items-center text-gray-400 hover:text-white hover:translate-x-1 transition-all"
                aria-label={`${name} Star Refrigeration`}
            >
                <ChevronRight size={16} className="mr-2 text-blue-500" />
                {name}
            </Link>
        </li>
    );
}

// 4. FIX: Add types for 'icon' and 'text'
function ContactItem({ icon: Icon, text }: { icon: ElementType; text: string }) {
    return (
        <li className="flex items-start">
            <Icon size={20} className="shrink-0 mr-4 mt-1 text-blue-400" />
            <span>{text}</span>
        </li>
    );
}