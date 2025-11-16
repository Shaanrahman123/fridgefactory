import Link from 'next/link';
import { Download } from 'lucide-react';

export default function QualityAssurance() {
    return (
        <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
            <div
                className="absolute inset-0 -z-0 opacity-20"
                aria-hidden="true"
            >
                <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-radial-gradient from-blue-600 to-transparent -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-radial-gradient from-blue-700 to-transparent translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2
                        className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-white leading-tight"
                        data-aos="fade-up"
                    >
                        We Provide The Best Quality Assurance
                    </h2>
                    <p
                        className="text-lg text-gray-300 leading-relaxed mb-12"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Star Refrigeration And Air Conditioning is dedicated to delivering top-tier cooling solutions. To guarantee the highest quality of products such as Cold Storage Room, Cold Room, Pre Fabricated Walk In Freezer, and more, each product undergoes rigorous testing and is closely monitored to ensure optimal performance, all while adhering to the latest industry standards by our experienced quality experts.
                    </p>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Link
                            href="/path-to-your-brochure.pdf"
                            className="inline-flex items-center px-10 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-800 
                                     hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out"
                        >
                            Download Brochure
                            <Download className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}