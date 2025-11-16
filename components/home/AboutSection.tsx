import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Award } from 'lucide-react'

// Text content (no changes)
const aboutText = "For anyone looking for safe and effective measures to store various items under controlled temperatures, our products and services are the best choice. We are Star Refrigeration And Air Conditioning, experts in offering bespoke fruit ripening and allied solutions."
const subText = "We constantly improve our products as per changing technology and also offer our customer advantageous deals on Walk-in Freezer Servicing, PUF Panel Room Maintenance, etc."

const keyPoints = [
    { text: "Bespoke Fruit Ripening Chambers" },
    { text: "Ice Cream, Cold Rooms & Blast Freezers" },
    { text: "PUF Panel Room Maintenance & Service" },
];

export default function AboutSection() {
    return (
        <section className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* === Image Column === */}
                    <div
                        className="relative"
                        data-aos="fade-right" // Fades in from the right
                        data-aos-duration="1000" // Lasts for 1 second
                    >
                        {/* Decorative Badge */}
                        <div
                            className="absolute -top-8 -left-8 z-10 bg-indigo-700 text-white p-5 rounded-full shadow-lg"
                            data-aos="zoom-in" // Zooms in
                            data-aos-delay="500" // Starts after 500ms
                        >
                            <Award size={40} />
                        </div>

                        {/* Image Frame */}
                        <div className="bg-blue-50 p-4 rounded-xl shadow-md">
                            <Image
                                src="https://images.unsplash.com/photo-1760463921652-78b38572da45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop"
                                alt="Modern Star Refrigeration cold storage facility"
                                width={600}
                                height={450}
                                className="rounded-lg shadow-xl object-cover w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* === Text Content Column === */}
                    {/* The parent div doesn't need data-aos, we'll animate children */}
                    <div>
                        {/* Sub-title / Pre-header */}
                        <span
                            className="text-blue-600 font-bold text-lg uppercase tracking-wide"
                            data-aos="fade-left" // Fades in from the left
                            data-aos-delay="100"  // Starts at 100ms
                        >
                            About Us
                        </span>

                        {/* Main Section Heading */}
                        <h2
                            className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-gray-900 leading-tight"
                            data-aos="fade-left"
                            data-aos-delay="200" // Starts at 200ms
                        >
                            Your Expert Partner in Precision Cooling
                        </h2>

                        {/* Main text content */}
                        <p
                            className="text-lg text-gray-600 leading-relaxed mb-6"
                            data-aos="fade-left"
                            data-aos-delay="300" // Starts at 300ms
                        >
                            {aboutText}
                        </p>
                        <p
                            className="text-lg text-gray-600 leading-relaxed mb-10"
                            data-aos="fade-left"
                            data-aos-delay="400" // Starts at 400ms
                        >
                            {subText}
                        </p>

                        {/* Key Points List (Staggered) */}
                        <ul className="space-y-5 mb-12">
                            {keyPoints.map((point, index) => (
                                <li
                                    key={index}
                                    className="flex items-start"
                                    data-aos="fade-left"
                                    // Staggered delay: 500ms, 600ms, 700ms, 800ms
                                    data-aos-delay={500 + (index * 100)}
                                >
                                    {/* Styled Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                                            <CheckCircle className="w-6 h-6 text-blue-600" />
                                        </div>
                                    </div>
                                    {/* Text Content */}
                                    <div className="ml-4 pt-2">
                                        <span className="text-lg font-medium text-gray-800">{point.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <Link
                            href="/about"
                            className="inline-flex items-center px-10 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-800 
                                     hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out"
                            data-aos="fade-up" // Fades in from the bottom
                            data-aos-delay="900" // Starts last
                            aria-label="About Star Refrigeration"
                        >
                            Read More
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}