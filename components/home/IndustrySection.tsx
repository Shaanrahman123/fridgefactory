import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const industryData = [
    {
        title: "Food Industry",
        description: "We provide innovative solutions and services to enhance efficiency and quality within the food industry.",
        href: "/contact?service=food-industry",
        imageUrl: "/images/industries/1.jpg"
    },
    {
        title: "Frozen Food",
        description: "We offer advanced water treatment solutions for the frozen food industry, ensuring clean, efficient, and sustainable water management.",
        href: "/contact?service=frozen-food",
        imageUrl: "/images/industries/2.jpg"
    },
    {
        title: "Chemical Industry",
        description: "We offer specialized solutions to optimize processes, enhance safety, and drive innovation in the chemical industry.",
        href: "/contact?service=chemical-industry",
        imageUrl: "/images/industries/3.jpg"
    },
    {
        title: "Dairy Industry",
        description: "We provide advanced water treatment solutions for the dairy industry, ensuring clean, safe, and sustainable water use.",
        href: "/contact?service=dairy-industry",
        imageUrl: "/images/industries/4.jpg"
    },
];

export default function IndustrySection() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span
                        className="text-blue-600 font-bold text-lg uppercase tracking-wide"
                        data-aos="fade-up"
                    >
                        Our Expertise
                    </span>
                    <h2
                        className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-gray-900 leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Industry We Serve
                    </h2>
                    <p
                        className="text-lg text-gray-600 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We provide specialized cooling and refrigeration solutions tailored to the unique needs of diverse industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {industryData.map((industry, index) => (
                        <div
                            key={industry.title}
                            className="group relative h-96 rounded-xl overflow-hidden shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <Image
                                src={industry.imageUrl}
                                alt={industry.title}
                                fill
                                style={{ objectFit: "cover" }}
                                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

                            {/* <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-bold text-white z-10 relative">
                                    {industry.title}
                                </h3>
                            </div> */}

                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-linear-to-t from-blue-900 via-blue-800 to-blue-600 text-white
                                            transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <h3 className="text-2xl font-bold mb-3">
                                    {industry.title}
                                </h3>
                                <p className="text-blue-100 text-base mb-6 flex-1">
                                    {industry.description}
                                </p>
                                <Link
                                    href={industry.href}
                                    className="inline-flex items-center font-semibold text-white group-hover:text-blue-200"
                                >
                                    Enquire Now
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}