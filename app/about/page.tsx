import Image from "next/image";
import Link from "next/link";
import {
    Home,
    ChevronRight,
    PlayCircle,
    Settings,
    Building,
    Users,
    Briefcase,
    FileText,
    Award,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

export const metadata = {
    title: "About Star Refrigeration & Air Conditioning | Since 2015",
    description:
        "Learn about Star Refrigeration & Air Conditioning, experts in cold rooms, fruit ripening chambers, PUF panels, blast freezers and HVAC solutions.",
    alternates: {
        canonical: "https://www.starrefrigeration.in/about",
    },
};

export default function AboutPage() {


    const aboutText = "For anyone looking for safe and effective measures to store various items under controlled temperatures, our products and services are the best choice. We are Star Refrigeration And Air Conditioning, experts in offering bespoke fruit ripening and allied solutions."
    const subText = "We constantly improve our products as per changing technology and also offer our customer advantageous deals on Walk-in Freezer Servicing, PUF Panel Room Maintenance, etc."

    const keyPoints = [
        { text: "Bespoke Fruit Ripening Chambers" },
        { text: "Ice Cream, Cold Rooms & Blast Freezers" },
        { text: "PUF Panel Room Maintenance & Service" },
    ];
    return (
        // Main container with a clean white background
        <div className="bg-white text-slate-800">

            <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center p-6 text-center">
                <Image
                    src={"/images/cold-rooms.svg"}
                    alt="Contact Star Refrigeration"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    quality={80}
                    className="absolute inset-0 z-0 brightness-75"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-transparent" />

                <div className="relative z-20 max-w-4xl text-white">
                    <span
                        className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold text-white/90"
                        data-aos="fade-up"
                    >
                        Our Company
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" data-aos="fade-up" data-aos-delay="100">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl opacity-90" data-aos="fade-up" data-aos-delay="200">
                        Pioneering Excellence in Refrigeration and Air Conditioning since 2015.
                    </p>
                </div>
            </section>

            {/* --- 2. Breadcrumbs --- */}
            {/* Subtle background to separate from hero and content */}
            <nav className="bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 py-3">
                    <ol className="flex items-center space-x-2 text-sm text-slate-500">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center hover:text-indigo-600 transition-colors"
                                aria-label="Home Star Refrigeration"
                            >
                                <Home size={16} className="mr-2" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <ChevronRight size={16} />
                        </li>
                        <li>
                            <span className="font-medium text-slate-700">About Us</span>
                        </li>
                    </ol>
                </div>
            </nav>

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
                                        <div className="shrink-0">
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
                                aria-label="Learn more about Star Refrigeration and Air Conditioning"
                            >
                                Read More
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 4. Key Facts Section (Premium Dark Background) --- */}
            {/* <section className="bg-slate-900 text-white py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2
                            className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
                            data-aos="fade-up"
                        >
                            Key Facts of Star Refrigeration
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        <KeyFactCard
                            icon={Settings}
                            title="Nature of Business"
                            description="Service Provider, Manufacturer, Supplier"
                            aosDelay="0"
                        />
                        <KeyFactCard
                            icon={Building}
                            title="Year of Establishment"
                            description="2015"
                            aosDelay="100"
                        />
                        <KeyFactCard
                            icon={Users}
                            title="No. of Production Units"
                            description="03"
                            aosDelay="200"
                        />
                        <KeyFactCard
                            icon={Briefcase}
                            title="Employees"
                            description="22"
                            aosDelay="300"
                        />
                        <KeyFactCard
                            icon={FileText}
                            title="GST No."
                            description="07ABYFA2930JZS"
                            aosDelay="400"
                        />
                    </div>
                </div>
            </section> */}


            {/* <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2
                            className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-slate-900 leading-tight"
                            data-aos="fade-up"
                        >
                            Our Core Team
                        </h2>
                        <p
                            className="text-lg text-slate-600 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Meet the dedicated individuals driving our success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <TeamMemberCard
                            name="Mr. Afroz Siddiqui"
                            role="Founder"
                            imageUrl="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop"
                            aosDelay="0"
                        />
                        <TeamMemberCard
                            name="Mr. Abdul Nazir"
                            role="Partner"
                            imageUrl="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop"
                            aosDelay="100"
                        />
                    </div>
                </div>
            </section> */}
        </div>
    );
}

// --- Helper Components ---

// Key Fact Card Component (Refined)
function KeyFactCard({
    icon: Icon,
    title,
    description,
    aosDelay,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    aosDelay: string;
}) {
    return (
        <div
            className="bg-slate-800 p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 group"
            data-aos="fade-up"
            data-aos-delay={aosDelay}
        >
            {/* Icon circle with premium hover effect */}
            <div className="w-16 h-16 flex items-center justify-center bg-slate-700 rounded-full mb-5 transition-all duration-300 group-hover:bg-white">
                <Icon
                    size={32}
                    className="text-indigo-400 transition-all duration-300 group-hover:text-indigo-600"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

// Team Member Card Component (Refined)
function TeamMemberCard({
    name,
    role,
    imageUrl,
    aosDelay,
}: {
    name: string;
    role: string;
    imageUrl: string;
    aosDelay: string;
}) {
    return (
        <div
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center flex flex-col items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={aosDelay}
        >
            {/* Larger image for more presence */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-slate-100">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    // No need for `style`, `object-cover` className is sufficient
                    className="object-cover"
                />
            </div>
            {/* Adjusted font weights for a cleaner look */}
            <h3 className="text-2xl font-semibold text-slate-900 mb-1">{name}</h3>
            <p className="text-indigo-600 text-base font-medium">{role}</p>
        </div>
    );
}